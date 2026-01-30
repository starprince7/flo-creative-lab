'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useState } from 'react'

const CursorPointer = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  useGSAP(() => {
    if (window.innerWidth >= 1023) {
      gsap.to('.pointer', {
        x: mousePosition.x,
        y: mousePosition.y,
        height: '14px',
        width: '14px',
      })
    }
  }, [mousePosition])

  useEffect(() => {
    const moseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }
    window.addEventListener('mousemove', moseMove)
    window.addEventListener('keydown', moseMove)
  }, [])

  return <div className="pointer"></div>
}

export default CursorPointer
