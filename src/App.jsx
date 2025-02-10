// import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Pie from './componentes/Pie/Pie'
import Home from './paginas/Home/Home'
import Empresa from './paginas/Empresa/Empresa'
import CentroEducativo from './paginas/CentroEducativo/CentroEducativo'
import Alumno from './paginas/Alumno/Alumno'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Cabecera />
    <Routes>
      <Route path="/" element={
        <div>
          <Home />
          <Pie />
        </div>
      }/>
      <Route path="/empresa" element={
        <div>
          <Cabecera />
          <Empresa />
        </div>
      }/>
      <Route path="/centroeducativo" element={
        <div>
          <Cabecera />
          <CentroEducativo />
        </div>
      }/>
      <Route path="/alumno" element={
        <div>
          <Cabecera />
          <Alumno />
        </div>
      }/>
    </Routes>
    </>
  )
}

export default App
