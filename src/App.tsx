import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Planet } from "components/planet";
import { Star } from "components/star";

function App() {
  return (
    <div id="canvas-container" className="w-full h-full">
      <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
        <color attach="background" args={["#050505"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={2000} color="orange" />

        <Star
          distance={0}
          speed={0}
          size={2}
          emissive="red"
          intensity={2}
          color="red"
        />

        <Planet distance={5} speed={0.5} size={0.4} color="royalblue" />
        <Planet distance={8} speed={0.3} size={0.6} color="red" />
        <Planet
          distance={12}
          speed={0.2}
          size={0.8}
          color="seagreen"
          moons={[
            { id: "1", distance: 3, speed: 1, size: 0.2, color: "white" },
            {
              id: "2",
              distance: 2,
              speed: 0.8,
              size: 0.15,
              color: "lightgray",
            },
          ]}
        />

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
