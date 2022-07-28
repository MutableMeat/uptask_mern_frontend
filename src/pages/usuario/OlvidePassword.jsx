import { useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../../config/clienteAxios.jsx";

//Componentes
import Alerta from "../../components/Alerta.jsx";

const OlvidePassword = () => {
    const [email, setEmail] = useState("");
    const [alerta, setAlerta] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === "") {
            setAlerta({
                msg: "El email es obligatorio",
                error: true,
            });
            return
        }

        try {
            const { data } = await clienteAxios.post('/usuarios/olvide-password', { email })

            setAlerta({
                msg: data.msg,
                error: false
            })

            setEmail('')

        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    };

    const { msg } = alerta;

    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl capitalize">
                Recupera tu contraseña y administra tus{" "}
                <span className="text-slate-700">proyectos</span>
            </h1>

            {msg && <Alerta alerta={alerta} />}

            <form
                className="my-10 bg-white shadow rounded-lg p-10"
                onSubmit={handleSubmit}
            >
                <div className="my-5">
                    <label
                        htmlFor="email"
                        className=" text-gray-600 block text-xl font-bold"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder="Ingrese email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    />
                </div>
                <input
                    type="submit"
                    value="Enviar instrucciones"
                    className="bg-sky-700 mb-5  text-white uppercase font-bold py-3 hover:cursor-pointer w-full rounded transition-colors hover:bg-sky-800"
                />
            </form>

            <nav className="lg:flex lg:justify-between">
                <Link
                    to="/"
                    className="block text-center my-5 text-slate-500 text-sm uppercase"
                >
                    ¿Ya tiene una cuenta? Inicia sesión
                </Link>
                <Link
                    to="/registrar"
                    className="block text-center my-5 text-slate-500 text-sm uppercase"
                >
                    ¿No tiene una cuenta? Registrate
                </Link>
            </nav>
        </>
    );
};

export default OlvidePassword;
