'use client'

import useRevealAnimation from '@/hooks/useRevealAnimation'
import { cn } from '@/utils/cn'
import { ComponentPropsWithRef, ElementType, forwardRef } from 'react'

type RevealWrapperProps<T extends ElementType> = {
  as?: T
  className?: string
  delay?: number
  duration?: number
} & ComponentPropsWithRef<T>

const RevealWrapper = forwardRef<HTMLDivElement, RevealWrapperProps<ElementType>>(
  ({ as: Component = 'div', className, children, delay = 0, duration = 0.9, ...props }, ref) => {
    const animationRef = useRevealAnimation({ delay, duration })

    return (
      <Component ref={animationRef || ref} className={cn(className)} {...props}>
        {children}
      </Component>
    )
  },
)

RevealWrapper.displayName = 'RevealWrapper'

export default RevealWrapper
