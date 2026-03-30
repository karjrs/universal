import { OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import { Planet } from "./planet"

function App() {
  const controlsRef = useRef(null)

  return (
    <>
      <OrbitControls ref={controlsRef} autoRotate autoRotateSpeed={5} />
      <Planet position={[-15, 0, 0]} size={[2, 32, 32]} />
      <Planet position={[0, 0, 0]} size={[3, 32, 32]} />
      <Planet position={[10, 0, 0]} size={[1, 32, 32]} />
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 0, 5]} color="red" />
    </>
  )
}

export default App
