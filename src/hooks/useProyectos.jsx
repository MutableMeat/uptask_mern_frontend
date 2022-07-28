import { useContext } from 'react'

// Context
import ProyectosContext from '../context/ProyectosProvider'


const useProyectos = () => {

    return useContext(ProyectosContext)

}

export default useProyectos