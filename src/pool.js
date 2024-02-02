import {
  useHelper,
  Plane,
  shaderMaterial,
  TransformControls,
  Center,
  useTexture,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { folder, useControls } from "leva";
import { useRef } from "react";
import { extend, useFrame } from "@react-three/fiber";
import poolVertexShader from "./shaders/pool_water/vertex.js";
import poolFragmentShader from "./shaders/pool_water/fragment.js";
import * as THREE from "three";

export default function Pool() {
  const { nodes } = useGLTF("./model/myOwn.glb");

  // const directinalLight = useRef();
  // useHelper(directinalLight, THREE.DirectionalLightHelper, 1);

  const { pool_size, directinal_light } = useControls({
    pool_size: { value: { x: 7.15, y: 3.4 }, step: 0.1 },
    // directinal_light: { value: { x: 8, y: 8, z: 8 }, step: 0.1 },
  });

  const {
    animate,
    bigWavesElevation,
    bigWavesFrequency,
    bigWaveSpeed,
    surfaceColor,
    depthColor,
    colorOffset,
    colorMultiplier,
    smallWavesElevation,
    smallWavesFrequency,
    smallWavesSpeed,
    smallIterations,
  } = useControls({
    animate: true,
    colors: folder({
      surfaceColor: "#fdf3c0",
      depthColor: "#3f888f",
      colorOffset: 0.2,
      colorMultiplier: 2.4,
    }),

    bigWaves: folder({
      bigWavesElevation: 0.1,
      bigWavesFrequency: [0.5, 0.5],
      bigWaveSpeed: 0.5,
    }),
    smallWaves: folder({
      smallWavesElevation: 0.15,
      smallWavesFrequency: 3,
      smallWavesSpeed: 0.2,
      smallIterations: 4,
    }),
  });

  const poolRef = useRef();
  useFrame((_, delta) => animate && (poolRef.current.uTime += delta));

  return (
    <>
      {/* <directionalLight
        ref={directinalLight}
        position={[directinal_light.x, directinal_light.y, directinal_light.z]}
        intensity={10}
        color="red"
        castShadow
      /> */}

      <Plane
        args={[pool_size.x, pool_size.y, 15, 15]}
        rotation-x={-Math.PI / 2}
        position-x={8.958683013916016}
        position-y={-3.3}
        position-z={5.0845046043396}
        receiveShadow
      >
        <poolMaterial
          key={PoolMaterial.key}
          ref={poolRef}
          uBigWavesElevation={bigWavesElevation}
          uBigWavesFrequency={bigWavesFrequency}
          uBigWavesSpeed={bigWaveSpeed}
          uSurfaceColor={surfaceColor}
          uDepthColor={depthColor}
          uColorOffset={colorOffset}
          uColorMultiplier={colorMultiplier}
          uSmallWavesElevation={smallWavesElevation}
          uSmallWavesFrequency={smallWavesFrequency}
          uSmallWavesSpeed={smallWavesSpeed}
          uSmallIterations={smallIterations}
        />
      </Plane>
    </>
  );
}
const PoolMaterial = shaderMaterial(
  {
    uTime: 1,
    uBigWavesElevation: 0.1,
    uBigWavesFrequency: [0.5, 0.5],
    uBigWavesSpeed: 0.5,
    uSurfaceColor: new THREE.Color("#fdf3c0"),
    uDepthColor: new THREE.Color("#3f888f"),
    uColorOffset: 0.2,
    uColorMultiplier: 2.4,
    uSmallWavesElevation: 0.15,
    uSmallWavesFrequency: 3,
    uSmallWavesSpeed: 0.2,
    uSmallIterations: 4,
    transparent: true,
    opacity: 0.7,
    // ,

    // 367fb7
  },
  poolVertexShader,
  poolFragmentShader
);

PoolMaterial.key = Math.random();
extend({ PoolMaterial });
