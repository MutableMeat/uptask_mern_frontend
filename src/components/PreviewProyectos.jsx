import { Link } from "react-router-dom";

//Hooks
import useAuth from "../hooks/useAuth";

const PreviewProyectos = ({ proyecto }) => {
  const { auth } = useAuth();
  const { _id, nombre, cliente, creador } = proyecto;

  return (
    <div className="border-b p-5 flex flex-col md:flex-row justify-between">
      <div className="flex items-center gap-2">
        <p className="flex-1 text-sm">
          {nombre}{" "}
          <span className="text-xs text-gray-500 uppercase">{cliente}</span>
        </p>

        {auth._id !== creador && (
          <p className="px-2 py-1 text-xs rounded-lg text-white bg-green-500 font-bold uppercase">
            Colaborador
          </p>
        )}
      </div>

      <Link
        to={`${_id}`}
        className="text-gray-600 hover:text-gray-800 text-xs uppercase font-bold"
      >
        Ver proyecto
      </Link>
    </div>
  );
};

export default PreviewProyectos;
