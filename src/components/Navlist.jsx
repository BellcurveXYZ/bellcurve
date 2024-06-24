import { useEffect, useState } from 'react'

const Navlist = (props) => {
  const [what, setWhat] = useState(undefined)
  const [top, setTop] = useState(undefined)
  useEffect(() => {
    setWhat(document.getElementById('what'))
    setTop(document.getElementById('root'))
  }, [])
  return (
    <ul className="flex w-full items-center justify-between gap-4 text-white">
      <li>
        <button
          type="button"
          onClick={() => {
            if (top) top.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          🔔
        </button>
      </li>
      <li className="pointer-events-none	">|</li>
      <li>
        <button
          type="button"
          onClick={() => {
            if (what) what.scrollIntoView({ behavior: 'smooth' })
          }}
          className="text-nowrap"
        >
          1) What
        </button>
      </li>
      <li className="pointer-events-none	">|</li>
      <li>
        <a target="_blank" href="" className="text-[#dfff16]">
          Buy
        </a>
      </li>
      {/* <li className="pointer-events-none	">|</li> */}
      {/* <li>
        <a
          href="https://twitter.com/bellcurvexyz"
          target="_blank"
          className="flex items-center justify-center"
        >
          <svg
            className="h-4 w-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path
              fill="white"
              d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"
            />
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://t.me/BellcurveXYZ"
          target="_blank"
          className="flex items-center justify-center"
        >
          <svg
            className="h-4 w-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path
              fill="white"
              d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375 c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219 c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966 c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693 c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351 c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"
            />
          </svg>
        </a>
      </li> */}
    </ul>
  )
}

export default Navlist
