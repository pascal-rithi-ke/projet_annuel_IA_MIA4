
const customers = [
  {
    id: 1,
    name: "João",
    email: "João@yopmail.com",
    phone: "0612345678",
    address: "4 rue de la paix",
    city: "Paris",
    postalCode: "75000",
    country: "France",
  },
  {
    id: 2,
    name: "Luis",
    email: "Luis@yopmail.com",
    phone: "0612345678",
    address: "7 rue de la frite",
    city: "Belgique",
    postalCode: "9000",
    country: "Belgique",
  },
];

export const ListClients = () => {

  // add table cutomers tailwind css
  return (
    <div>
      <h1>List Clients</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Téléphone</th>
            <th className="px-4 py-2">Adresse</th>
            <th className="px-4 py-2">Ville</th>
            <th className="px-4 py-2">Code postal</th>
            <th className="px-4 py-2">Pays</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{customer.name}</td>
              <td className="border px-4 py-2">{customer.email}</td>
              <td className="border px-4 py-2">{customer.phone}</td>
              <td className="border px-4 py-2">{customer.address}</td>
              <td className="border px-4 py-2">{customer.city}</td>
              <td className="border px-4 py-2">{customer.postalCode}</td>
              <td className="border px-4 py-2">{customer.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}