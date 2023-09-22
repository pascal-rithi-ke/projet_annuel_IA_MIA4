import React from "react";
import { useDependencies } from "../../../lib/Dependencies/DependenciesProvider"


export const ListeCommande = () => {
  const { CommandeService } = useDependencies()
  const { data } = CommandeService.useGetAllCommandeQuery()

  return (
    <div>
      <h1>List Commande</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">numero commande</th>
            <th className="px-4 py-2">Livreur</th>
            <th className="px-4 py-2">Paniers</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((commande, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{commande.number_commande}</td>
              <td className="border px-4 py-2">{commande.livreur}</td>
              <td className="border px-4 py-2">{commande?.paniers?.map(plat => (
                <React.Fragment key={plat.id}>
                  <p>nom : {plat.name}</p>
                  <p>quantité : {plat.quantity}</p>
                </React.Fragment>
              ))}</td>
              <td className="border px-4 py-2">{commande.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

