import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

//Context
import useProyectos from "../hooks/useProyectos";

//Components
import Alerta from "./Alerta";

const FormularioProyecto = () => {
  const [nombre, setNombre] = useState("");
  const [id, setId] = useState(null);
  const [descripcion, setDescripcion] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");
  const [cliente, setCliente] = useState("");

  const { alerta, mostrarAlerta, submitProyecto, proyecto } = useProyectos();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      setId(proyecto._id);
      setNombre(proyecto.nombre);
      setDescripcion(proyecto.descripcion);
      setFechaEntrega(proyecto.fechaEntrega?.split("T")[0]);
      setCliente(proyecto.cliente);
    }
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, descripcion, fechaEntrega, cliente].includes("")) {
      mostrarAlerta({
        msg: "Todos los campos son requeridos",
        error: true,
      });

      return;
    }

    //Pasar los datos al provider
    await submitProyecto({ id, nombre, descripcion, fechaEntrega, cliente });
    //TODO: Evaluar id cuando se resetea a null
    //setId(null)
    setNombre("");
    setDescripcion("");
    setFechaEntrega("");
    setCliente("");
  };

  const { msg } = alerta;

  return (
    <form
      className="bg-white py-10 px-5 md:w-3/6 rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      {msg && <Alerta alerta={alerta} />}

      <div className="mb-5">
        <label
          htmlFor="nombre"
          className="text-gray-700 uppercase font-bold text-xs"
        >
          Nombre proyecto
        </label>

        <input
          type="text"
          id="nombre"
          value={nombre}
          className="border w-full p-2 mt-2 rounded-md placeholder-gray-400 text-xs"
          placeholder="Nombre proyecto"
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="descripcion"
          className="text-gray-700 uppercase font-bold text-xs"
        >
          Descripción
        </label>

        <textarea
          type="text"
          id="descripcion"
          value={descripcion}
          className="border w-full p-2 mt-2 rounded-md placeholder-gray-400 text-xs min-h-[50px]"
          placeholder="Descripción del proyecto"
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="fecha-entrega"
          className="text-gray-700 uppercase font-bold text-xs"
        >
          Fecha de entrega
        </label>

        <input
          type="date"
          id="fecha-entrega"
          value={fechaEntrega}
          className="border w-full p-2 mt-2 rounded-md placeholder-gray-400 text-xs"
          onChange={(e) => setFechaEntrega(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="cliente"
          className="text-gray-700 uppercase font-bold text-xs"
        >
          Nombre del cliente
        </label>

        <input
          type="text"
          id="cliente"
          value={cliente}
          className="border w-full p-2 mt-2 rounded-md placeholder-gray-400 text-xs"
          placeholder="Nombre del cliente"
          onChange={(e) => setCliente(e.target.value)}
        />
      </div>
      <input
        type="submit"
        value={id ? "Editar proyecto" : "Crear proyecto"}
        className="bg-sky-600 p-3 text-[11px] text-center text-white rounded-md mt-2 uppercase w-full font-bold cursor-pointer hover:bg-sky-700 transition-colors"
      />
    </form>
  );
};

export default FormularioProyecto;
