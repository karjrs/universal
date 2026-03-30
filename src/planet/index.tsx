import * as THREE from 'three'
import { useRef } from "react";
import type { PlanetProps } from './types';
import { useFrame } from '@react-three/fiber';

export const Planet = (props: PlanetProps) => { 
    const ref = useRef<THREE.Mesh>(null);

    useFrame((_, delta) => {
        if (!ref.current) return;
        ref.current.rotation.x += delta;
        ref.current.rotation.y += delta;
    })
    
    return (
        <mesh ref={ref} {...props}>
            <sphereGeometry args={props.size} />
            <meshPhongMaterial />
        </mesh>
    )   
}