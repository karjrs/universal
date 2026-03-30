import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Canvas } from '@react-three/fiber'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div id="canvas-container" className='w-full h-full'>
      <Canvas>
        <App />
      </Canvas>
    </div>
  </StrictMode>,
)
