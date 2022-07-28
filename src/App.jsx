import { BrowserRouter, Routes, Route } from "react-router-dom";

//Component
import AuthLayout from "./layouts/AuthLayout";
import RutaProtegida from "./layouts/RutaProtegida";

//Usuarios
import Login from "./pages/usuario/Login";
import Registrar from "./pages/usuario/Registrar";
import ConfirmarCuenta from "./pages/usuario/ConfirmarCuenta";
import NuevoPassword from "./pages/usuario/NuevoPassword";
import OlvidePassword from "./pages/usuario/OlvidePassword";

//Proyectos
import Proyectos from "./pages/proyecto/Proyectos";
import NuevoProyecto from "./pages/proyecto/NuevoProyecto";
import Proyecto from "./pages/proyecto/Proyecto";
import EditarProyecto from "./pages/proyecto/EditarProyecto";
import NuevoColaborador from "./pages/proyecto/NuevoColaborador";

//Context
import { AuthProvider } from "./context/AuthProvider";
import { ProyectosProvider } from "./context/ProyectosProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProyectosProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path="/registrar" element={<Registrar />} />
              <Route path="olvide-password" element={<OlvidePassword />} />
              <Route
                path="olvide-password/:token"
                element={<NuevoPassword />}
              />
              <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>
            <Route path="/proyectos" element={<RutaProtegida />}>
              <Route index element={<Proyectos />} />
              <Route path="crear-proyecto" element={<NuevoProyecto />} />
              <Route
                path="nuevo-colaborador/:id"
                element={<NuevoColaborador />}
              />
              <Route path=":id" element={<Proyecto />} />
              <Route path="editar/:id" element={<EditarProyecto />} />
            </Route>
          </Routes>
        </ProyectosProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
