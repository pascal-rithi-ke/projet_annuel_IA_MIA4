import { useNavigate } from "react-router-dom";
import { useDependencies } from "../../../lib/Dependencies/DependenciesProvider"


export const SingIn = () => {
  const navigate = useNavigate();
  const { AuthService } = useDependencies();
  const { mutateAsync } = AuthService.useSignInMutation({
    onSuccess: (data) => {
      // queryClient.setQueryData([QUERY_KEY.user], data);
      console.log(data.token);

      // navigate('/');
    },
    onError: (error) => {
      console.log(error);
    }
  });

  const SingInSubmit = (data: any) => {
    console.log(data);
    // valide () => {

    // }
    // error (data) => {

    //   notifaty(data)
    // }
    // event.preventDefault();
    // const { email, password } = event.target.elements;

    // try {
    //   await mutateAsync({ email: email.value, password: password.value });
    // } catch (error) {
    //   console.log(error);
    // }


  };

  return {
    SingInSubmit
  }
}