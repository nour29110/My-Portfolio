/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/scene.glb -K 
*/

import { useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";
import React, { useEffect } from "react";

import * as THREE from "three";


export function Office(props) {
  const {section} = props;
  const { nodes, materials } = useGLTF('models/scene2.glb')
  const texture = useTexture("textures/Baked3.jpg")
  const textureVSCode = useVideoTexture("textures/vscode1.mp4")
  const textureSyria = useTexture ("textures/syria1.png")

  texture.flipY = false;
  textureSyria.flipY = false;
  textureVSCode.flipY = false;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1
  });

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture, 
    transparent: true,
    opacity: 0.42,
  });

  const textureOpacity = useMotionValue(0);
  const glassTextureOpacity = useMotionValue(0);

  useEffect(() => {
    animate(textureOpacity, section === 0 ? 1 : 0, {
      duration: 0.4,
    });
    animate(glassTextureOpacity, section === 0 ? 0.42 : 0, {
      duration: 0.4,
    });
  }, [section]);

  useFrame(() => {
    textureMaterial.opacity = textureOpacity.get();
    textureGlassMaterial.opacity = glassTextureOpacity.get();
  })

  return (
    <group {...props} dispose={null}>
     <mesh name="Syria" geometry={nodes.Syria.geometry} material={materials.Material27368} position={[-0.56, 0.604, -0.493]} rotation={[Math.PI, -0.022, Math.PI]} scale={0.404}>
        <meshBasicMaterial map={textureSyria} toneMapped={false} />
     </mesh>
     <mesh name="Screen" geometry={nodes.Screen.geometry} material={materials['Material.019']} position={[0, 0.475, -0.434]} rotation={[-Math.PI / 2, 0, 0]}>
      <meshBasicMaterial map={textureVSCode} toneMapped={false} />
     </mesh>
      <group>
        <mesh geometry={nodes.Floor.geometry} material={textureMaterial} position={[-0.149, 0.05, -0.165]} rotation={[-Math.PI / 2, 0, 0]} />
        <mesh geometry={nodes.Table.geometry} material={textureMaterial} position={[0, 0.284, -0.342]} rotation={[-Math.PI / 2, 0, 0]} />
        <motion.group position={[0, 0.475, -0.434]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Plane001_Material018_0.geometry} material={textureMaterial} />
          <mesh geometry={nodes.Plane001_Material018_0_1.geometry} material={textureMaterial} />
        </motion.group>
        <motion.group scale={[0, 0, 0]} animate={{ scale: section === 0 ? 1 : 0, }} position={[-0.237, 0.411, -0.367]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Cube003_Material008_0.geometry} material={textureMaterial} />
          <mesh geometry={nodes.Cube003_Material008_0_1.geometry} material={textureMaterial} />
          <mesh geometry={nodes.Cube003_Material008_0_2.geometry} material={textureMaterial} />
        </motion.group>
        <motion.group scale={[0, 0, 0]} animate={{ scale: section === 0 ? 1 : 0, }} position={[-0.023, 0.403, -0.319]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Plane003_Material004_0.geometry} material={textureMaterial} />
          <mesh geometry={nodes.Plane003_Material004_0_1.geometry} material={textureMaterial} />
        </motion.group>
        <mesh geometry={nodes.Mouse.geometry} material={textureMaterial} position={[0.126, 0.408, -0.302]} rotation={[-1.794, 0.222, 0.337]} scale={1.251} />
        <mesh geometry={nodes.Shelf.geometry} material={textureMaterial} position={[0, 0.702, -0.4]} rotation={[-Math.PI / 2, 0, 0]} />
        <motion.group scale={[0, 0, 0]} animate={{ scale: section === 0 ? 1 : 0, }} position={[0.258, 0.477, -0.42]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Cylinder_Material015_0.geometry} material={textureMaterial} />
          <mesh geometry={nodes.Cylinder_Material015_0_1.geometry} material={textureMaterial} />
          <mesh geometry={nodes.Cylinder_Material015_0_2.geometry} material={textureMaterial} />
        </motion.group>
        <motion.group scale={[0, 0, 0]} animate={{ scale: section === 0 ? 0.768 : 0, }} position={[-0.007, 0.317, -0.037]} rotation={[-Math.PI / 2, 0, 0.164]}>
          <mesh geometry={nodes.Cylinder001_Material002_0.geometry} material={textureMaterial} />
          <mesh geometry={nodes.Cylinder001_Material002_0_1.geometry} material={textureMaterial} />
        </motion.group>
        <mesh geometry={nodes.Cup.geometry} material={textureMaterial} position={[0.205, 0.42, -0.304]} rotation={[-Math.PI / 2, 0, 0]} />
        <motion.group scale={[0, 0, 0]} animate={{ scale: section === 0 ? 1 : 0, }} position={[0.249, 0.407, -0.302]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Cube004_Material008_0.geometry} material={textureMaterial} />
          <mesh geometry={nodes.Cube004_Material008_0_1.geometry} material={textureMaterial} />
        </motion.group>
        <motion.group scale={[0, 0, 0]} animate={{ scale: section === 0 ? 1 : 0, }} position={[0.037, 0.717, -0.402]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Cube008_Material008_0.geometry} material={textureMaterial} />
          <mesh geometry={nodes.Cube008_Material008_0_1.geometry} material={textureMaterial} />
          <mesh geometry={nodes.Cube008_Material008_0_2.geometry} material={textureMaterial} />
          <mesh geometry={nodes.Cube008_Material008_0_3.geometry} material={textureMaterial} />
        </motion.group>
        <motion.group scale={[0, 0, 0]} animate={{ scale: section === 0 ? 1 : 0, }} position={[0.115, 0.717, -0.424]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Cube011_Material008_0.geometry} material={textureMaterial} />
          <mesh geometry={nodes.Cube011_Material008_0_1.geometry} material={textureMaterial} />
        </motion.group>
        <motion.group scale={[0, 0, 0]} animate={{ scale: section === 0 ? 1 : 0, }} position={[-0.083, 0.787, -0.434]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Cylinder003_Material017_0.geometry} material={textureMaterial} />
          <mesh geometry={nodes.Cylinder003_Material017_0_1.geometry} material={textureMaterial} />
          <mesh geometry={nodes.Cylinder003_Material017_0_2.geometry} material={textureMaterial} />
        </motion.group>
        <motion.group scale={[0, 0, 0]} animate={{ scale: section === 0 ? 1 : 0, }} position={[-0.167, 0.462, -0.43]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Cube007_Material022_0.geometry} material={textureMaterial} />
          <mesh geometry={nodes.Cube007_Material022_0_1.geometry} material={textureMaterial} />
          <mesh geometry={nodes.Cube007_Material022_0_2.geometry} material={textureMaterial} />
        </motion.group>
        <motion.group name="Art_Frame" position={[-0.56, 0.604, -0.493]} rotation={[Math.PI, -0.022, Math.PI]} scale={0.404}>
          <mesh name="Node-Mesh" geometry={nodes['Node-Mesh'].geometry} material={materials.mat23} />
          <mesh name="Node-Mesh_1" geometry={nodes['Node-Mesh_1'].geometry} material={materials['mat21.001']} />
        </motion.group>
        <motion.group name="Houseplant" position={[-0.582, 0.101, -0.29]} rotation={[-Math.PI / 2, 0, 1.127]} scale={45.705}>
          <mesh name="Houseplant_1" geometry={nodes.Houseplant_1.geometry} material={materials.Black} />
          <mesh name="Houseplant_1_1" geometry={nodes.Houseplant_1_1.geometry} material={materials.Brown} />
          <mesh name="Houseplant_1_2" geometry={nodes.Houseplant_1_2.geometry} material={materials.Plant_Green} />
        </motion.group>
        <mesh geometry={nodes.Walls.geometry} material={textureMaterial} position={[-0.837, 0.45, -0.212]} rotation={[-Math.PI / 2, 0, 1.574]} />
        <mesh geometry={nodes.Window.geometry} material={textureGlassMaterial} position={[-0.865, 0.45, -0.212]} rotation={[-Math.PI / 2, 0, 1.574]} />
      </group>
    </group>
  )
}

useGLTF.preload('models/scene2.glb')
useTexture.preload("textures/Baked3.jpg")