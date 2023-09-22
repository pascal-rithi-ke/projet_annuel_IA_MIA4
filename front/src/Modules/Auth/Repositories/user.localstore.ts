import { Auth } from "../Model/Auth";

const TOKEN_STORAGE_KEY = 'token';

export function saveToken(token: Auth): void {
  localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(token));
}

export function getToken(): Auth | undefined {
  const user = localStorage.getItem(TOKEN_STORAGE_KEY);
  return user ? JSON.parse(user) : undefined;
}

export function removeToken(): void {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
}