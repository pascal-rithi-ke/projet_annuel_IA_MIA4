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
import { Payment } from './Pages/Private/User/Payment'
import { Panier } from './Pages/Public/Panier'
import { Recettes } from './Pages/Public/Recettes'
import { Recette } from './Pages/Public/Recette'
import { ProtectedRoute } from './lib/Router/ProtectedRoute'
import { ProtectedPublicRoute } from './lib/Router/ProtectedPublicRoute'
import { Navbar } from './Components/organims/Navbar'
import { TemplateDefault } from './Components/templates/TemplateDefault'
import { Terms } from './Pages/Public/Terms'
import { Privacy } from './Pages/Public/Privacy'


const App = () => {

  return (
    <Routes>
      <Route element={<TemplateDefault navbar={<Navbar />} />}>
        <Route element={<ProtectedRoute authRole={"manager"} />}>
          <Route path='/' element={<Dashbord />} />
          <Route path="/listClients" element={<ListClients />} />
          <Route path="/gestionRecettes" element={<GestionRecettes />} />
          <Route path="/client" element={<Client />} />
        </Route>

        <Route element={<ProtectedRoute authRole={"user"} />}>
          <Route path="/listcommande" element={<ListeCommande />} />
          <Route path="/commande" element={<Commande />} />
          <Route path="/payment" element={<Payment />} />
        </Route>

        <Route index element={<Home />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/recettes" element={<Recettes />} />
        <Route path="/recettes/:id" element={<Recette />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route element={<ProtectedPublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>
    </Routes >
  )
}

export default App
