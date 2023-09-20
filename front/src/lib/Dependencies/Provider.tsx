import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DependenciesProvider } from './DependenciesProvider';
import { UsersRepositoriesReactQuery } from '../../Modules/User/React-query/User.repositories.react-query';
import { RecettesRepositoriesReactQuery } from '../../Modules/Recette/React-query/Recette.repositories.react-query';
import { RecettesInMemoryRepositories } from '../../Modules/Recette/Repositories/Recette.repositories.inmemory';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthRepositoriesReactQuery } from '../../Modules/Auth/React-query/Auth.repositories.react-query';
import { AuthInMemoryRepositories } from '../../Modules/Auth/Repositories/Auth.repositories.inmemory';

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
        AuthService: new AuthRepositoriesReactQuery(new AuthInMemoryRepositories())
      }}>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </DependenciesProvider>
    </>
  )
}