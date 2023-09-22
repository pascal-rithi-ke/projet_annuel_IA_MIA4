import { useDependencies } from "../../../lib/Dependencies/DependenciesProvider"

export const Dashboard = () => {
  const { livreursService } = useDependencies();

  const { data: livreurs } = livreursService.useGetAllLivreursQuery();

  return (
    <>
      <h1>Dashboard</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Prénom</th>
            <th className="px-4 py-2">Statut</th>
            <th className="px-4 py-2">Position</th>
          </tr>
        </thead>
        <tbody>
          {livreurs?.map((livreur) => (
            <tr key={livreur.id}>
              <td className="border px-4 py-2">{livreur.name}</td>
              <td className="border px-4 py-2">{livreur.surname}</td>
              <td className="border px-4 py-2">{livreur.status}</td>
              <td className="border px-4 py-2">{livreur.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}