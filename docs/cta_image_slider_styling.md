# Documentation: CTA Image Slider Component & Styling

## Overview
The `CtaImageSlider` component creates a vertical sliding image carousel that automatically cycles through images every 3 seconds. It's commonly used within CTA sections to add visual interest.

## Component Structure

### TypeScript Component (`components/shared/CtaImageSlider.tsx`)

```typescript
'use client'

import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'

interface SliderImg {
  id: string
  img: string
}

interface CtaImageSliderProps {
  slides: SliderImg[]
}

const CtaImageSlider: FC<CtaImageSliderProps> = ({ slides }) => {
  const ctaSlider = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let currentSlide = 0
    const totalSlides = slides.length

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides
      if (ctaSlider.current) {
        ctaSlider.current.style.transform = `translateY(-${currentSlide * 150}px)`
      }
    }

    const intervalId = setInterval(nextSlide, 3000)
    return () => clearInterval(intervalId)
  }, [slides.length])

  return (
    <div className="cta-slider-container translate-y-2 max-sm:mb-5 max-sm:mt-2.5 max-sm:block sm:!mx-5 sm:inline-block sm:translate-y-[20px]">
      <div ref={ctaSlider} className="cta-inline-slider transition-transform duration-500 ease-in-out">
        {slides?.map((slide, index) => (
          <div key={slide.id} className="slide">
            <Image src={slide.img} alt={`cta-slide-img-${index + 1}`} width={240} height={100} priority={index === 0} />
          </div>
        ))}
      </div>
    </div>
  )
}
```

## CSS Styling (`scss/_common.scss`)

### Container Styling
```scss
.cta-slider-container {
  @apply mx-auto inline-block h-24 w-60 overflow-hidden rounded-[70px] md:h-[100px] md:w-[250px];

  .cta-inline-slider {
    @apply absolute h-full w-full transition-transform duration-[0.5s] ease-in-out;
  }

  .slide {
    width: 100%;
    height: 150px;
  }

  .slide img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}
```

## Key Features

### 1. **Automatic Sliding**
- Uses `setInterval` with 3-second intervals
- Cycles through slides using modulo arithmetic
- Cleans up interval on component unmount

### 2. **Smooth Transitions**
- CSS `transition-transform` with 500ms duration
- `ease-in-out` timing function
- JavaScript updates `translateY` property dynamically

### 3. **Responsive Design**
- Mobile: `h-24 w-60` (96px × 240px)
- Desktop: `md:h-[100px] md:w-[250px]` (100px × 250px)
- Rounded corners with `rounded-[70px]`

### 4. **Image Optimization**
- Uses Next.js `Image` component
- Fixed dimensions: `width={240} height={100}`
- `priority` for first image
- `object-fit: cover` for proper scaling

## Usage Example

```typescript
<CTA headingClass="xl:text-[88px]" buttonText="Start Your Film Project">
  Let's Create
  <CtaImageSlider
    slides={[
      { id: '1', img: '/images/cta-slides/phone-back.jpg' },
      { id: '2', img: '/images/cta-slides/on-call.jpg' },
      { id: '3', img: '/images/cta-slides/iphone-6.jpg' },
    ]}
  />
  Something
  <span className="block font-instrument italic max-md:inline-block sm:mt-10">Extraordinary</span>
</CTA>
```

## Technical Details

### Slide Height Calculation
- Each slide has a fixed height of `150px`
- Transform calculation: `translateY(-${currentSlide * 150}px)`
- Container is `overflow-hidden` to hide non-active slides

### Positioning
- Container uses `relative` positioning (implied by absolute child)
- Inner slider uses `absolute` positioning
- Slides are stacked vertically within the absolute container

### Animation Loop
```javascript
// Current slide index increments and wraps around
currentSlide = (currentSlide + 1) % totalSlides

// Transform moves the entire slider up
ctaSlider.current.style.transform = `translateY(-${currentSlide * 150}px)`
```

## Required Dependencies

- **React**: `useEffect`, `useRef`, `FC` types
- **Next.js**: `Image` component for optimization
- **Tailwind CSS**: For utility classes in component
- **SCSS**: For custom slider styling

## Customization Options

### Timing
Change interval in `useEffect`:
```javascript
const intervalId = setInterval(nextSlide, 2000) // 2 seconds instead of 3
```

### Slide Height
Update both CSS and JavaScript:
```scss
.slide {
  height: 200px; // Change from 150px
}
```
```javascript
ctaSlider.current.style.transform = `translateY(-${currentSlide * 200}px)`
```

### Container Size
Modify Tailwind classes:
```typescript
<div className="cta-slider-container h-32 w-72">
  // h-32 = 128px, w-72 = 288px
</div>
```

This component provides a smooth, auto-playing vertical image slider perfect for adding dynamic visual elements to CTA sections.
