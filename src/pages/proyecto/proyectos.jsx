import { useEffect } from "react";
import useProyectos from "../../hooks/useProyectos";

//Socket.io
//import io from "socket.io-client";

//Components
import PreviewProyectos from "../../components/PreviewProyectos";
import Alerta from "../../components/Alerta";

const Proyectos = () => {
  const { proyectos, alerta } = useProyectos();

  const { msg } = alerta;
  return (
    <>
      <h1 className="text-4xl font-black">Proyectos</h1>
      {msg && <Alerta alerta={alerta} />}
      <div className="bg-white shadow mt-10 rounded-lg ">
        {proyectos.length ? (
          proyectos.map((proyecto) => (
            <PreviewProyectos key={proyecto._id} proyecto={proyecto} />
          ))
        ) : (
          <p className="text-gray-600 uppercase text-xs text-center p-5">
            Aun no existen proyectos
          </p>
        )}
      </div>
    </>
  );
};

export default Proyectos;
