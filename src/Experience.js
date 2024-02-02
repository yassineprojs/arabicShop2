import {
  Html,
  Float,
  TransformControls,
  Center,
  PerspectiveCamera,
  useTexture,
  useGLTF,
  OrbitControls,
  Environment,
  Line,
  useScroll,
  Sparkles,
  SpotLight,
  useHelper,
} from "@react-three/drei";
import { EffectComposer } from "@react-three/postprocessing";
import Meshes from "./Meshes.js";
import { useMemo, useRef } from "react";
import Pool from "./pool.js";
import { Perf } from "r3f-perf";
import { folder, useControls } from "leva";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Group } from "three";

export default function Experience() {
  const { perfVisible, envMapIntensity, curvet, curver, spot } = useControls({
    perfVisible: true,
    envMapIntensity: { value: 1, min: 0, max: 12 },
    curvet: { value: { x: 14.6, y: -0.7, z: 5.3 }, step: 0.1 },
    curver: { value: { x: 0, y: 0, z: 0 }, step: 0.1 },
    spot: { value: { x: 0, y: 0, z: 0 }, step: 0.1 },
  });
  const LINE_NB_POINTS = 1000;
  const CURVE_AHEAD_CAMERA = 0.008;
  // const CURVE_AHEAD = 0.02;

  // const spotLightH = useRef();
  // useHelper(spotLightH, THREE.SpotLightHelper, 1);
  // console.log(spotLightH);

  // useFrame(() => {
  //   spotLightH.current.position.x = 5;
  //   spotLightH.current.position.y = 20;
  //   spotLightH.current.position.z = 5;
  // });

  const cameraGroup = useRef();

  const scroll = useScroll();

  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(1.0, -0.5, -0.178145),
        new THREE.Vector3(-1.1958, -0.5, -0.739767),
        new THREE.Vector3(1.0142, -0.5, -2.48982),
        new THREE.Vector3(0.426, -0.5, -6),
        new THREE.Vector3(-2.4101, -0.5, -7.2),
        new THREE.Vector3(-10.7523, -0.5, -7.09056),

        new THREE.Vector3(-13.8929, -0.5, -2.6459),
        new THREE.Vector3(-14.7309, -0.5, 1.76006),
        new THREE.Vector3(-11.9809, -0.5, 3.5),

        new THREE.Vector3(-7.4713, -0.4, 3.5),

        new THREE.Vector3(-2.2, -0.3, 3.4925),
      ],
      false,
      "catmullrom",
      0.5
    );
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS);
  }, [curve]);

  const shape = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, -0.05);
    shape.lineTo(0, 0.05);
    return shape;
  }, [curve]);

  // get curret scroll data
  useFrame((_state, delta) => {
    // get the scroll positive value
    const scrollOffset = Math.max(0, scroll.offset);

    //get the point on the curve(getPoint gets values between 0 and 1)
    const curPoint = curve.getPoint(scrollOffset);

    // // follow the curve points
    cameraGroup.current.position.lerp(curPoint, delta * 24);
  });

  return (
    <>
      {/* {perfVisible ? <Perf position="top-left" /> : null} */}
      {/* <OrbitControls makeDefault /> */}
      {/* <Environment
        background
        files={[
          "./env_maps/px.png",
          "./env_maps/nx.png",
          "./env_maps/py.png",
          "./env_maps/ny.png",
          "./env_maps/pz.png",
          "./env_maps/nz.png",
        ]}
      /> */}
      {/* <SpotLight
        ref={spotLightH}
        distance={30}
        attenuation={31}
        angle={0.5}
      ></SpotLight> */}
      <Center>
        <group ref={cameraGroup}>
          <PerspectiveCamera
            fov={52}
            near={0.1}
            far={200}
            position={[16, 0, 5.3]}
            rotation-y={1.5}
            makeDefault
          ></PerspectiveCamera>
        </group>

        {/* Line */}
        <group
          position-x={curvet.x}
          position-y={curvet.y}
          position-z={curvet.z}
          rotation-x={curver.x}
        >
          <mesh>
            <extrudeGeometry
              args={[
                shape,
                {
                  steps: LINE_NB_POINTS,
                  bevelEnabled: false,
                  extrudePath: curve,
                },
              ]}
            />
            <meshStandardMaterial color={"white"} opacity={0} transparent />
          </mesh>
        </group>
        <Meshes></Meshes>
        <Pool></Pool>
        <Sparkles
          size={6}
          position={[8.9, -3.3, 5]}
          scale={[7.15, 5, 3]}
          count={12}
          speed={0.5}
          position-y={-0.5}
          opacity={0.3}
        ></Sparkles>
      </Center>
    </>
  );
}
