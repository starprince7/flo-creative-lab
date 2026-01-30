'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import TextAppearAnimation02 from '../animation/TextAppearAnimation02'

interface AwardItem {
  id: number
  year: string
  title: string
  award: string
  category: string
  img: string
}

const data: AwardItem[] = [
  {
    id: 1,
    year: '2020',
    title: 'Best cinematography',
    award: 'Global film Awards',
    category: 'Film Awards',
    img: '/images/portfolio/portfolio-list-hover-img-01.png',
  },
  {
    id: 2,
    year: '2021',
    title: 'Best visual effects',
    award: 'International film festival',
    category: 'International',
    img: '/images/portfolio/portfolio-list-hover-img-02.png',
  },
  {
    id: 3,
    year: '2022',
    title: 'Top production',
    award: 'Brand creators Awards',
    category: 'Commercial',
    img: '/images/portfolio/portfolio-list-hover-img-03.png',
  },
  {
    id: 4,
    year: '2023',
    title: '1 Award winning',
    award: 'Awwwards',
    category: 'Hono mention',
    img: '/images/portfolio/portfolio-list-hover-img-04.png',
  },
]

const AwardWinningWork = () => {
  const previewRef = useRef<HTMLDivElement>(null)
  const previewImgRef = useRef<HTMLImageElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const initTableHoverAnimation = () => {
      const preview = previewRef.current
      const previewImg = previewImgRef.current
      const rows = document.querySelectorAll<HTMLDivElement>('#projects .row')

      if (!preview || !previewImg) return

      rows.forEach((row) => {
        const imgSrc = row.getAttribute('data-img')

        row.addEventListener('mouseenter', () => {
          if (!previewImg || !imgSrc) return
          previewImg.src = imgSrc

          gsap.to(preview, {
            duration: 0.3,
            scale: 1,
            rotate: 15,
            ease: 'power2.out',
          })
        })

        row.addEventListener('mousemove', (e) => {
          if (!preview) return
          const offsetX = preview.offsetWidth / 2
          const offsetY = preview.offsetHeight / 2

          preview.style.left = `${e.pageX - offsetX}px`
          preview.style.top = `${e.pageY - offsetY}px`
        })

        row.addEventListener('mouseleave', () => {
          if (!preview) return
          gsap.to(preview, {
            duration: 0.3,
            scale: 0,
            rotate: -15,
            ease: 'power2.out',
          })
        })
      })
    }

    // Initialize the hover animation
    initTableHoverAnimation()

    // Clean up function to remove event listeners
    return () => {
      const rows = document.querySelectorAll<HTMLDivElement>('#projects .row')
      rows.forEach((row) => {
        row.removeEventListener('mouseenter', () => {})
        row.removeEventListener('mousemove', () => {})
        row.removeEventListener('mouseleave', () => {})
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-6 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation02>
              <h2 className="text-appear-2">
                Celebrating excellence in
                <span className="font-instrument italic"> filmmaking </span>
              </h2>
            </TextAppearAnimation02>
          </div>
          <div className="max-md:w-full md:max-w-80 lg:max-w-[470px]">
            <TextAppearAnimation02>
              <p className="max-w-lg max-md:text-justify md:place-self-end md:text-right">
                Our commitment to excellence has earned us accolades from the industry's most prestigious organizations.
              </p>
            </TextAppearAnimation02>
          </div>
        </div>
      </div>
      {/* Hover Image Preview */}
      <div
        ref={previewRef}
        id="preview"
        className="pointer-events-none absolute left-1/2 top-1/4 z-20 h-[200px] w-[200px] origin-center rotate-[20deg] scale-0 overflow-hidden">
        <img
          ref={previewImgRef}
          id="preview-img"
          src="/images/portfolio/portfolio-list-hover-img-01.png"
          alt="Preview"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Awards Table */}
      <div
        className="reveal-me mx-auto border-t text-sm max-xl:overflow-auto max-md:px-5 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[1380px]"
        id="projects">
        {data.map((item) => (
          <div
            key={item.id}
            className="row group flex min-h-[138px] cursor-pointer items-center justify-start border-b py-4"
            data-img={item.img}>
            <div className="-mt-5 w-16 text-nowrap font-instrument text-lg italic leading-[22px]">{item.year}</div>
            <div className="ml-11 w-72 text-nowrap text-3xl md:w-96 md:text-4xl lg:w-80 lg:leading-[1.1] 2xl:w-[470px] 2xl:text-5xl">
              {item.title}
            </div>
            <div className="ml-16 w-60 text-nowrap text-2xl leading-[1.6] xl:ml-40 2xl:ml-[150px] 2xl:w-[370px]">
              {item.award}
            </div>
            <div className="ml-16 w-60 text-nowrap text-right text-2xl leading-[1.6] lg:w-[175px] 2xl:ml-0">
              {item.category}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AwardWinningWork
