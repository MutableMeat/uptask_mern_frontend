import React from "react";
import { Link } from "react-router-dom";

//Components
import Busqueda from "./Busqueda";

//Hooks
import useProyectos from "../hooks/useProyectos";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { handleBuscador, cerrarSesionProyectos } = useProyectos();
  const { cerrarSesionAuth } = useAuth();

  const handleCerrarSesion = () => {
    cerrarSesionProyectos();
    cerrarSesionAuth();
    localStorage.removeItem("token");
  };

  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between">
        <h2 className="text-4xl text-sky-600 font-black text-center mb-5 md:mb-0">
          UpTask
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <button
            type="button"
            className="font-bold uppercase text-xs"
            onClick={handleBuscador}
          >
            Buscar proyectos
          </button>
          <Link to="/proyectos" className="font-bold uppercase text-xs">
            Proyectos
          </Link>

          <button
            type="button"
            className="bg-sky-600 p-3 rounded-md text-white font-bold uppercase text-[10px]"
            onClick={handleCerrarSesion}
          >
            Cerrar sesión
          </button>

          <Busqueda />
        </div>
      </div>
    </header>
  );
};

export default Header;
