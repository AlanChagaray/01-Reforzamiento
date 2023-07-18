import { useEffect , useState ,useRef} from "react";
import { reqRespApi } from "../api/reqRes";
import { ReqResListado , Usuario} from "../interfaces/reqRes";

export const useUsuarios = (inicial : number = 1) => {
    const [usuarios, setusuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(inicial);

    useEffect(() => {
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async () => {
        const resp = await reqRespApi.get<ReqResListado>('/users', {
            params: {
                page : paginaRef.current
            }
        })

        if(resp.data.data.length > 0) {
            setusuarios(resp.data.data);
        }else{
            paginaRef.current --;
            alert('No hay mas usuarios')
        }
        
    }

    const paginaAnterior =()=>{
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaSiguiente =()=>{
        if(paginaRef.current > 1){
            paginaRef.current --;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        paginaAnterior,
        paginaSiguiente,
    }
}
