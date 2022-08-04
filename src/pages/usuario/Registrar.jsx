import { useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../../config/clienteAxios";

//Components
import Alerta from "../../components/Alerta";

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { msg } = alerta;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, email, password, repetirPassword].includes("")) {
      setAlerta({
        msg: "Todos los campos son requeridos",
        error: true,
      });
      return;
    }

    if (password !== repetirPassword) {
      setAlerta({
        msg: "Las contraseñas no coinciden",
        error: true,
      });
      return;
    }

    if (password.length < 6) {
      setAlerta({
        msg: "La contraseña debe tener minimo 6 caracteres",
        error: true,
      });
      return;
    }

    setAlerta({});

    //Crear usuario en la API
    try {
      const { data } = await clienteAxios.post(`/usuarios`, {
        nombre,
        email,
        password,
      });
      setAlerta({
        msg: data.msg,
        error: false,
      });
      setNombre("");
      setEmail("");
      setPassword("");
      setRepetirPassword("");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  return (
    <>
      <h1
        className="text-sky-600 font-black text-6xl capitalize"
        data-cy="titulo"
      >
        Crea tu cuenta y administra tus{" "}
        <span className="text-slate-700">proyectos</span>
      </h1>

      <div data-cy="alerta-registro">{msg && <Alerta alerta={alerta} />}</div>

      <form
        onSubmit={handleSubmit}
        className="my-10 bg-white shadow rounded-lg p-10"
        data-cy="form-registrar"
      >
        <div className="my-5">
          <label
            htmlFor="nombre"
            className=" text-gray-600 block text-xl font-bold"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="nombre"
            placeholder="Ingrese nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            data-cy="input-nombre"
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="email"
            className=" text-gray-600 block text-xl font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ingrese email"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-cy="input-email"
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="password"
            className=" text-gray-600 block text-xl font-bold"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Ingrese password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-cy="input-password"
          />
        </div>
        <div className="my-5">
          <label
            htmlFor="password2"
            className=" text-gray-600 block text-xl font-bold"
          >
            Repetir password
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Repita su password"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={repetirPassword}
            onChange={(e) => setRepetirPassword(e.target.value)}
            data-cy="input-repetir-password"
          />
        </div>

        <input
          type="submit"
          value="Crear cuenta"
          className="bg-sky-700 mb-5  text-white uppercase font-bold py-3 hover:cursor-pointer w-full rounded transition-colors hover:bg-sky-800"
          data-cy="submit-registrar"
        />
      </form>

      <nav className="lg:flex lg:justify-between">
        <Link
          to="/"
          className="block text-center my-5 text-slate-500 text-sm uppercase"
          data-cy="enlace-login"
        >
          ¿Ya tiene una cuenta? Inicia sesión
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

export default Registrar;
