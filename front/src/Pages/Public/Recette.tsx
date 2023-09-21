import { useParams } from "react-router-dom"
import { useDependencies } from "../../lib/Dependencies/DependenciesProvider"
import React from "react"


export const Recette = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = React.useState(1)

  const { recettesService, CartService } = useDependencies()
  const { data } = recettesService.useGetIdRecetteQuery(Number(id))
  const { mutateAsync } = CartService.useAddToCartsMutation({
    onSuccess: (data) => {
      // console.log(data)
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const SubmitCart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("renderrrrr");

    mutateAsync({ id: String(data?.id), quantity })
  }
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container flex items-start gap-8 px-4 md:px-6">
          <img
            alt="Sneaker Image"
            className="aspect-[1/1] object-cover object-center"
            height="500"
            src={data?.image}
            width="500"
          />
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter">{data?.name}</h1>
            <p className="text-2xl font-semibold text-zinc-900 text-zinc-50">{data?.price}$</p>
            <p className="text-base text-zinc-500 dark:text-zinc-400">
              {data?.description}
            </p>
            <form className="flex flex-col space-y-4" onSubmit={SubmitCart}>
              <div className="flex space-x-2">
                <button
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="w-12 h-12 rounded-md border border-zinc-200 text-zinc-900 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50"
                  type="button"
                >
                  +1
                </button>
                <p className="">
                  {quantity}
                </p>
                <button
                  onClick={() => setQuantity(prev => prev - 1)}
                  type="button"
                  className="w-12 h-12 rounded-md border border-zinc-200 text-zinc-900 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50"
                >
                  -1
                </button>
              </div>
              <button className="w-full h-12 rounded-md bg-zinc-900 text-zinc-50 shadow-sm dark:bg-zinc-50 dark:text-zinc-900" type="submit">
                Add to Cart
              </button>
            </form>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {/* TODO ingredient */}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

