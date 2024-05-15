import midwit from '../assets/midwit.png'
import rightcurve from '../assets/hooded.png'
import leftcurve from '../assets/leftcurvedjak.png'

const Hero = () => {
  return (
    <div className="flex flex-col px-2 pb-12 pt-32">
      <button className="self-center">
        <img
          className="h-8 w-auto cursor-pointer lg:h-12 xl:h-14"
          src={midwit}
          alt="midwit wojak"
        />
      </button>
      <div className="flex justify-center">
        <button>
          <img
            className="h-8 w-auto cursor-pointer lg:h-12 xl:h-14"
            src={leftcurve}
            alt="leftcurver wojak"
          />
        </button>
        <h1 className="px-4 pt-2 text-center text-4xl font-semibold text-white lg:text-5xl xl:text-6xl">
          The Bellcurve
        </h1>
        <button>
          <img
            className="h-8 w-auto cursor-pointer lg:h-12 xl:h-14"
            src={rightcurve}
            alt="rightcurved wojak"
          />
        </button>
      </div>
      <h2 className="text-center text-2xl text-white/50 lg:text-3xl">
        The most important meme in human history
      </h2>
      <a href="#" className="text-md text-center text-white/40 lg:text-xl">
        Now has a token
      </a>
    </div>
  )
}

export default Hero
