import Login from "./pages/Login/Login"
import Cadastro from "./pages/Login/Cadastro"
import Hoje from "./pages/Hoje/Hoje"
import Habitos from "./pages/Habitos/Habitos"
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/cadastro" element={<Cadastro/>} />  
          <Route path="/hoje" element={<Hoje/>} />
          <Route path="/habitos" element={<Habitos/>} />
          {/* <Route path="/historico" element={<Historico/>} /> */}
        </Routes>
      </BrowserRouter>
    
  );
}


