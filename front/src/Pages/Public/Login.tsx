import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Button } from "../../Components/atoms/Button";

export const Login = () => {
    const { register, handleSubmit } = useForm();

    return (
        <section className="h-screen">
            <div className="max-w-xl mx-auto space-y-8 p-8 bg-white">
                <h1 className="text-2xl md:text-3xl text-center">Connexion</h1>
                <form className="flex flex-col space-y-6" onSubmit={handleSubmit(data => console.log(data))}>
                    <input
                        {...register("username", { required: true })}
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