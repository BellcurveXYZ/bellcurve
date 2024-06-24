const Faq = () => {
  return (
    <section id="faq" className="flex flex-col gap-4 px-6 py-16">
      <h1 className="mb-8 text-center text-2xl font-semibold">2) FAQ</h1>
      <div className="rounded-xl bg-white/10 text-white">
        <div>
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
              <h2 className="text-left font-semibold">
                Why launch on Moonshot{' '}
              </h2>
              <span className="h-4 w-4">
                <svg
                  className="h-4 w-4 fill-[#dfff16]"
                  viewBox="0 0 70 70"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ds-nav-main-nav-chain-icon"
                  aria-label="Moonshot"
                >
                  <path
                    d="M69.8374 47.9306C70.6307 46.0406 68.3635 44.4306 66.4618 45.2706C62.6606 46.9392 58.5535 47.7974 54.4022 47.7906C38.127 47.7906 24.9358 34.864 24.9358 18.9157C24.9298 13.531 26.4597 8.25619 29.3458 3.71022C30.4503 1.968 29.1242 -0.443102 27.1019 0.0702296C11.5112 4.04855 0 17.9396 0 34.4635C0 54.0906 16.2363 70 36.2681 70C51.435 70 64.424 60.8806 69.8374 47.9306Z"
                    fill="#dfff16"
                  ></path>
                  <path
                    d="M62.6526 8.11672C63.4175 5.86247 60.5264 4.19344 58.9554 5.97929L56.155 9.16564C55.0196 10.458 53.5269 11.3853 51.8652 11.8306C50.2035 12.2758 48.4472 12.2191 46.8178 11.6675L42.7993 10.3083C40.5459 9.5472 38.8776 12.4418 40.6671 14.0116L43.8526 16.8081C45.1451 17.9433 46.0724 19.4359 46.5176 21.0974C46.9628 22.759 46.906 24.5152 46.3543 26.1446L44.9948 30.1628C44.23 32.417 47.1211 34.0861 48.6911 32.2966L51.4915 29.1103C52.6269 27.8179 54.1195 26.8906 55.7812 26.4453C57.4429 26.0001 59.1993 26.0568 60.8287 26.6084L64.8472 27.9676C67.1015 28.7323 68.7708 25.8413 66.9803 24.2679L63.7948 21.4714C62.5024 20.3362 61.5751 18.8436 61.1299 17.1821C60.6847 15.5205 60.7415 13.7643 61.2931 12.1349L62.6526 8.11672Z"
                    fill="#dfff16"
                  ></path>
                </svg>
              </span>
            </summary>
          </details>
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[250ms] ease-in-out peer-open:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <div className="group-open:border-t-1 mx-4 flex -translate-y-3 flex-col gap-4 border-t border-white py-3 text-left text-zinc-600 transition-all duration-[250ms] ease-in-out">
                <p>Because Ez Moon.</p>
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
