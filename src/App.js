import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/NavBar"
import './estilos.scss'
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"



const App = () => {
    return (
    <>
    <BrowserRouter>
    <Header/>
    <Navbar/>
    <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/planta/:id" element={<ItemDetailContainer/>}/>
        <Route path="/plantas/categoria/:id" element={<ItemListContainer/>}/>
        {/* <Route path="/contacto" element={<Contacto/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
    )
}

export default App