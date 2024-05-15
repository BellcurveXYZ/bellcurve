import leftcurve from '../assets/leftcurvedjak.png'
import midcurve from '../assets/midwitright.png'
import rightcurve from '../assets/hoodedright.png'
import bellcurvewhat from '../assets/bellcurvewhat.jpg'

const What = () => {
  return (
    <section id="what" className="flex flex-col items-center px-6 py-16">
      <h1 className="mb-12 text-4xl">1) What</h1>
      <h2 className="mb-4 text-2xl">...is the Bellcurve Meme?</h2>
      <img
        className="h-auto w-full max-w-[690px] rounded-2xl"
        src={bellcurvewhat}
        alt="bellcurve meme"
      />
      <div className="text-center">
        <p className="text-white/50">
          The Bellcurve Meme illustrates how different IQ levels approach the
          same Problem.
        </p>
        <ul className="my-8 flex flex-col gap-6">
          <li>
            <div className="flex items-center justify-between gap-12 rounded-2xl bg-zinc-900/80 p-4">
              <img className="h-16" src={leftcurve} alt="leftcurved wojak" />
              <p className="text-end text-sm md:text-lg">
                Makes simple, often naive decisions.
                <br />- leftcurve/retard
              </p>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between gap-12 rounded-2xl bg-zinc-900/80 p-4">
              <img className="h-16" src={midcurve} alt="midwit wojak" />
              <p className="text-end text-sm md:text-lg">
                Overthinks and complicates things, often to their detriment.
                <br />- midcurve/midwit
              </p>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-between gap-12 rounded-2xl bg-zinc-900/80 p-4">
              <img className="h-16" src={rightcurve} alt="rightcurved wojak" />
              <p className="text-end text-sm md:text-lg">
                Arrives at similar conclusions as the low IQ character, but
                through complex reasoning.
                <br />- rightcurve/autist
              </p>
            </div>
          </li>
        </ul>
        <p className="text-white/50">
          It mocks the idea that both very simple and very complex thinking can
          lead to similar outcomes, while overthinking in the middle can be
          counterproductive.
        </p>
      </div>
    </section>
  )
}

export default What
