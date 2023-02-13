const API_KEY = '0f9d46e1e7234bbd9d367d7e4cbd65ba'
const NewsApi = 'https://newsapi.org/v2/everything';

export const getListadoNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${NewsApi}?q=${criterioBusqueda}&apikey=${API_KEY}&page=${paginaActual}&pageSize=${10}&language=es`);
    const noticias = await respuesta.json();
    return noticias;
}