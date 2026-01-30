'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Video = () => {
  const videoRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Reset GSAP animations when route changes
  useEffect(() => {
    ScrollTrigger.refresh()
  }, [pathname])

  useGSAP(() => {
    const videoElement = videoRef.current

    const animation = gsap.fromTo(
      videoElement,
      {
        scale: 0.4,
        opacity: 0.6,
      },
      {
        scale: 1,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.video-section',
          start: 'top 80%',
          end: 'top 0%',
          scrub: 1,
        },
      },
    )

    return () => {
      animation.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section className="video-section">
      <div ref={videoRef} className="h-fit w-full origin-top scale-50">
        <video className="h-full w-full" autoPlay muted loop playsInline>
          <source src="/video/music-videos/vision-snippet-qingmadi-n-chole.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}

export default Video
