import { Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import Buscador from "../components/Buscador/Buscador"
import Header from "../components/Header/Header"
import ListaNoticias from "../components/ListaNoticias/ListaNoticias"
import Loading from "../components/Loading/Loading"
import Paginador from "../components/Paginador/Paginador"
import { getListadoNoticias } from "../services/noticias"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Footer from "../components/Footer/Footer"
import './PaginaNoticia.css'
import { useLocation, useParams, useSearchParams } from "react-router-dom"

const PaginaNoticia = () =>{
    const [noticias, setNoticias]= useState();
    const [isLoading, setIsLoading]=useState(false);
    const [cantidadPaginas, setCantidadPaginas]= useState(1);
    const [criterioBusqueda, setCriterioBusqueda]= useState('')
    const [resultadoTotal, setResultadoTotal]= useState()
    const [searchParams, setSearchParams] = useSearchParams()


    const onBuscar = async (criterioBusqueda, pagina=1) =>{
        setSearchParams({query: criterioBusqueda, pagina}, searchParams);
        setIsLoading(true)
        const {articles: noti, totalResults} = await getListadoNoticias(criterioBusqueda, pagina);
        setNoticias(noti);
        setIsLoading(false);
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10))
        setCriterioBusqueda(criterioBusqueda)
        setResultadoTotal(totalResults)
    };

    
    const onCambioPagina = (pagina) => {
        onBuscar(criterioBusqueda, pagina)
    }
    

    return(<div>
        <Header/>
        <Container maxWidth= 'md' sx={{minWidth: '350px'}}>
            <Buscador sx={{ minWidth: '400px' }} onBuscar= {onBuscar}/>
            { isLoading && <Loading />}
            { noticias && noticias.length > 0 && <Typography sx={{ml: '26px', mb: '10px'}}>Esta viendon 10 noticias de {resultadoTotal}</Typography>}
            { noticias && noticias.length === 0 && criterioBusqueda && <h3 className="sinresultado">No hay resultado para su busqueda</h3>}
            { noticias && <ListaNoticias noticias={noticias} />}
            {noticias && noticias.length > 0 && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina}/>}
        </Container>
        <Footer/>
        </div>
    )
}


export default PaginaNoticia