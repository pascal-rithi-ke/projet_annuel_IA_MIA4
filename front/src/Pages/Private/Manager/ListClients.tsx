import { useDependencies } from "../../../lib/Dependencies/DependenciesProvider";

export const ListClients = () => {
  const { CustomerService } = useDependencies();

  const { data: customers } = CustomerService.useGetAllCustomersQuery();

  // add table cutomers tailwind css
  return (
    <div>
      <h1>Liste des clients</h1>
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
          {customers?.map((customer) => (
            <tr key={customer.id}>
              <td className="border px-4 py-2">{customer.name}</td>
              <td className="border px-4 py-2">{customer.email}</td>
              <td className="border px-4 py-2">{customer.phone}</td>
              <td className="border px-4 py-2">{customer.address}</td>
              <td className="border px-4 py-2">{customer.city}</td>
              <td className="border px-4 py-2">{customer.zipCode}</td>
              <td className="border px-4 py-2">{customer.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}