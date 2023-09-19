import { Button } from "../../Components/atoms/Button"

export const Home = () => {
  return (
    <main className="min-h-full">
      <section id="hero" className="bg-[url('img/hero_bg.avif')] bg-no-repeat bg-cover">
        <div className="flex justify-center items-start lg:items-center flex-col text-center min-h-screen max-w-xl w-full mx-auto">
          <div className="space-y-10">
            <h1 className="text-dark text-3xl lg:text-4xl font-semibold">ExpressFood</h1>
            <div>
              <span className="text-dark text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aspernatur necessitatibus tempora voluptatem amet maxime.</span>
            </div>
          </div>
          <div className="mt-9">
            <Button>Test</Button>
          </div>
        </div>
      </section>
    </main>
  )
}