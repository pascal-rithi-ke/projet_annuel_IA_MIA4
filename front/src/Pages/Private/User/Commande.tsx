// import { Button } from "../../../Components/atoms/Button"
import { useForm } from "react-hook-form"
import { Button } from "../../../Components/atoms/Button";
import { email, minLength, object, string } from "valibot";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useDependencies } from "../../../lib/Dependencies/DependenciesProvider";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export const Commande = () => {
  const CommandeSchema = object({
    email: string([
      minLength(1, 'Please enter your email.'),
      email('The email address is badly formatted.'),
    ]),
    first_name: string([
      minLength(1, 'Please enter your first_name.'),
    ]),
    last_name: string([
      minLength(1, 'Please enter your last_name.'),
    ]),
    address: string([
      minLength(1, 'Please enter your address.'),
    ]),
    phone: string([
      minLength(1, 'Please enter your phone.'),
    ]),
    card_number: string([
      minLength(1, 'Please enter your card_number.'),
    ]),
    card_name: string([
      minLength(1, 'Please enter your card_name.'),
    ]),
    card_expiration: string([
      minLength(1, 'Please enter your card_expiration.'),
    ]),
    cvc: string([
      minLength(1, 'Please enter your cvc.'),
    ]),
  });

  const { register, handleSubmit } = useForm({
    resolver: valibotResolver(CommandeSchema),
  });
  const { CommandeService, CartService } = useDependencies()
  const { data: Cart } = CartService.useGetAllCartsQuery()
  const navigate = useNavigate()
  const cache = useQueryClient();
  const { mutateAsync } = CommandeService.useAddCommandeMutation({
    onSuccess: () => {
      cache.invalidateQueries(["CommandeService.getAll"])
      navigate("/listcommande")
    },
    onError: (error) => {
      console.log(error)
    }
  })
  const addCommandeSubmit = (data: any) => {
    mutateAsync({ ...data, paniers: Cart?.paniers })
  }

  return (
    <main className="px-8 py-16">
      <form
        className="md:grid md:grid-cols-2 md:gap-16"
        onSubmit={handleSubmit(addCommandeSubmit)}
      >
        <section>
          <div className="space-y-4">
            <h2 className="font-medium text-lg">Informations de contact</h2>
            <div>
              <label htmlFor="email" className="font-medium text-sm">Adresse e-mail</label>
              <input type="email" id="email" {...register("email", { required: true })} className="border border-gray-300 rounded-md w-full p-2.5" />
            </div>
          </div>
          <hr className="h-px my-10 bg-gray-300 border-0" />
          <div className="space-y-4">
            <h2 className="font-medium text-lg">Informations de livraison</h2>
            <div>
              <label htmlFor="first_name" className="font-medium text-sm">Prénom</label>
              <input id="first_name" {...register("first_name", { required: true })} className="border border-gray-300 rounded-md w-full p-2.5" />
            </div>
            <div>
              <label htmlFor="last_name" className="font-medium text-sm">Nom</label>
              <input id="last_name" {...register("last_name", { required: true })} className="border border-gray-300 rounded-md w-full p-2.5" />
            </div>
            <div>
              <label htmlFor="address" className="font-medium text-sm">Adresse</label>
              <input id="address" {...register("address", { required: true })} className="border border-gray-300 rounded-md w-full p-2.5" />
            </div>
            <div>
              <label htmlFor="phone" className="font-medium text-sm">Numéro de téléphone</label>
              <input type="tel" id="phone" {...register("phone", { required: true })} className="border border-gray-300 rounded-md w-full p-2.5" />
            </div>
          </div>
          <hr className="h-px my-10 bg-gray-300 border-0" />
          <div className="space-y-4">
            <h2 className="font-medium text-lg">Paiement</h2>
            <div>
              <label htmlFor="card_number" className="font-medium text-sm">Numéro de carte</label>
              <input id="card_number" {...register("card_number", { required: true })} className="border border-gray-300 rounded-md w-full p-2.5" />
            </div>
            <div>
              <label htmlFor="card_name" className="font-medium text-sm">Nom sur la carte</label>
              <input id="card_name" {...register("card_name", { required: true })} className="border border-gray-300 rounded-md w-full p-2.5" />
            </div>
            <div>
              <label htmlFor="card_expiration" className="font-medium text-sm">Date d'expiration (MM/AA)</label>
              <input id="card_expiration" {...register("card_expiration", { required: true })} className="border border-gray-300 rounded-md w-full p-2.5" />
            </div>
            <div>
              <label htmlFor="cvc" className="font-medium text-sm">Code de sécurité</label>
              <input id="cvc" {...register("cvc", { required: true })} className="border border-gray-300 rounded-md w-full p-2.5" />
            </div>
          </div>
        </section>
        <aside className="space-y-4">
          <h2 className="font-medium text-lg">Résumé de votre commande</h2>
          <div className="bg-white border border-gray-300 rounded-lg">
            <ul>
              <li className="border-b last:border-b-0 border-gray-300 flex p-6">
                <div className="shrink-0">
                  <img src="https://picsum.photos/80/120" alt="Plat" />
                </div>
                <div className="flex flex-col flex-1 ml-6 justify-between">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium">Nom du plat</h4>
                      <p className="text-sm">Lorem ipsum</p>
                      <p className="text-sm">Lorem ipsum</p>
                    </div>
                    <div>
                      <button type="button" className="flex justify-center items-center text-gray-500 p-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                          <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between pt-2">
                    <p className="font-medium">10,00 €</p>
                    <select className="font-medium md:text-sm border border-gray-300 rounded-md" name="quantity" id="quantity">
                      <option value="1">1</option>
                    </select>
                  </div>
                </div>
              </li>
            </ul>
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
              <Button type="submit" className="w-full">Confirmer la commande</Button>
            </div>
          </div>
        </aside>
      </form>
    </main>
  )
}