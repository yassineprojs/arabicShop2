import {
  Html,
  Float,
  TransformControls,
  Center,
  useTexture,
  useGLTF,
  OrbitControls,
  Environment,
  ScrollControls,
  useScroll,
  Text,
  meshBounds,
} from "@react-three/drei";
import { EffectComposer } from "@react-three/postprocessing";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import { folder, useControls } from "leva";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import {
  fadeOnBeforeCompile,
  fadeOnBeforeCompileFlat,
} from "./FadeMaterial.js";

export default function Meshes() {
  const { nodes } = useGLTF("./model/myOwn.glb");

  const { FloatSpeed, FloatRotIntensity, FloatIntensity, FloatRange } =
    useControls({
      JobbaFloat: folder({
        FloatSpeed: 1.2,
        FloatRotIntensity: 0.05,
        FloatIntensity: 0.7,
        FloatRange: [0, 0.3],
      }),
    });

  const pillarRef = useRef();
  const JobbaRef = useRef();
  const registerRef = useRef();

  // login

  const ArchPieces1 = useTexture("./model/arches1secondBake.jpg");
  ArchPieces1.flipY = false;
  const ArchPieces2 = useTexture("./model/ArchPieces2nd.jpg");
  ArchPieces2.flipY = false;
  const Balcony = useTexture("./model/balcony.jpg");
  Balcony.flipY = false;
  const Tea = useTexture("./model/barredCupTea.jpg");
  Tea.flipY = false;
  const Curtains = useTexture("./model/curtains.jpg");
  Curtains.flipY = false;
  const DoorsWindowsJarra = useTexture("./model/DoorsWindowsBigjarra.jpg");
  DoorsWindowsJarra.flipY = false;
  const floorPool = useTexture("./model/floor+Pool.jpg");
  floorPool.flipY = false;
  const Fountain = useTexture("./model/fountain.jpg");
  Fountain.flipY = false;
  const FountainArch = useTexture("./model/fountainArch.jpg");
  FountainArch.flipY = false;
  const GroundLamps = useTexture("./model/groundLamps2Baked.jpg");
  GroundLamps.flipY = false;
  const jobba = useTexture("./model/jobba.jpg");
  jobba.flipY = false;
  const Pillars = useTexture("./model/pillars.jpg");
  Pillars.flipY = false;
  const S7ouna = useTexture("./model/s7ouna.jpg");
  S7ouna.flipY = false;
  const plante_darbouka = useTexture("./model/TawlaDarboukaPlanteBaked2.jpg");
  plante_darbouka.flipY = false;
  const wallsUpperLamps = useTexture("./model/walls+upperLamps.jpg");
  wallsUpperLamps.flipY = false;
  const table = useTexture("./model/tawla.jpg");
  table.flipY = false;
  const BigDoor = useTexture("./model/big_door.jpg");
  BigDoor.flipY = false;

  return (
    <>
      <group position={new THREE.Vector3(8, 1, -2)}>
        <Text
          font="./fonts/DMSerif.woff"
          fontSize={0.6}
          color={"#007467"}
          rotation-y={1.6}
          maxWidth={3}
          lineHeight={0.9}
        >
          Welcome to Arabia!
          <meshStandardMaterial
            color={"#007467"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
        <Text
          font="./fonts/marathon.ttf"
          fontSize={0.4}
          anchorY="middle"
          color={"#a23333"}
          rotation-y={1.6}
          maxWidth={3}
          lineHeight={0.7}
          position-y={-1}
        >
          Have a seat, enjoy the ride!
          <meshStandardMaterial
            color={"#a23333"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      </group>
      <Text
        position={[-1, 0.5, 2]}
        font="./fonts/DMSerif.woff"
        fontSize={0.3}
        color={"#007467"}
        rotation-y={1.6}
        maxWidth={3.5}
        lineHeight={1.2}
      >
        Step into a world of color and vibrancy with our Eastern products.
        <meshStandardMaterial
          color={"#007467"}
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>

      <Text
        position={[3, 0.8, 7]}
        font="./fonts/DMSerif.woff"
        fontSize={0.3}
        color={"#007467"}
        rotation-y={1.6}
        maxWidth={3.5}
        lineHeight={1.2}
      >
        Experience the allure of the East with our curated collection.
        <meshStandardMaterial
          color={"#007467"}
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>

      <Float
        speed={FloatSpeed}
        FloatIntensity={FloatIntensity}
        rotationIntensity={FloatRotIntensity}
        floatingRange={FloatRange}
      >
        <mesh
          ref={JobbaRef}
          geometry={nodes.joba3arbi.geometry}
          position={nodes.joba3arbi.position}
          rotation={nodes.joba3arbi.rotation}
        >
          {/* _x: -2.10542064820091, _y: -0.042469795556220734, _z: 3.1164573041324197 */}
          <meshBasicMaterial map={jobba}></meshBasicMaterial>
          {/* <Html
            prepend={true}
            distanceFactor={5}
            center
            className="prodLabel"

            // occlude={[pillarRef, JobbaRef]}
          >
            <p className="label_name">JELLABA</p>
            <div className="ballon ">
              <div className="wrapper-content">
                <p> */}

          {/* </p>
              </div>
            </div>
          </Html> */}
        </mesh>
        <Text
          ref={registerRef}
          raycast={meshBounds}
          onClick={() => {
            navbar.classList.add("open");
            overlay.classList.add("open");
          }}
          onPointerEnter={() => {
            document.body.style.cursor = "pointer";
            registerRef.current.material.color.set("#007467");
          }}
          onPointerLeave={() => {
            document.body.style.cursor = "default";
            registerRef.current.material.color.set("#a23333");
          }}
          position={new THREE.Vector3(10, 0.2, 8.5)}
          font="./fonts/marathon.ttf"
          fontSize={0.5}
          color={"#a23333"}
          rotation-y={1.6}
        >
          Register
          <meshStandardMaterial
            opacity={2.3}
            color={"#a23333"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      </Float>
      <mesh
        geometry={nodes.arch1st.geometry}
        position={nodes.arch1st.position}
        rotation={nodes.arch1st.rotation}
      >
        <meshBasicMaterial map={ArchPieces1}></meshBasicMaterial>
      </mesh>

      <mesh
        geometry={nodes.archPieces2nd.geometry}
        position={nodes.archPieces2nd.position}
        rotation={nodes.archPieces2nd.rotation}
      >
        <meshBasicMaterial map={ArchPieces2}></meshBasicMaterial>
      </mesh>

      <mesh
        geometry={nodes.balcony.geometry}
        position={nodes.balcony.position}
        rotation={nodes.balcony.rotation}
      >
        <meshBasicMaterial map={Balcony}></meshBasicMaterial>
      </mesh>

      <mesh
        geometry={nodes.s7ouna.geometry}
        position={nodes.s7ouna.position}
        rotation={nodes.s7ouna.rotation}
      >
        <meshBasicMaterial map={S7ouna}></meshBasicMaterial>
      </mesh>

      <mesh
        geometry={nodes.doorsWindowsBigjarra.geometry}
        position={nodes.doorsWindowsBigjarra.position}
        rotation={nodes.doorsWindowsBigjarra.rotation}
      >
        <meshBasicMaterial map={DoorsWindowsJarra}></meshBasicMaterial>
      </mesh>

      <mesh
        geometry={nodes.planteDarbouka.geometry}
        position={nodes.planteDarbouka.position}
        rotation={nodes.planteDarbouka.rotation}
      >
        <meshBasicMaterial map={plante_darbouka}></meshBasicMaterial>
      </mesh>

      <mesh
        geometry={nodes.barred_CupTea.geometry}
        position={nodes.barred_CupTea.position}
        rotation={nodes.barred_CupTea.rotation}
      >
        <meshBasicMaterial map={Tea}></meshBasicMaterial>
      </mesh>

      <mesh
        geometry={nodes.curtains.geometry}
        position={nodes.curtains.position}
        rotation={nodes.curtains.rotation}
      >
        <meshBasicMaterial map={Curtains}></meshBasicMaterial>
      </mesh>
      <mesh
        geometry={nodes.floor_Pool.geometry}
        position={nodes.floor_Pool.position}
        rotation={nodes.floor_Pool.rotation}
      >
        <meshBasicMaterial map={floorPool}></meshBasicMaterial>
      </mesh>

      <mesh
        geometry={nodes.fountain.geometry}
        position={nodes.fountain.position}
        castShadow
        rotation={nodes.fountain.rotation}
      >
        <meshBasicMaterial map={Fountain}></meshBasicMaterial>
      </mesh>

      <mesh
        geometry={nodes.fountainArch.geometry}
        position={nodes.fountainArch.position}
        rotation={nodes.fountainArch.rotation}
      >
        <meshBasicMaterial map={FountainArch}></meshBasicMaterial>
      </mesh>

      <mesh
        geometry={nodes.groundLamps.geometry}
        position={nodes.groundLamps.position}
        rotation={nodes.groundLamps.rotation}
      >
        <meshBasicMaterial map={GroundLamps}></meshBasicMaterial>
      </mesh>

      <mesh
        ref={pillarRef}
        geometry={nodes.pillars.geometry}
        position={nodes.pillars.position}
        rotation={nodes.pillars.rotation}
      >
        <meshBasicMaterial map={Pillars}></meshBasicMaterial>
      </mesh>

      <mesh
        geometry={nodes.walls_upperLamps.geometry}
        position={nodes.walls_upperLamps.position}
        rotation={nodes.walls_upperLamps.rotation}
      >
        <meshBasicMaterial map={wallsUpperLamps}></meshBasicMaterial>
      </mesh>

      <mesh
        geometry={nodes.Table.geometry}
        position={nodes.Table.position}
        rotation={nodes.Table.rotation}
      >
        <meshBasicMaterial map={table}></meshBasicMaterial>
      </mesh>

      <mesh
        geometry={nodes.bigDoor.geometry}
        position={nodes.bigDoor.position}
        rotation={nodes.bigDoor.rotation}
      >
        <meshBasicMaterial map={BigDoor}></meshBasicMaterial>
      </mesh>
    </>
  );
}

// const textures = [
//   "./model/arches1secondBake.jpg",
//   "./model/ArchPieces2nd.jpg",
//   "./model/balcony.jpg",
//   "./model/barredCupTea.jpg",
//   "./model/curtains.jpg",
//   "./model/DoorsWindowsBigjarra.jpg",
//   "./model/floor+Pool.jpg",
//   "./model/fountain.jpg",
//   "./model/fountainArch.jpg",
//   "./model/groundLamps2Baked.jpg",
//   "./model/jobba.jpg",
//   "./model/pillars.jpg",
//   "./model/s7ouna.jpg",
//   "./model/TawlaDarboukaPlanteBaked2.jpg",
//   "./model/walls+upperLamps.jpg",
//   "./model/tawla.jpg",
//   "./model/big_door.jpg",
// ];

// const useTextures = () => {
//   const texturesRef = useRef([]);

//   if (texturesRef.current.length === 0) {
//     textures.forEach((texture) => {
//       const textureRef = useTexture(texture);
//       textureRef.flipY = false;
//       texturesRef.current.push(textureRef);
//     });
//   }

//   return texturesRef.current;
// };
