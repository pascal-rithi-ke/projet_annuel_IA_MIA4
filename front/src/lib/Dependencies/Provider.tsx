import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DependenciesProvider } from './DependenciesProvider';
import { RecettesRepositoriesReactQuery } from '../../Modules/Recette/React-query/Recette.repositories.react-query';
import { RecettesInMemoryRepositories } from '../../Modules/Recette/Repositories/Recette.repositories.inmemory';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthRepositoriesReactQuery } from '../../Modules/Auth/React-query/Auth.repositories.react-query';
import { AuthInMemoryRepositories } from '../../Modules/Auth/Repositories/Auth.repositories.inmemory';
import { CartRepositoriesReactQuery } from '../../Modules/Cart/React-query/Cart.repositories.react-query';
import { CartInMemoryRepositories } from '../../Modules/Cart/Repositories/Cart.repositories.inmemory';
import { LivreursInMemoryRepositories } from '../../Modules/Livreur/Repositories/Livreur.repositories.inmemory';
import { LivreursRepositoriesReactQuery } from '../../Modules/Livreur/React-query/Livreur.repositories.react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: "always"
    },
    mutations: {
      networkMode: 'always',
    },
  }
})


export const Provider = ({ children }: { children: any }) => {

  return (
    <>
      <DependenciesProvider dependencies={{
        recettesService: new RecettesRepositoriesReactQuery(new RecettesInMemoryRepositories()),
        AuthService: new AuthRepositoriesReactQuery(new AuthInMemoryRepositories()),
        CartService: new CartRepositoriesReactQuery(new CartInMemoryRepositories()),
        livreursService: new LivreursRepositoriesReactQuery(new LivreursInMemoryRepositories()),
      }}>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </DependenciesProvider>
    </>
  )
}