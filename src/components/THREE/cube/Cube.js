import React, { useRef, useState } from 'react'
import { a, useSpring } from 'react-spring/three'

const Cube = ({position}) => {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false);
  const props = useSpring({
    color: hovered ? 'green' : 'red',
    scale: [0.1, 0.1, 0.1],
    position: position
  })

  return (
    <a.mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={props.scale}
      position={props.position}
      castShadow
    >
      <ambientLight />
      <spotLight position={[1, 5, 10]} penumbra={1} castShadow />
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <a.meshBasicMaterial attach="material" color={props.color} />
    </a.mesh>
  )
}

export default Cube