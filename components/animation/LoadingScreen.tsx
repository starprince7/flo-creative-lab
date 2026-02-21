'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import logoDark from '@/public/images/logo-white.png'

type Phase = 'centered' | 'animating' | 'done'

const TRANSITION_DURATION = 900

export default function LoadingScreen() {
  const [phase, setPhase] = useState<Phase>('centered')

  useEffect(() => {
    // After 1.8s of showing the centered logo, kick off the fly-to-corner animation
    const animateTimer = setTimeout(() => setPhase('animating'), 1800)
    // After the animation completes (1.8s + 900ms transition), unmount the overlay
    const doneTimer = setTimeout(() => setPhase('done'), 1800 + TRANSITION_DURATION)

    return () => {
      clearTimeout(animateTimer)
      clearTimeout(doneTimer)
    }
  }, [])

  if (phase === 'done') return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: 'black',
        // Fade out the whole overlay as the logo animates away
        opacity: phase === 'animating' ? 0 : 1,
        transition: phase === 'animating' ? `opacity ${TRANSITION_DURATION + 2400}ms ease-in-out` : 'none',
        pointerEvents: phase === 'animating' ? 'none' : 'auto',
      }}>
      <div
        style={{
          position: 'absolute',
          // Phase 'centered': sit in the exact center of the screen
          // Phase 'animating': move to top-left (navbar position)
          top: phase === 'animating' ? '28px' : '50%',
          left: phase === 'animating' ? '16px' : '50%',
          transform: phase === 'animating' ? 'translate(0, 0)' : 'translate(-50%, -50%) scale(1)',
          // Smooth cubic-bezier that mimics a natural "fly into corner" feel
          transition:
            phase === 'animating'
              ? `top ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1), left ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`
              : 'none',
          transformOrigin: 'top left',
        }}>
        <Image
          src={logoDark}
          alt="logo"
          width={136}
          height={168}
          priority
          style={{ display: 'block' }}
          className="h-auto w-36 sm:w-60"
        />
      </div>
    </div>
  )
}
