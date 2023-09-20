import { MutationOptions, UseMutationResult } from "@tanstack/react-query";
import { Auth } from "../Model/Auth";

export interface IAuthRepositoriesReactQuery {
  useSignInMutation(
    mutationOptions?: MutationOptions<Auth, Error, { email: string, password: string }, unknown>
  ): UseMutationResult<Auth, Error, { email: string, password: string }, unknown>;
  // signUp(): Promise<any>;
}