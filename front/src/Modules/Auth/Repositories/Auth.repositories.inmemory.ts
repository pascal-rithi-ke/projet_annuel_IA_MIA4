import { Auth } from "../Model/Auth";
import { IAuthRepositories } from "../Port/Auth.port.repositories";

export class AuthInMemoryRepositories implements IAuthRepositories {
  signIn(email: string, password: string): Promise<Auth> {
    return new Promise<Auth>((resolve) => {
      const auth = FakeAuthData.find(
        (auth) => auth.email === email && auth.password === password
      );

      if (!auth) {
        throw new Error("Email ou mot de passe incorrect");
      }

      resolve({ token: auth.token });
    });
  }
  // signUp(): Promise<any> {
  // }
}

const FakeAuthData = [
  {
    id: 1,
    email: "admin@yopmail.com",
    password: "admin",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkB5b3BtYWlsLmNvbSIsInJvbGUiOjF9.yaP5nwYaFP_v63eSzimOel6mbGMk-KOVp7jOCkRy4g8",
  },
  {
    id: 3,
    email: "admin2@yopmail.com",
    password: "admin2",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkbWluMiIsImVtYWlsIjoiYWRtaW4yQHlvcG1haWwuY29tIiwicm9sZSI6MX0.3YcpjmXH2lO5uzzfiU99wKVq9Lyn4xJXhYFbutnnf1Y",
  },
  {
    id: 4,
    email: "client@yopmail.com",
    password: "client",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImNsaWVudCIsImVtYWlsIjoiY2xpZW50QHlvcG1haWwuY29tIiwicm9sZSI6MH0.nGrOcSNq2x0PDJea-0vEdPHJiZT3c4UyKlMkr2w1FxA",
  },
  {
    id: 5,
    email: "client2@yopmail.com",
    password: "client2",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImNsaWVudDIiLCJlbWFpbCI6ImNsaWVudDJAeW9wbWFpbC5jb20iLCJyb2xlIjowfQ.p1LB1jJ3NblLyzy8LGYAy6Xq3jSeo3Dh-YL2-TnLvQE",
  },
];
