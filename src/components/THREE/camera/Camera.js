import React, { useRef, useEffect } from 'react'
import { useThree } from 'react-three-fiber'


const Camera = () => {
    const camera = useRef()
    const fov = 75
    const cameraDistance = 50
    const { setDefaultCamera } = useThree()
    useEffect(() => void setDefaultCamera(camera.current), [])
    return <perspectiveCamera
        ref={camera}
        fov={fov}
        position={[0, 0, cameraDistance]}
        onUpdate={self => self.updateProjectionMatrix()}
    />

}

export default Camera