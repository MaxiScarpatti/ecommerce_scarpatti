import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/NavBar";
import "./estilos.scss";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./context/cartContext";
import Cart from "./components/Cart";

const App = () => {
  return (
    
      <CustomProvider>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/planta/:id" element={<ItemDetailContainer />} />
            <Route
              path="/plantas/categoria/:id"
              element={<ItemListContainer />}
            />
            {/* <Route path="/contacto" element={<Contacto/>}/> */}
            <Route path="/Cart" element={<Cart/>}/> 
          </Routes>
        </BrowserRouter>
      </CustomProvider>
    
  );
};

export default App;
