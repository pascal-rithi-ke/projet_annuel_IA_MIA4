import { Outlet } from "react-router-dom"
import { Footer } from "../organims/Footer"


export const TemplateDefault = ({
  navbar,
}: any) => {
  return (
    <>
      {navbar}
      <Outlet />
      <Footer />
    </>
  )
}
