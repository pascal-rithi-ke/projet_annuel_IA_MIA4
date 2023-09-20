import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DependenciesProvider } from './DependenciesProvider';
import { UsersRepositoriesReactQuery } from '../../Modules/User/React-query/User.repositories.react-query';
import { UsersRepositories } from '../../Modules/User/Repositories/User.repositories';
import { RecettesRepositoriesReactQuery } from '../../Modules/Recette/React-query/Recette.repositories.react-query';
import { RecettesInMemoryRepositories } from '../../Modules/Recette/Repositories/Recette.repositories.inmemory';

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
        usersService: new UsersRepositoriesReactQuery(new UsersRepositories()),
        recettesService: new RecettesRepositoriesReactQuery(new RecettesInMemoryRepositories())
      }}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </DependenciesProvider>
    </>
  )
}