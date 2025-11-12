import { Routes, Route } from "react-router-dom";
import CadastroLogin from "./components/CadastroLogin";
import Dashboard from "./components/Dashborad"

function App() {
  return (
    <Routes>
      <Route path="/" element={<CadastroLogin />} />
      <Route path="/login" element={<CadastroLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Outras páginas futuras */}
        <Route path="/imagens" element={<div>🧬 Página de Imagens</div>} />
        <Route path="/analise" element={<div>🤖 Página de Análise</div>} />
        <Route path="/laudo" element={<div>📄 Página de Laudo</div>} />
        <Route path="/log" element={<div>🧾 Página de Log</div>} />
    </Routes>
  );
}

export default App;
