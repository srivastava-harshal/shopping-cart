import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Store from "./pages/Store/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
