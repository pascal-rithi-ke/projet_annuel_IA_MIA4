import { useNavigate } from "react-router-dom";
import { useDependencies } from "../../../lib/Dependencies/DependenciesProvider"
import { saveToken } from "../Repositories/user.localstore";

// route
// navbar 
export const SingIn = () => {
  const navigate = useNavigate();
  const { AuthService } = useDependencies();
  const { mutateAsync } = AuthService.useSignInMutation({
    onSuccess: (data) => {
      saveToken(data);
      navigate('/');
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const SingInSubmit = async ({ email, password }: { email: string, password: string }) => {
    await mutateAsync({ email, password });
  };

  return {
    SingInSubmit
  }
}