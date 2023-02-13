import './App.css';
import PaginaNoticia from './pages/PaginaNoticia';
import {BrowserRouter, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buscador from './components/Buscador/Buscador';


/*import {
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";*/
///import ErrorPage from './pages/error-page';

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <PaginaNoticia/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:'/search/:criterioBusqueda',
    element: <PaginaNoticia />
  },
]);*/

function App() {
  return (
    <div>
      <Routes>
          <Route path= "/" element={ <PaginaNoticia/> } />
          <Route path='/search/:onBuscar' element = {Buscador} />
      </Routes>
    </div>
  );
}

export default App;
