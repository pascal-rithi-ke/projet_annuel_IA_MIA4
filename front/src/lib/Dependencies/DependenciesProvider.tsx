import { createContext, useContext } from "react";
import { IRecettesRepositoriesReactQuery } from "../../Modules/Recette/Port/Recette.port.repositories.react-query";
import { IAuthRepositoriesReactQuery } from "../../Modules/Auth/Port/Auth.port.repositories.react-query";
import { ICartRepositoriesReactQuery } from "../../Modules/Cart/Port/Cart.port.repositories.react-query";
import { ILivreursRepositoriesReactQuery } from "../../Modules/Livreur/Port/Livreur.port.repositories.react-query";
import { ICustomerRepositoriesReactQuery } from "../../Modules/Customer/Port/Customer.port.repositories.react-query";

export type Dependencies = {
  recettesService: IRecettesRepositoriesReactQuery
  AuthService: IAuthRepositoriesReactQuery
  CartService: ICartRepositoriesReactQuery
  livreursService: ILivreursRepositoriesReactQuery
  CustomerService: ICustomerRepositoriesReactQuery
};

const DependenciesContext = createContext<Dependencies>(null as any);

export const DependenciesProvider: React.FC<{
  dependencies: Dependencies;
  children: React.ReactNode;
}> = ({ dependencies, children }) => {
  return (
    <DependenciesContext.Provider value={dependencies}>
      {children}
    </DependenciesContext.Provider>
  );
};

export const useDependencies = () => useContext(DependenciesContext);
