import { Register } from './Pages/Public/Register'
import { Navbar } from './Components/organims/Navbar'
import { Home } from './Pages/Public/Home'
import { ListeCommande } from './Pages/Private/User/ListeCommande'
import { Dashbord } from './Pages/Private/Manager/Dashbord'
import { NavbarManager } from './Components/organims/NavbarManager'
import { ListClients } from './Pages/Private/Manager/ListClients'
import { GestionRecettes } from './Pages/Private/Manager/GestionRecettes'
import { Client } from './Pages/Private/Manager/Client'
import { Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import { Login } from './Pages/Public/Login'

const Auth = () => {

  // const token = localStorage.getItem('token')
  const token = true

  if (!token) {
    return <Navigate to={'/login'} replace />
  }

  return <Outlet />
}
const AuthRole = () => {

}

const App = () => {

  return (
    <Routes>

      <Route element={<Auth />}>
        <Route path="/" element={<Dashbord />} />
        <Route path="/listClients" element={<ListClients />} />
        <Route path="/gestionRecettes" element={<GestionRecettes />} />
        <Route path="/client" element={<Client />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />

    </Routes>
  )
}
const RoutesPublic = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}
const RoutesPrivate = () => {

  return (
    <>
      <Routes>
        <Route path="/manager/*" element={<RoutesManager />} />
        <Route path="/user/*" element={<RoutesUser />} />
      </Routes>
    </>
  )
}
const RoutesManager = () => {

  return (
    <>
      <Route path="/" element={<Dashbord />} />
      <Route path="/listClients" element={<ListClients />} />
      <Route path="/gestionRecettes" element={<GestionRecettes />} />
      <Route path="/client" element={<Client />} />
    </>
  )
}
const RoutesUser = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<ListeCommande />} />
      </Routes>
    </>
  )
}


export default App
