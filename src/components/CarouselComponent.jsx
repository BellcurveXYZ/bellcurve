import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './CarouselComponent.css'

gsap.registerPlugin(ScrollTrigger)

const CarouselComponent = ({ images }) => {
  const CONFIG = {
    debug: false,
    backface: true,
    buff: 1.68,
    animate: false,
    scroll: true,
    dark: true,
    masklower: 1.68,
    maskupper: 5.0,
    perspective: 666,
    vertical: false,
    infinite: true,
    items: images.length,
    gap: 0.025,
    rotatex: 0,
    rotatez: 0,
  }

  const [config] = useState(CONFIG)
  const mainRef = useRef(null)
  const scrollerRef = useRef(null)
  let tween = useRef(null)

  const generateItems = () => {
    const items = []
    const controllers = []

    images.forEach((image, i) => {
      items.push(
        <li key={i} style={{ '--index': i }}>
          <img src={image} alt={`Carousel item ${i}`} />
        </li>
      )
      controllers.push(<li key={`controller-${i}`}></li>)
    })

    return { items, controllers }
  }

  const handleScroll = () => {
    if (!config.infinite) return
    const scroller = scrollerRef.current
    if (config.vertical) {
      if (scroller.scrollTop + window.innerHeight > scroller.scrollHeight - 2) {
        scroller.scrollTop = 2
      }
      if (scroller.scrollTop < 2) {
        scroller.scrollTop = scroller.scrollHeight - 2
      }
    } else {
      if (scroller.scrollLeft + window.innerWidth > scroller.scrollWidth - 2) {
        scroller.scrollLeft = 2
      }
      if (scroller.scrollLeft < 2) {
        scroller.scrollLeft = scroller.scrollWidth - 2
      }
    }
  }

  const setupController = () => {
    const scroller = scrollerRef.current
    scroller.addEventListener('scroll', handleScroll)
  }

  const renderCarousel = () => {
    setupController()
  }

  const update = () => {
    document.documentElement.dataset.debug = config.debug
    document.documentElement.dataset.animate = config.animate
    document.documentElement.dataset.backface = config.backface
    document.documentElement.dataset.scroll = config.scroll
    document.documentElement.dataset.dark = config.dark
    document.documentElement.dataset.vertical = config.vertical
    document.documentElement.dataset.infinite = config.infinite
    document.documentElement.style.setProperty('--gap-efficient', config.gap)
    document.documentElement.style.setProperty('--rotate-x', config.rotatex)
    document.documentElement.style.setProperty('--rotate-z', config.rotatez)
    document.documentElement.style.setProperty('--mask-lower', config.masklower)
    document.documentElement.style.setProperty('--mask-upper', config.maskupper)
    document.documentElement.style.setProperty('--scroll-ratio', config.buff)
    document.documentElement.style.setProperty(
      '--perspective',
      config.perspective
    )

    if (
      !CSS.supports('animation-timeline: scroll()') &&
      config.scroll &&
      config.animate
    ) {
      if (scrollerRef.current)
        scrollerRef.current[config.vertical ? 'scrollTop' : 'scrollLeft'] = 0
      document.documentElement.dataset.gsap = true
      gsap.set(['.carousel'], { animation: 'none', '--rotate': 0 })
      tween.current = gsap.to('.carousel', {
        rotateY: -360,
        '--rotate': 360,
        ease: 'none',
        scrollTrigger: {
          horizontal: !config.vertical,
          scroller: '.controller',
          scrub: true,
        },
      })
    } else {
      document.documentElement.dataset.gsap = false
      gsap.set('.carousel', { clearProps: true })
      if (tween.current) tween.current.kill()
      ScrollTrigger.killAll()
      document.querySelector('.carousel').removeAttribute('style')
    }
  }

  useEffect(() => {
    renderCarousel()
    update()

    return () => {
      if (tween.current) tween.current.kill()
      ScrollTrigger.killAll()
    }
  }, [])

  const { items, controllers } = generateItems()

  return (
    <main ref={mainRef}>
      <div className="container" style={{ '--total': config.items }}>
        <div className="carousel-container">
          <ul className="carousel">{items}</ul>
        </div>
        <ul className="controller" ref={scrollerRef}>
          {controllers}
        </ul>
      </div>
    </main>
  )
}

export default CarouselComponent
