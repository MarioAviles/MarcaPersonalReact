// import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Pie from './componentes/Pie/Pie'
import Home from './paginas/Home/Home'
import Empresa from './paginas/Empresa/Empresa'
import CentroEducativo from './paginas/CentroEducativo/CentroEducativo'
import Alumno from './paginas/Alumno/Alumno'
import ListaFamiliaProfesionales from './componentes/ListaFamiliaProfesionales/ListaFamiliaProfesionales'
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import idioma from './mocks/mock-idiomas';
import IdiomaContext from './contextos/IdiomaContext';

function App() {

  const [idiomaPagina, setIdiomaPagina] =useState(idioma.es);

  function cambiarIdioma (idiomaElegido) {
    setIdiomaPagina(idioma[idiomaElegido])
  }

  return (
    <>
    <Cabecera cambiarIdioma={cambiarIdioma}/>

    <IdiomaContext.Provider value={idiomaPagina}>
    <Routes>
      <Route path="/" element={
        <div>
          <Home />
          <Pie />
        </div>
      }/>
      <Route path="/empresa" element={
        <div>
          <Empresa />
        </div>
      }/>
      <Route path="/centroeducativo" element={
        <div>
          <CentroEducativo />
        </div>
      }/>
      <Route path="/alumno" element={
        <div>
          <Alumno />
        </div>
      }/>
      <Route path="/empresa/proyectos" element={
        <div>
          <ListaFamiliaProfesionales /> //cambiar cuando haga pagina de empresa más extensa
        </div>
      }/>
    </Routes>
    </IdiomaContext.Provider>
    </>
  )
}

export default App
