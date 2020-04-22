import React, { useRef, useEffect } from 'react'

export const RandomWalker = () => {
    const canvasRef = useRef(null);
    let ctx = null;
    useEffect(() => {
        const canvas = canvasRef.current
        ctx = canvas.getContext('2d')

        ctx.beginPath();
        ctx.arc(50, 50, 50, 0, 2 * Math.PI);
        ctx.fill();

    }, [])

    return (
        <canvas
            ref={canvasRef}
            width={window.innerWidth}
            height={window.innerHeight}
            onClick={e => {
                ctx.clearRect(0, 0, window.innerHeight, window.innerWidth)
            }}
        />

    )
}
