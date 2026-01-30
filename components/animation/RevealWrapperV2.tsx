'use client'

import useRevealAnimationV2 from '@/hooks/useRevealAnimationV2'
import { cn } from '@/utils/cn'
import { ComponentPropsWithRef, ElementType, forwardRef } from 'react'

type RevealWrapperProps<T extends ElementType> = {
  as?: T
  className?: string
  delay?: number
  duration?: number
} & ComponentPropsWithRef<T>

const RevealWrapperV2 = forwardRef<HTMLDivElement, RevealWrapperProps<ElementType>>(
  ({ as: Component = 'div', className, children, delay = 0, duration = 0.9, ...props }, ref) => {
    const animationRef = useRevealAnimationV2({ delay, duration })

    return (
      <Component ref={animationRef || ref} className={cn('reveal-me-2', className)} {...props}>
        {children}
      </Component>
    )
  },
)

RevealWrapperV2.displayName = 'RevealWrapperV2'

export default RevealWrapperV2
