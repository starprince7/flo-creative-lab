'use client'

import { FC, useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import VideoModal from './VideoModal'

interface VideoV2Props {
  thumbnail?: string
}

const VideoV2: FC<VideoV2Props> = ({ thumbnail }) => {
  const [open, setOpen] = useState(false)

  return (
    <RevealWrapper as="section" className="video-section overflow-hidden pb-14 md:pb-16 lg:pb-[88px] xl:pb-[112px]">
      <div className="hero-video-container group container relative">
        <div className="hero-video">
          <img src={thumbnail ?? '/images/video-thumbnail.png'} alt="hero video-bg" />
          <button
            className="absolute inset-0 flex cursor-pointer items-center justify-center transition-all duration-300 group-hover:transform group-hover:[&>div]:scale-110"
            onClick={() => setOpen(true)}>
            <div className="play-button relative h-14 w-20 rounded-full bg-backgroundBody/40 p-4 bg-blend-lighten transition-transform duration-300 lg:h-[90px] lg:w-[140px] lg:rounded-[241px]">
              <span className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={21} height={24} viewBox="0 0 21 24" fill="none">
                  <path
                    d="M19.5393 11.2208L2.44894 1.1365C2.30507 1.05087 2.14013 1.00383 1.97113 1.00022C1.80214 0.996618 1.6352 1.03658 1.48755 1.11599C1.3399 1.19539 1.21687 1.31137 1.13117 1.45196C1.04547 1.59254 1.00019 1.75264 1 1.91574V22.0843C1.00019 22.2474 1.04547 22.4075 1.13117 22.548C1.21687 22.6886 1.3399 22.8046 1.48755 22.884C1.6352 22.9634 1.80214 23.0034 1.97113 22.9998C2.14013 22.9962 2.30507 22.9491 2.44894 22.8635L19.5393 12.7792C19.6797 12.6992 19.796 12.5852 19.8767 12.4485C19.9575 12.3119 20 12.1573 20 12C20 11.8427 19.9575 11.6881 19.8767 11.5515C19.796 11.4148 19.6797 11.3008 19.5393 11.2208V11.2208Z"
                    className="stroke-white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>
      <VideoModal open={open} setOpen={setOpen} />
    </RevealWrapper>
  )
}

export default VideoV2
