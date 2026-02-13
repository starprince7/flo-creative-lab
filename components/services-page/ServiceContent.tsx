'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import RevealWrapper from '../animation/RevealWrapper'
import TableOfContent from '../shared/TableOfContent'

const isVideoFile = (url: string): boolean => {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv', '.m4v']
  const urlLower = url.toLowerCase()
  return videoExtensions.some((ext) => urlLower.includes(ext))
}

const ServiceContent = ({ service }: any) => {
  const headings = service.content.match(/### .+/g) ?? []
  const tableOfContents = headings.map((heading: string) => heading.replace('### ', ''))
  const coverImage = service.data?.coverImage
  const isVideo = coverImage && isVideoFile(coverImage)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="mx-auto max-w-[1440px] px-8 md:px-20">
        <div className="flex flex-col justify-start gap-8 lg:flex-row">

          <article className="project-details-body">
            <RevealWrapper as="figure" className="relative h-[497px] w-full">
              {isVideo ? (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover object-center">
                    <source src={coverImage} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                      onClick={togglePlayPause}
                      className="flex h-10 w-10 items-center justify-center rounded bg-black/80 text-white backdrop-blur-sm transition-all hover:bg-black/90"
                      aria-label={isPlaying ? 'Pause' : 'Play'}>
                      {isPlaying ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="white"
                          stroke="none">
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="white"
                          stroke="none">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      )}
                    </button>
                    <button
                      onClick={toggleMute}
                      className="flex h-10 w-10 items-center justify-center rounded bg-black/80 text-white backdrop-blur-sm transition-all hover:bg-black/90"
                      aria-label={isMuted ? 'Unmute' : 'Mute'}>
                      {isMuted ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="white"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                          <line x1="23" y1="9" x2="17" y2="15" />
                          <line x1="17" y1="9" x2="23" y2="15" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="white"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                        </svg>
                      )}
                    </button>
                  </div>
                </>
              ) : (
                <Image
                  width={870}
                  height={497}
                  src={coverImage}
                  alt="Services Big Img"
                  className="h-full w-full object-cover object-center"
                />
              )}
            </RevealWrapper>

          </article>
        </div>
      </div>
    </section>
  )
}

export default ServiceContent
