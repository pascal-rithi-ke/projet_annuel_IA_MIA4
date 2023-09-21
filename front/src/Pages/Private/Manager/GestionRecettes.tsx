import { useState } from "react";
import { Modal } from "../../../Components/organims/Modal";
import { useDependencies } from "../../../lib/Dependencies/DependenciesProvider";
import { Recette, RecetteType } from "../../../Modules/Recette/Model/Recette.model";
import { UseFormReset, useForm } from "react-hook-form";
import { maxValue, minLength, minValue, number, object, string } from "valibot";
import { valibotResolver } from "@hookform/resolvers/valibot";

function getRecetteType(type: RecetteType) {
  switch (type) {
    case RecetteType.PLAT:
      return "Plat";
    case RecetteType.DESSERT:
      return "Dessert";
  }
}

const EditRecetteSchema = object({
  name: string([
    minLength(1, 'Please enter a name.')
  ]),
  description: string([
    minLength(1, 'Please enter a description.'),
  ]),
  price: number([
    minValue(0, 'Please enter a price.')
  ]),
  quantity: number([
    minValue(0, 'Please enter a quantity.')
  ]),
  type: number([
    minValue(0),
    maxValue(1)
  ])
});

export const GestionRecettes = () => {
  const { recettesService } = useDependencies();
  const { data: recettes } = recettesService.useGetAllRecettesQuery();

  const [isEditing, setIsEditing] = useState(false);
  const [recetteToEditId, setRecetteToEditId] = useState<string | null>(null);
  const recetteToEdit = recettes?.find((recette) => recette.id === recetteToEditId);

  const [isDeleting, setIsDeleting] = useState(false);
  const [recetteToDeleteId, setRecetteToDeleteId] = useState<string | null>(null);
  const recetteToDelete = recettes?.find((recette) => recette.id === recetteToDeleteId);

  const openEditingModal = (recetteId: string) => {
    setRecetteToEditId(recetteId);
    setIsEditing(true);
  }

  const editRecette = (data: Partial<Recette>) => {
    console.log("Modification à faire sur :", data);

    // recettesService.updateRecette(data);
  }

  const closeEditingModal = (resetForm: UseFormReset<any>) => {
    setRecetteToEditId(null);
    setIsEditing(false);

    resetForm();
  }

  const openDeleteModal = (recetteId: string) => {
    setRecetteToDeleteId(recetteId);
    setIsDeleting(true);
  }

  const deleteRecette = (recetteId: string | undefined) => {
    console.log("Recette à supprimer :", recetteId);
  }

  const closeDeleteModal = () => {
    setRecetteToDeleteId(null);
    setIsDeleting(false);
  }

  return (
    <>
      <h1>Recettes</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Prix</th>
            <th className="px-4 py-2">Quantité</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {recettes?.sort((a, b) => a.type - b.type).map((recette) => (
            <tr key={recette.id}>
              <td className="border px-4 py-2">{recette.name}</td>
              <td className="border px-4 py-2">{recette.description}</td>
              <td className="border px-4 py-2">{recette.price}</td>
              <td className="border px-4 py-2">{recette.quantity}</td>
              <td className="border px-4 py-2">{getRecetteType(recette.type)}</td>
              <td className="border px-4 py-2 flex gap-2">
                <button onClick={() => openEditingModal(recette.id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
                <button onClick={() => openDeleteModal(recette.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditModal recette={recetteToEdit} isEditing={isEditing} closeEditingModal={closeEditingModal} editRecette={editRecette} />

      {/* Delete modal */}
      <Modal
        open={isDeleting}
        onClose={closeDeleteModal}
        title={`Supprimer ${recetteToDelete?.name}`}
        onSubmit={() => {
          deleteRecette(recetteToDelete?.id);
          closeDeleteModal();
        }}
      >
        <p>Êtes-vous sûr de vouloir supprimer la recette {recetteToDelete?.name} ?</p>
      </Modal>
    </>
  )
}

interface EditModalProps {
  recette: Recette | undefined
  isEditing: boolean
  closeEditingModal: (resetForm: UseFormReset<any>) => void
  editRecette: (data: Partial<Recette>) => void
}

const EditModal = ({ recette, isEditing, closeEditingModal, editRecette }: EditModalProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: valibotResolver(EditRecetteSchema),
  });

  return (
    <Modal
      open={isEditing}
      onClose={() => closeEditingModal(reset)}
      title="Modifier une recette"
      onSubmit={
        handleSubmit((data) => {
          editRecette({ ...data, id: recette!.id });

          closeEditingModal(reset);
        })
      }
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" {...register("name")} defaultValue={recette?.name} className="p-3 border border-gray-300 rounded" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <input type="text" id="description" {...register("description")} defaultValue={recette?.description} className="p-3 border border-gray-300 rounded" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price">Prix</label>
          <input type="number" id="price" {...register("price", { valueAsNumber: true })} defaultValue={recette?.price} className="p-3 border border-gray-300 rounded" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="quantity">Quantité</label>
          <input type="number" id="quantity" {...register("quantity", { valueAsNumber: true })} defaultValue={recette?.quantity} className="p-3 border border-gray-300 rounded" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="type">Type</label>
          <select id="type" {...register("type", { valueAsNumber: true })} defaultValue={recette?.type}>
            <option value={RecetteType.PLAT}>{getRecetteType(RecetteType.PLAT)}</option>
            <option value={RecetteType.DESSERT}>{getRecetteType(RecetteType.DESSERT)}</option>
          </select>
        </div>
      </div>
    </Modal>
  )
}