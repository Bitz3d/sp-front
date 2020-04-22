import React from 'react'
import Cube from '../cube/Cube'


const Car = ({ weldingSpots }) => {
    const divisor = 100
    return weldingSpots.map((spot, index) => <Cube key={index} position={[spot.pointX / divisor, spot.pointY / divisor, spot.pointZ / divisor]} />)
}

export default Car