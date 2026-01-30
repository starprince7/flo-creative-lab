'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { gsap } from 'gsap'
import { FC, useEffect, useRef } from 'react'
import { VisuallyHidden } from './VisuallyHidden'

interface VideoModalProps {
  open: boolean
  setOpen: (open: boolean) => void
  videoId?: string
  overlayClassName?: string
  contentClassName?: string
}

const VideoModal: FC<VideoModalProps> = ({
  open,
  setOpen,
  videoId = 'CfZ9kIK4tKU',
  overlayClassName = '',
  contentClassName = '',
}) => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const videoIframeContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && overlayRef.current && contentRef.current) {
      document.body.style.overflow = 'hidden'

      // Animation setup - with null checks
      gsap.set([overlayRef.current, contentRef.current], { opacity: 0 })
      gsap.set(contentRef.current, { scale: 0.8, y: 40 })

      // Small timeout to ensure DOM elements are ready
      const animationTimeout = setTimeout(() => {
        // Play opening animation
        const tl = gsap.timeline()
        tl.to(overlayRef.current, {
          opacity: 1,
          duration: 0.3,
        }).to(
          contentRef.current,
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.1',
        )
      }, 10)

      return () => clearTimeout(animationTimeout)
    }
  }, [open])

  const handleClose = () => {
    if (!overlayRef.current || !contentRef.current) {
      setOpen(false)
      return
    }

    const tl = gsap.timeline()

    tl.to(contentRef.current, {
      opacity: 0,
      scale: 0.8,
      y: 40,
      duration: 0.3,
      ease: 'power2.in',
    }).to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.3,
      },
      '-=0.2',
    )

    tl.eventCallback('onComplete', () => {
      setOpen(false)
      document.body.style.overflow = 'auto'
      if (videoIframeContainerRef.current) {
        videoIframeContainerRef.current.innerHTML = ''
      }
    })
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          ref={overlayRef}
          className={`fixed inset-0 z-40 h-full w-full bg-black bg-opacity-50 backdrop-blur-xl ${overlayClassName}`}
          onClick={handleClose}
        />

        <Dialog.Content
          ref={contentRef}
          className={`fixed left-1/2 top-1/2 z-50 h-full max-h-[500px] w-full max-w-[900px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl shadow-2xl ${contentClassName}`}
          onEscapeKeyDown={handleClose}>
          <VisuallyHidden>
            <Dialog.Title />
            <Dialog.Description />
          </VisuallyHidden>
          <div ref={videoIframeContainerRef} className="h-full w-full">
            {open && (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            )}
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute right-4 top-4 rounded-full bg-black bg-opacity-30 p-1 text-white hover:bg-opacity-50 focus:outline-none"
              aria-label="Close"
              onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default VideoModal
