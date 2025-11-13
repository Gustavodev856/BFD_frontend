import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard"
import Cadastro from "./components/Cadastro";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/Cadastro" element={<Cadastro/>} />
       {/* <Route path="/ConsultarUsuario" element={<ConsultarUsuario/>}></Route> */}
    </Routes>
  );
}

export default App;
