import { Pagination } from "@mui/material"



const Paginador = ({cantidadPaginas, onChange}) =>{
    
    const cambiaPagina = (_evento, pagina)=>{
        onChange(pagina)
    }
    
    return(
        <Pagination 
        count={cantidadPaginas} shape="rounded" 
        sx={{ mt: 6, mb: '80px', display: 'flex', justifyContent: 'center' }}
        onChange={cambiaPagina}
        />
    )
}

export default Paginador