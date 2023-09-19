
const Recettes = {
  plats: [
    {
      "name": "Roasted Chicken",
      "description": "Tender roasted chicken with a blend of fresh herbs.",
      "price": 15.99,
      "quantity": 41
    }, {
      "name": "Ramen",
      "description": "Noodles in a savory broth, topped with poached egg, nori, and scallions.",
      "price": 12.99,
      "quantity": 32
    }
  ],
  desserts: [
    {
      "name": "tarte au citron",
      "description": "Tarte au citron meringuée",
      "price": 4,
      "quantity": 19
    }, {
      "name": "Brownie",
      "description": "Brownie au chocolat",
      "price": 3,
      "quantity": 10
    }
  ]
}


export const GestionRecettes = () => {

  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Prix</th>
            <th className="px-4 py-2">Quantité</th>
          </tr>
        </thead>
        <h1>Plats</h1>
        <tbody>
          {Recettes.plats.map((recette, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{recette.name}</td>
              <td className="border px-4 py-2">{recette.description}</td>
              <td className="border px-4 py-2">{recette.price}</td>
              <td className="border px-4 py-2">{recette.quantity}</td>
              <td className="border px-4 py-2 flex gap-2">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <h1>Desserts</h1>
        <tbody>
          {Recettes.desserts.map((recette, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{recette.name}</td>
              <td className="border px-4 py-2">{recette.description}</td>
              <td className="border px-4 py-2">{recette.price}</td>
              <td className="border px-4 py-2">{recette.quantity}</td>
              <td className="border px-4 py-2 flex gap-2">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
