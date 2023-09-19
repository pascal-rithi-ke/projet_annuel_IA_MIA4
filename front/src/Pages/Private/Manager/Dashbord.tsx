

const deliveryMen = [{
  name: 'Jean',
  surname: 'Dupont',
  status: 'Disponible',
  position: 'Paris',
}, {
  name: 'Jean Pierre',
  surname: 'Marie',
  status: 'Indisponible',
  position: 'Japon',
}
]
export const Dashbord = () => {

  // add table deliveryMen tailwind css  
  return (
    <>
      <h1>Dashbord</h1>
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
          {deliveryMen.map((deliveryMan, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{deliveryMan.name}</td>
              <td className="border px-4 py-2">{deliveryMan.surname}</td>
              <td className="border px-4 py-2">{deliveryMan.status}</td>
              <td className="border px-4 py-2">{deliveryMan.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}