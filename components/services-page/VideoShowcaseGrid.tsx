'use client'

import RevealWrapper from '../animation/RevealWrapper'
import { VideoType } from '@/data/videos'

interface VideoShowcaseGridProps {
  videos: VideoType[]
  columns?: 'two' | 'three'
}

const VideoShowcaseGrid = ({ videos, columns = 'three' }: VideoShowcaseGridProps) => {
  const gridCols = columns === 'two' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

  return (
    <div className={`grid ${gridCols} gap-[30px]`}>
      {videos.map((video) => (
        <RevealWrapper key={video.id} className="group border px-3.5 pb-7 pt-3.5 dark:border-dark md:px-5 md:pt-5">
          <div className="aspect-video w-full overflow-hidden">
            <iframe
              src={video.url}
              title={video.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {video.title && (
            <div className="mt-5">
              <h3 className="text-xl font-normal leading-tight text-secondary dark:text-white lg:text-2xl">
                {video.title}
              </h3>
            </div>
          )}
        </RevealWrapper>
      ))}
    </div>
  )
}

export default VideoShowcaseGrid
