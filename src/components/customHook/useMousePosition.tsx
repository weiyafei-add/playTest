import React, {useState, useEffect} from 'react'

// 鼠标跟踪器

const useMousePosition = () => {
    const [positions, setPositions] = useState({ x:0, y:0 })
    useEffect(() => {
        const mouseEvent = (e: MouseEvent) => {
            setPositions({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener('click', mouseEvent)

        return () => {
            window.removeEventListener('click', mouseEvent)
        }
    },[])
    return positions
}

export default useMousePosition