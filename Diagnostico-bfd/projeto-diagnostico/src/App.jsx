import { Routes, Route } from "react-router-dom";
import CadastroLogin from "./components/CadastroLogin"; // ou ajuste o caminho se estiver em outra pasta

function App() {
  return (
    <Routes>
      <Route path="/" element={<CadastroLogin />} />
    </Routes>
  );
}

export default App;
