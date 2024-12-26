import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

const isMobile = window.innerWidth < 768;

export const projects = [
    {
        title: "Dealership Web App",
        url: "https://github.com/nour29110/xrwvm-fullstack_developer_capstone",
        image: "projects/car_webapp.png",
        description:
          "Django, React, Node.js, MongoDB, IBM Cloud, sentiment analysis, CI/CD pipelines, automated testing, deployment, Kubernetes",
      },
    {
        title: "Game of Life",
        url: "https://github.com/nour29110/game_of_life", 
        image: "projects/game_of_life.png", 
        description: "A C++ implementation of Conway's Game of Life with customizable grids and interactive simulation modes.",
    },
    {
        title: "Anomaly Detection in Water Systems",
        url: "https://github.com/nour29110/Water-System-Anomaly-Detection", 
        image: "projects/water_systems.png", 
        description:
          "machine learning, LSTM, Transformers, Autoencoders, Random Forest, SVM, CNN, overfitting, class imbalance, time series analysis",
      },
      {
        title: "SpaceX Falcon 9 Landing Prediction",
        url: "https://github.com/nour29110/IBM-SpaceX-Project", 
        image: "projects/spaceX.jpeg", 
        description:
          "Logistic Regression, Decision Tree, KNN, data cleaning, EDA, prediction, SpaceX Falcon 9, rocket landings",
      },
    {
        title: "Concrete Crack Detection",
        url: "https://github.com/nour29110/deep-learning-project", 
        image: "projects/concrete_crack_detector.png", 
        description:
          "deep learning, PyTorch, image classification, cracks in concrete, 99.4% accuracy, dataset processing, cross-entropy loss, GPU computing",
      },
  ];
  

  const Project = (props) => {
    const { project, highlighted } = props;
  
    const background = useRef();
    const bgOpacity = useMotionValue(0.4);
  
    useEffect(() => {
      animate(bgOpacity, highlighted ? 0.7 : 0.4);
    }, [highlighted]);
  
    useFrame(() => {
      background.current.material.opacity = bgOpacity.get();
    });
  
    return (
      <group {...props}>
        <mesh
          position-z={-0.001}
          onClick={() => window.open(project.url, "_blank")}
          ref={background}
        >
          <planeGeometry args={[1, 0.8, 1]} />
          <meshBasicMaterial color="black" transparent opacity={0.4} />
        </mesh>
        <Image
          scale={[0.92, 0.5, 0]}
          url={project.image}
          toneMapped={false}
          position-y={0.11}
        />
        <Text
          maxWidth={2}
          anchorX={"left"}
          anchorY={"top"}
          fontSize={0.04}
          position={[-0.443, -0.17, 0]}
        >
          {project.title.toUpperCase()}
        </Text>
        <Text
          maxWidth={0.89}
          anchorX="left"
          anchorY="top"
          fontSize={0.033}
          position={[-0.443, -0.24, 0]}
        >
          {project.description}
        </Text>
      </group>
    );
  };
  
  export const currentProjectAtom = atom(Math.floor(projects.length / 2));
  
  export const Projects = () => {
    const { viewport } = useThree();
    const [currentProject] = useAtom(currentProjectAtom);
  
    return (
      <group position-y={-viewport.height * 2.14 + 0}>
        {projects.map((project, index) => (
          <motion.group
            key={"project_" + index}
            position={[index * 2.5, 0, -3]}
            animate={{
              x: 0 + (index - currentProject) * (isMobile ? 1 : 1.3),
              y: currentProject === index ? 0 : -0.1,
              z: currentProject === index ? -2.3 : -4,
              rotateX: currentProject === index ? 0 : -Math.PI / 5,
              rotateZ: currentProject === index ? 0 : -0.1 * Math.PI,
            }}
          >
            <Project project={project} highlighted={index === currentProject} />
          </motion.group>
        ))}
      </group>
    );
  };