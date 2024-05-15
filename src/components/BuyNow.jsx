import pumppill from '../assets/logo.webp'

const BuyNow = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <a
        className="text-sha flex items-center rounded-full bg-pumpgreen p-4 font-semibold"
        href="https://pump.fun/4TfnNi4TTB6qPpakXM2nrY8gfYDakBhqma9DjW1M8ePN"
        target="_blank"
      >
        Buy Now on
        <span className="ml-2 mr-1 inline-flex">
          <img className="h-4" src={pumppill} alt="pumpfun logo" />
        </span>
        Pump.Fun
      </a>
    </div>
  )
}

export default BuyNow
