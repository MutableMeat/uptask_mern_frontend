import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import clienteAxios from "../../config/clienteAxios";

//Hooks
import useAuth from "../../hooks/useAuth";

//Componentes
import Alerta from "../../components/Alerta";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son requeridos",
        error: true,
      });
      return;
    }

    try {
      const { data } = await clienteAxios.post("/usuarios/login", {
        email,
        password,
      });
      setAlerta({});
      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate("/proyectos");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl capitalize">
        Inicia sesión y administra tus{" "}
        <span className="text-slate-700" data-cy="titulo">
          Proyectos
        </span>
      </h1>

      {msg && <Alerta alerta={alerta} />}

      <form
        className="my-10 bg-white shadow rounded-lg p-10"
        data-cy="form-login"
        onSubmit={handleSubmit}
      >
        <div className="my-5" data-cy="input-email">
          <label
            htmlFor="email"
            className=" text-gray-600 block text-xl font-bold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Ingrese email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>
        <div className="my-5" data-cy="input-password">
          <label
            htmlFor="password"
            className=" text-gray-600 block text-xl font-bold"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            placeholder="Ingrese password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
          />
        </div>

        <input
          type="submit"
          value="Iniciar sesión"
          className="bg-sky-700 mb-5  text-white uppercase font-bold py-3 hover:cursor-pointer w-full rounded transition-colors hover:bg-sky-800"
          data-cy="submit-login"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          to="/registrar"
          className="block text-center my-5 text-slate-500 text-sm uppercase"
          data-cy="nueva-cuenta"
        >
          ¿No tiene una cuenta? Registrate
        </Link>
        <Link
          to="/olvide-password"
          className="block text-center my-5 text-slate-500 text-sm uppercase"
        >
          Olvide mi contraseña
        </Link>
      </nav>
    </>
  );
};

export default Login;
