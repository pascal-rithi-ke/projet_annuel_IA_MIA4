import { Outlet } from "react-router-dom"
import { Footer } from "../organims/Footer"


export const TemplateDefault = ({ navbar }: any) => {
  return (
    <div className="flex flex-col min-h-screen">
      {navbar}
      <div className="flex-grow">
        <Outlet />
      </div>
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};


