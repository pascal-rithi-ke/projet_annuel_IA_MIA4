import { useNavigate } from "react-router-dom";
import { useDependencies } from "../../../lib/Dependencies/DependenciesProvider";


export const SingUp = () => {
  const navigate = useNavigate();
  const { AuthService } = useDependencies();
  const { mutateAsync } = AuthService.useSignUpMutation({
    onSuccess: () => {
      navigate('/login');
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const SingUpSubmit = async ({ email, password }: any) => {
    await mutateAsync({ email, password });
  };

  return {
    SingUpSubmit
  }
}