import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"
import Navbar from "./components/NavBar"
import './estilos.scss'
import ItemDetailContainer from "./components/ItemDetailContainer"



const App = () => {
    return (
    <>
    <Header/>
    <Navbar/>
    <ItemListContainer greeting nombre="Juan"/>
    <ItemDetailContainer/>
    </>
    )
}

export default App