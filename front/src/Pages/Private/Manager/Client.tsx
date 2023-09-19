
const infoClient = {
  id: 1,
  name: "João",
  email: "João@yopmail.com",
  phone: "0612345678",
  address: "4 rue de la paix",
  city: "Paris",
  postalCode: "75000",
  country: "France",
  commande: [
    {
      numero_commande: 14343,
      date: "2021-08-12",
      montant: 44,
      plat: ["poulet"],
      dessert: ["tarte au citron"],
      localisation: "4 rue de la paix",
      status: "Livré",
    },
    {
      numero_commande: 56643,
      date: "2021-09-22",
      montant: 32,
      plat: ["ramen", "poulet"],
      dessert: ["Brownie"],
      localisation: "4 rue de la paix",
      status: "en cours",
    },
  ],
};

export const Client = () => {
  return (
    <div className="flex">
      {/* Barre latérale d'informations client */}
      <div className="w-1/3 bg-gray-200 p-4">
        <h2 className="text-lg font-semibold">Informations Client</h2>
        <p>Nom: {infoClient.name}</p>
        <p>Email: {infoClient.email}</p>
        <p>Téléphone: {infoClient.phone}</p>
        <p>Adresse: {infoClient.address}</p>
        <p>Ville: {infoClient.city}</p>
        <p>Code Postal: {infoClient.postalCode}</p>
        <p>Pays: {infoClient.country}</p>
      </div>

      {/* Table des commandes */}
      <div className="w-2/3 p-4">
        <h2 className="text-lg font-semibold">Commandes</h2>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Numéro de Commande</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Montant</th>
              <th className="px-4 py-2">Plat</th>
              <th className="px-4 py-2">Dessert</th>
              <th className="px-4 py-2">Localisation</th>
              <th className="px-4 py-2">Statut</th>
            </tr>
          </thead>
          <tbody>
            {infoClient.commande.map((commande) => (
              <tr key={commande.numero_commande}>
                <td>{commande.numero_commande}</td>
                <td>{commande.date}</td>
                <td>{commande.montant}</td>
                <td>{commande.plat.join(", ")}</td>
                <td>{commande.dessert.join(", ")}</td>
                <td>{commande.localisation}</td>
                <td>{commande.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
