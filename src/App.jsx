import Header from "./components/Header";
import Home from "./pages/Home"
import Cart from "./components/Cart"

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/cart" element={ <Cart/> }/>
      </Routes>
    
    </BrowserRouter>
  )
};

export default App;
