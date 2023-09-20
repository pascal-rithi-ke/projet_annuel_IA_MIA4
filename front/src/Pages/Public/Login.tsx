import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { email, minLength, object, string } from 'valibot';
import { valibotResolver } from '@hookform/resolvers/valibot';
import { Button } from "../../Components/atoms/Button";
import { SingIn } from "../../Modules/Auth/Services/SignIn";

export const Login = () => {
    const LoginSchema = object({
        email: string([
            minLength(1, 'Please enter your email.'),
            email('The email address is badly formatted.'),
        ]),
        password: string([
            minLength(1, 'Please enter your password.'),
        ]),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: valibotResolver(LoginSchema),
    });
    console.log(errors);

    const { SingInSubmit } = SingIn();

    return (
        <section className="h-screen">
            <div className="max-w-xl mx-auto space-y-8 p-8 bg-white">
                <h1 className="text-2xl md:text-3xl text-center">Connexion</h1>
                <form className="flex flex-col space-y-6" onSubmit={handleSubmit(SingInSubmit)}>
                    <input
                        {...register("email", { required: true })}
                        className="p-3 border border-gray-300 rounded"
                        type="text"
                        placeholder="Nom d'utilisateur"
                    />
                    <input
                        {...register("password", { required: true })}
                        className="p-3 border border-gray-300 rounded"
                        type="password"
                        placeholder="Mot de passe"
                    />
                    <Button>Connexion</Button>
                </form>
                <p className="text-center">Nouvel utilisateur ? <Link to="/register" className="text-secondary underline">Inscription</Link></p>
            </div>
        </section>
    )
}