import React, { useRef } from 'react'
import { extend, useFrame, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const Control = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update()
  });

  return (
    <orbitControls
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

export default Control