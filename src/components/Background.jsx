import { Sphere, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Background = () => {
  const material = useRef();
  const color = useRef({
    color: "#b0bec5",
  });
  const data = useScroll();

  const tl = useRef(null); // Initialize with null

  useFrame(() => {
    if (tl.current && material.current) {
      // Check if `tl.current` and `material.current` are ready
      tl.current.progress(data.scroll.current);
      material.current.color = new THREE.Color(color.current.color);
    }
  });

  useEffect(() => {
    // Initialize GSAP timeline
    tl.current = gsap.timeline();
    tl.current
      .to(color.current, {
        color: "#263238",
      })
      .to(color.current, {
        color: "#cfd8dc",
      })
      .to(color.current, {
        color: "#607d8b",
      });
  }, []);

  return (
    <group>
      <Sphere scale={[30, 30, 30]}>
        <meshBasicMaterial
          ref={material}
          side={THREE.BackSide}
          toneMapped={false}
        />
      </Sphere>
    </group>
  );
};
