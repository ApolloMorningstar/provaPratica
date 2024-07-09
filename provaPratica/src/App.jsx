import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Players from './Componentes/Players'

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/players/:clubID' element={<Players/>}/>
      </Routes>
    </Router>
  )
}