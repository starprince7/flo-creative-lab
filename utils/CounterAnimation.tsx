'use client'
import { useEffect, useRef, useState } from 'react'

interface NumberTypes {
  number: number
  duration?: number // Animation duration in milliseconds
}

const CounterAnimation = ({ number, duration = 2000 }: NumberTypes) => {
  const [count, setCount] = useState(0)
  const [isCounting, setIsCounting] = useState(false)
  const counterRef = useRef(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    const currentRef = counterRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounting(true)
          startTimeRef.current = Date.now()
        } else {
          setIsCounting(false)
          startTimeRef.current = null
        }
      },
      { threshold: 0.5 },
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    if (isCounting && count < number) {
      const animate = () => {
        if (!startTimeRef.current) return

        const elapsedTime = Date.now() - startTimeRef.current
        const progress = Math.min(elapsedTime / duration, 1)

        // Use easeOutQuad for smoother animation
        const easeOutProgress = 1 - Math.pow(1 - progress, 2)
        const currentValue = Math.round(easeOutProgress * number)

        setCount(currentValue)

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isCounting, number, duration, count])

  return (
    <span className="counter" ref={counterRef}>
      {count.toLocaleString()}{' '}
    </span>
  )
}

export default CounterAnimation
