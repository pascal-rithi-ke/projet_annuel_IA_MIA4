import { Register } from './Pages/Public/Register'
import { Home } from './Pages/Public/Home'
import { ListeCommande } from './Pages/Private/User/ListeCommande'
import { Dashbord } from './Pages/Private/Manager/Dashbord'
import { ListClients } from './Pages/Private/Manager/ListClients'
import { GestionRecettes } from './Pages/Private/Manager/GestionRecettes'
import { Client } from './Pages/Private/Manager/Client'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/Public/Login'
import { Commande } from './Pages/Private/User/Commande'
import { Recettes } from './Pages/Public/Recettes'
import { Recette } from './Pages/Public/Recette'
import { ProtectedRoute } from './lib/Router/ProtectedRoute'
import { ProtectedPublicRoute } from './lib/Router/ProtectedPublicRoute'
import { Navbar } from './Components/organims/Navbar'
import { TemplateDefault } from './Components/templates/TemplateDefault'
import { Role } from './Modules/Auth/Model/Role'
import { NavbarManager } from './Components/organims/NavbarManager'
import { Panier } from './Pages/Public/Panier'


const App = () => {

  return (
    <Routes>
      <Route element={<TemplateDefault navbar={<NavbarManager />} />}>
        <Route element={<ProtectedRoute authRole={Role.ADMIN} redirectPath='/dashbord' />}>
          <Route path='/dashboard' element={<Dashbord />} />
          <Route path="/listClients" element={<ListClients />} />
          <Route path="/gestionRecettes" element={<GestionRecettes />} />
          <Route path="/client" element={<Client />} />
        </Route>
      </Route>

      <Route element={<TemplateDefault navbar={<Navbar />} />}>
        <Route element={<ProtectedRoute authRole={Role.USER} />}>
          <Route path="/listcommande" element={<ListeCommande />} />
          <Route path="/commande" element={<Commande />} />
        </Route>

        <Route path='/' element={<Home />} />
        <Route path="/recettes" element={<Recettes />} />
        <Route path="/recettes/:id" element={<Recette />} />
        <Route path="/panier" element={<Panier />} />

        <Route element={<ProtectedPublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>
    </Routes >
  )
}

export default App
