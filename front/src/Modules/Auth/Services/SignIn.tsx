import { useNavigate } from "react-router-dom";
import { useDependencies } from "../../../lib/Dependencies/DependenciesProvider"
import { saveToken } from "../Repositories/user.localstore";
import { getJWTObject } from "../../../utils/getJwtObject";
import { Role } from "../Model/Role";

export const SingIn = () => {
  const navigate = useNavigate();
  const { AuthService } = useDependencies();
  const { mutateAsync } = AuthService.useSignInMutation({
    onSuccess: (data) => {
      saveToken(data);
      const role = getJWTObject(data.token).role;
      if (role === Role.ADMIN) {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const SingInSubmit = async ({ email, password }: any) => {
    await mutateAsync({ email, password });
  };

  return {
    SingInSubmit
  }
}