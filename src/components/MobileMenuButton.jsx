import { useEffect, useRef, useState } from 'react'

const MobileMenuButton = ({ toggleMenuOpen, menuOpen }) => {
  const topBunRef = useRef(null)
  const midBunRef = useRef(null)
  const botBunRef = useRef(null)
  const buttonRef = useRef(null)

  const [buttonOpen, setButtonOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen && buttonOpen) {
      rotateClose()
    }
  }, [menuOpen])

  const toggleBunsY = () => {
    topBunRef.current.classList.toggle('-translate-y-[5px]')
    topBunRef.current.classList.toggle('-translate-y-1/2')
    botBunRef.current.classList.toggle('translate-y-[3px]')
    botBunRef.current.classList.toggle('-translate-y-1/2')
  }

  const rotateBuns = () => {
    topBunRef.current.classList.toggle('-rotate-[135deg]')
    midBunRef.current.classList.toggle('-rotate-45')
    botBunRef.current.classList.toggle('-rotate-[135deg]')
  }

  const handleMenuClick = () => {
    toggleButton()
  }

  const rotateOpen = () => {
    toggleBunsY()
    setTimeout(() => {
      rotateBuns()
    }, 110)
    setButtonOpen(!buttonOpen)
  }

  const rotateClose = () => {
    rotateBuns()
    setTimeout(() => {
      toggleBunsY()
    }, 110)
    setButtonOpen(!buttonOpen)
  }

  const toggleButton = () => {
    if (buttonOpen) {
      rotateClose()
      toggleMenuOpen()
    } else {
      rotateOpen()
      toggleMenuOpen()
    }
    setButtonOpen(!buttonOpen)
  }

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleMenuClick}
        type="button"
        className="relative flex min-h-12 min-w-12 lg:hidden"
      >
        <span
          ref={topBunRef}
          className="absolute left-1/2 top-1/2 h-[2px] w-1/3 origin-center -translate-x-1/2 -translate-y-[5px] transform rounded bg-white/50 transition-all duration-[125ms] ease-in-out"
        ></span>
        <span
          ref={midBunRef}
          className="absolute left-1/2 top-1/2 h-[2px] w-1/3 origin-center -translate-x-1/2 -translate-y-[1px] transform  rounded bg-white/50 transition-all duration-[125ms] ease-in-out"
        ></span>
        <span
          ref={botBunRef}
          className="absolute left-1/2 top-1/2 h-[2px] w-1/3 origin-center -translate-x-1/2 translate-y-[3px] transform rounded bg-white/50 transition-all duration-[125ms] ease-in-out"
        ></span>
      </button>
    </>
  )
}

export default MobileMenuButton
