import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Landing.module.css";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import HomeInfo from "../components/HomeInfo";

const LandingP = () => {
  let navigate = useNavigate();
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const goLogin = () => {
    navigate("/letter");
  };

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [1.3, 1.3, 1.3];
      screenPosition = [0, -1.5, -10];
    } else {
      screenScale = [1.6, 1.6, 1.6];
      screenPosition = [0, -3, -10];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <>
      <section className="w-full h-screen relative bg-beige pt-12">
        <div className="absolute top-18 left-0 right-0 z-10 flex items-center justify-center">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>

        <p className={styles.tagline}>"A time capsule for your thoughts"</p>
        <button onClick={goLogin} className={`${styles.sendBtn}`}>
          Send a letter
        </button>

        <Canvas
          className={`w-full h-screen bg-transparent ${
            isRotating ? "cursor-grabbing" : "cursor-grab"
          } `}
          camera={{ near: 0.1, far: 100 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" />
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
          </Suspense>
        </Canvas>
      </section>
    </>
  );
};

export default LandingP;
