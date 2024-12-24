import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useScroll,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { Background } from "./Background";
import { Office } from "./Office";
import { Projects } from "./Projects";

export const Experience = (props) => {
  const { menuOpened } = props;
  const { viewport } = useThree();
  const data = useScroll();
  const height = viewport?.height || 5; // Fallback for viewport height

  const isMobile = window.innerWidth < 768;
  const responsiveRatio = viewport.width / 2.5;
  const OfficeScaleRatio = Math.max(0.59, Math.min(1.3 * responsiveRatio, 1.3));

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -8 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 3 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 400);
  }, [menuOpened, section]);

  const characterGroup = useRef();

  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });
  

  return (
    <>
      <Background />
      <motion.group
        position={[
                  isMobile ? 0.02 : 0.40, 
                  isMobile ? 0.05 : 0.14, 
                  isMobile ? 1.974 : 1.94,
                ]}
        rotation={[Math.PI, 0.75, Math.PI]}
        animate={"" + section}
        transition={{
          duration: 0.8,
        }}
        variants={{
          0: {
            scaleX: isMobile ? 0.225: 0.475,
            scaleY: isMobile ? 0.225: 0.475,
            scaleZ: isMobile ? 0.225: 0.475,
          },
          1: {
            y: -height - 1.5,
            x: isMobile ? 0.4 : 0,
            z: -1.6,
            rotateX: 0,
            rotateY: isMobile ? -Math.PI / 2 : 0,
            rotateZ: 0,
            scaleX: isMobile ? 1 : 1,
            scaleY: isMobile ? 1 : 1,
            scaleZ: isMobile ? 1 : 1,
          },
          2: {
            x: -1,
            y: -height * 3 + 0.2,
            z: -3,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
          },
          3: {
            y: -height * 3 - 0.1,
            x: 0.25,
            z: 4.5,
            rotateX: 0,
            rotateY: -Math.PI / 4,
            rotateZ: 0,
          },
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[isMobile ? 0 : 0.269 * OfficeScaleRatio, isMobile ? -viewport.height / 6 : 2, 2]}
        scale={[OfficeScaleRatio, OfficeScaleRatio, OfficeScaleRatio]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: isMobile ? -viewport.height / 500 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <Office section={section} />
        <group
          ref={characterContainerAboutRef}
          name="Empty"
          position={[0.014, 0.11, -0.056]}
          rotation={[Math.PI, -0.033, Math.PI]}
          scale={0.37}
        ></group>
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"white"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1, 1, 1]} position={[1.5, -5, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color={"white"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1, 1, 1]} position={[-2.5, -3, -11]}>
            <sphereGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color={"white"}
            />
          </mesh>
        </Float>
      </motion.group>
      <Projects />
    </>
  );
};
