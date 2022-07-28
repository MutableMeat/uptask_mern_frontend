import { Link } from "react-router-dom";

//Hooks
import useAuth from "../hooks/useAuth";

const Sidebar = () => {
  const { auth } = useAuth();

  return (
    <aside className="md:w-1/3 lg:w-1/5 xl:w-1/6 px-5 py-10">
      <p className="text-md font-bold">Bienvenido {auth.nombre}</p>
      <Link
        to="crear-proyecto"
        className="bg-sky-600 text-white p-2 mt-5 rounded-lg text-sm w-full font-bold block text-center shadow-slate-900"
      >
        Nuevo proyecto
      </Link>
    </aside>
  );
};

export default Sidebar;
