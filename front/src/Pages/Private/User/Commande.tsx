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
            <div className="border-y border-gray-300 p-6 space-y-6">
              <div className="flex justify-between items-center">
                <p className="font-medium">Sous-total</p>
                <p className="font-medium">{Cart?.soustotal} €</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="font-medium">Livraison</p>
                <p className="font-medium">{Cart?.livraison} €</p>
              </div>
              <div className="border-t border-gray-300 flex justify-between items-center pt-6">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">{Cart?.total} €</p>
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