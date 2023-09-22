import { MutationOptions, UseMutationResult, useMutation } from "@tanstack/react-query";
import { Auth } from "../Model/Auth";
import { IAuthRepositoriesReactQuery } from "../Port/Auth.port.repositories.react-query";
import { IAuthRepositories } from "../Port/Auth.port.repositories";




export class AuthRepositoriesReactQuery implements IAuthRepositoriesReactQuery {
  private readonly authApiService: IAuthRepositories

  constructor(AuthApiService: IAuthRepositories) {
    this.authApiService = AuthApiService
  }

  useSignInMutation(
    mutationOptions?: MutationOptions<Auth, Error, { email: string, password: string }, unknown>
  ): UseMutationResult<Auth, Error, { email: string, password: string }, unknown> {

    return useMutation<Auth, Error, { email: string, password: string }, unknown>(
      (data) => this.authApiService.signIn(data.email, data.password), mutationOptions
    );
  }
  useSignUpMutation(
    mutationOptions?: MutationOptions<Auth, Error, { email: string, password: string }, unknown>
  ): UseMutationResult<Auth, Error, { email: string, password: string }, unknown> {

    return useMutation<Auth, Error, { email: string, password: string }, unknown>(
      (data) => this.authApiService.signUp(data.email, data.password), mutationOptions
    );
  }
};