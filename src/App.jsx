import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import Experience from "./Experience.js";
import { LoadingScreen } from "./LoadingScreen";
import { Suspense, useEffect, useState } from "react";
import * as THREE from "three";

// const audio = new Audio("./music/1.mp3");

function App() {
  // const [start, setStart] = useState(false);

  // useEffect(() => {
  //   if (start) {
  //     audio.play();
  //   }
  // }, [start]);
  return (
    <>
      {/* <LoadingScreen started={start} onStarted={() => setStart(true)} /> */}
      <Canvas flat>
        <ScrollControls pages={28} damping={0.6}>
          {/* <Suspense fallback={null}>{<Experience />}</Suspense> */}
          <Experience />
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
