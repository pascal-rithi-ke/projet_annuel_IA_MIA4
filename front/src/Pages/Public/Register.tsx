import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { email, minLength, object, string } from "valibot";
import { SingUp } from "../../Modules/Auth/Services/SingUp";

export const Register = () => {
  const SignUpSchema = object({
    email: string([
      minLength(1, 'Please enter your email.'),
      email('The email address is badly formatted.'),
    ]),
    password: string([
      minLength(1, 'Please enter your password.'),
    ]),
  });

  const {
    register,
    handleSubmit,
  } = useForm({
    resolver: valibotResolver(SignUpSchema)
  })


  const { SingUpSubmit } = SingUp();


  return (
    <div className="flex justify-center items-center h-screen">
      <section
        className="border-2 border-gray-300"
        style={{
          width: "456px",
          padding: "24px",
        }}
      >
        <h1
          className="text-center mb-10 "
          style={{
            color: "rgb(36, 36, 36)",
            fontFamily: "Agrandir, Verdana, Geneva, sans-serif",
            fontSize: "24px",
          }}
        >
          Inscrivez-vous maintenant
        </h1>
        <div className="w-full">
          <form
            onSubmit={handleSubmit(SingUpSubmit)}
            className="w-full flex flex-col justify-center items-center space-y-7"
          >
            <input {...register("email")} name="email" type="email" placeholder="E-mail"
              className="border-2 border-gray-300 w-full block p-2 rounded-md"
            />

            <input {...register("password")} placeholder="Choisir un mot de passe"
              className="border-2 border-gray-300 w-full block p-2 rounded-md"
              style={{
                color: "rgb(36, 36, 36)",
              }}
            />
            <input type="submit" value="Continuer"
              className="block w-full p-2 cursor-pointer font-bold rounded-md"
              style={{
                backgroundColor: "rgb(6, 122, 70)",
                color: "white",
              }}
            />
            <Link to="/login" className="underline">Retour</Link>
          </form>
        </div>
      </section>
    </div>
  )
}