import { Register } from './Pages/Public/Register'
import { Navbar } from './Components/organims/Navbar'
import { Home } from './Pages/Public/Home'
import { ListeCommande } from './Pages/Private/User/ListeCommande'
import { Dashbord } from './Pages/Private/Manager/Dashbord'
import { NavbarManager } from './Components/organims/NavbarManager'
import { ListClients } from './Pages/Private/Manager/ListClients'
import { GestionRecettes } from './Pages/Private/Manager/GestionRecettes'
import { Client } from './Pages/Private/Manager/Client'

const App = () => {

  return (
    <>
      <NavbarManager />
      <GestionRecettes />
    </>
  )
}

export default App
