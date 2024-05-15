import pumppill from '../assets/logo.webp'
const Faq = () => {
  return (
    <section id="faq" className="flex flex-col gap-4 px-6 py-16">
      <h1 className="mb-8 text-center text-2xl font-semibold">2) FAQ</h1>
      <div className="rounded-xl bg-white/10 text-white">
        <div>
          <details className="group peer">
            <summary className="flex cursor-pointer items-center gap-2 px-4 py-2">
              <h2 className="text-left font-semibold">
                Why launch on pump.fun?{' '}
              </h2>
              <span className="">
                <img className="h-4 w-auto" src={pumppill} alt="pumpfun logo" />
              </span>
            </summary>
          </details>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[250ms] ease-in-out peer-open:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="group-open:border-t-1 mx-4 -translate-y-3 border-t border-white py-3 text-left text-zinc-600 transition-all duration-[250ms] ease-in-out">
                All eyes on{' '}
                <a
                  className="text-pumpgreen"
                  href="https://pump.fun/4TfnNi4TTB6qPpakXM2nrY8gfYDakBhqma9DjW1M8ePN"
                  target="_blank"
                >
                  pump.fun
                </a>
                <br />
                Presales and Stealth launches are predatory. To reward early
                believoors and fellow gambloors the decision has been made to
                launch organically on pump.fun for everyone to see and for
                everyone to cry over if they choose to ignore.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white/10 text-white">
        <div>
          <details className="group peer">
            <summary className="flex cursor-pointer items-center gap-2 px-4 py-2">
              <h2 className="text-left font-semibold">Why launch on</h2>
              <span className="inline-flex">
                <img
                  className="h-4"
                  src="https://solana.com/_next/static/media/logotype.e4df684f.svg"
                  alt="solana logo"
                />
              </span>
              <span>?</span>
            </summary>
          </details>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[250ms] ease-in-out peer-open:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <div className="group-open:border-t-1 mx-4 flex -translate-y-3 flex-col gap-4 border-t border-white py-3 text-left text-zinc-600 transition-all duration-[250ms] ease-in-out">
                <p>
                  Currently solana is the only blockchain that enables us to
                  create projects that are scalable and feasible to use due to
                  its low transaction costs, while also harboring a majority of
                  all active blockchain users.
                </p>
                <p>
                  Simple ideas like 1 vs 1 staked cointhrow dapps can be done on
                  ethereum, but will not have any users as no one wants to spend
                  more on the approvals and gas fees than he could actually win,
                  making small lunch money bets impossible. The same idea is
                  much more powerful if gas fees arent a barrier and allows a
                  greater range of potential users to actually participate on a
                  regular basis, resulting in higher dapp usage and higher roi
                  with less risks for users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white/10 text-white">
        <div>
          <details className="group peer">
            <summary className="flex cursor-pointer items-center gap-2 px-4 py-2">
              <h2 className="text-left font-semibold">
                Is there more to come? 🤔
              </h2>
            </summary>
          </details>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[250ms] ease-in-out peer-open:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="group-open:border-t-1 mx-4 -translate-y-3 border-t border-white py-3 text-left text-zinc-600 transition-all duration-[250ms] ease-in-out">
                Yes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
