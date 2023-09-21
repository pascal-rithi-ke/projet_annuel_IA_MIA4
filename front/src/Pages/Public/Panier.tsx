import { Link } from "react-router-dom"
import { Button } from "../../Components/atoms/Button"
import { useDependencies } from "../../lib/Dependencies/DependenciesProvider"
import { useQueryClient } from "@tanstack/react-query"


export const Panier = () => {
  const { CartService } = useDependencies()
  // invalide query react-query
  const cache = useQueryClient();

  const { data } = CartService.useGetAllCartsQuery()
  const { mutateAsync } = CartService.useRemoveFromCartsMutation({
    onSuccess: () => {
      console.log("success")
      cache.invalidateQueries(["CartService.getAll"])
    },
    onError: (error) => {
      console.log(error)
    }
  })
  console.log(data);

  return (
    <div>
      <aside className="space-y-4">
        <h2 className="font-medium text-lg">Résumé de votre commande</h2>
        <div className="flex justify-between bg-white border border-gray-300 rounded-lg">
          <ul className="w-4/12">
            {data?.map(recette => (
              <li className="border-b last:border-b-0 border-gray-300 flex p-6">
                <div className="shrink-0 w-72 h-72">
                  <img src={recette.image} alt="Plat" />
                </div>
                <div className="flex flex-col flex-1 ml-6 justify-between">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium">{recette.name}</h4>
                      <p className="text-sm">{recette.description}</p>
                    </div>
                    <div>
                      <button type="button" className="flex justify-center items-center text-gray-500 p-2.5" onClick={
                        () => mutateAsync({ id: String(recette.id) })
                      }>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                          <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between pt-2">
                    <p className="font-medium">{recette.price} €</p>
                    <p className="font-medium">quantity : {recette.quantity}</p>
                    {/* <select className="font-medium md:text-sm border border-gray-300 rounded-md" name="quantity" id="quantity">
                      <option value="1">1</option>
                    </select> */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="w-5/12">
            <div className="border-y border-gray-300 p-6 space-y-6">
              <div className="flex justify-between items-center">
                <p className="font-medium">Sous-total</p>
                <p className="font-medium">10,00 €</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium">Livraison</p>
                <p className="font-medium">3,00 €</p>
              </div>
              <div className="border-t border-gray-300 flex justify-between items-center pt-6">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">13,00 €</p>
              </div>
            </div>
            <div className="p-6">
              <Link to="/commande" className="w-full">
                <Button type="button" className="w-full">Suivant</Button>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

