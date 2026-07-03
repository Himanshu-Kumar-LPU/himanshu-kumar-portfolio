import { Canvas } from '@react-three/fiber'

function Blob({ position, color }) {
  return (
    <mesh position={position}>
      <icosahedronGeometry args={[1, 2]} />
      <meshStandardMaterial color={color} roughness={0.35} metalness={0.15} />
    </mesh>
  )
}

function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-70">
      <Canvas
        frameloop="demand"
        dpr={[1, 1]}
        gl={{ antialias: false, powerPreference: 'low-power' }}
        camera={{ position: [0, 0, 6], fov: 50 }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[2, 2, 2]} intensity={1} color="#06b6d4" />
        <directionalLight position={[-2, -1, 1]} intensity={0.75} color="#7c3aed" />
        <Blob position={[-1.8, 0.5, -0.8]} color="#7c3aed" />
        <Blob position={[1.6, -0.2, -1.2]} color="#06b6d4" />
      </Canvas>
    </div>
  )
}

export default HeroScene
