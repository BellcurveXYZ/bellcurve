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
          Bellcurve
        </h1>
        <button>
          <img
            className="h-8 w-auto cursor-pointer lg:h-12 xl:h-14"
            src={rightcurve}
            alt="rightcurved wojak"
          />
        </button>
      </div>
      <h2 className="pb-3 text-center text-xl text-white/75 lg:text-3xl">
        Always relevant. Left curve or right curve, but dont find yourself to be
        a midwit.
      </h2>
      <p className="  text-center text-base text-white/50 lg:text-xl">
        Now has a token:
      </p>
      <p className="text-center text-xs text-white/50 md:text-base lg:text-xl">
        5Sk4NTxDYRkeCgRTcHkn894FQe1xKHG58RfA7vq68dqk
      </p>
    </div>
  )
}

export default Hero
