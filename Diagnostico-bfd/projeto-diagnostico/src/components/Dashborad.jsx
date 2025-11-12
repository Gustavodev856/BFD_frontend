import { useEffectEvent, useState } from "react";
import { data, useNavigate } from "react-router-dom";

export default function dashboard() {
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState(null)
    const [instituicao, setInstitucional] = useState("")
    const [logo, setLogo] = useState("")
    const [endereco, setEndereco] = useState("")

    useEffectEvent(() => {
        const userData = localStorage.getItem("usuario")
        if(userData) {
            setUsuario(JSON.parse(userData))

            fetch("http://localhost:5000/instituicao")
            .then((res) => res.json())
            .then((data) => {
                setInstitucional(data.nome)
                setLogo(data.logo)
                setEndereco(data.endereco)
            })
            .catch(() => {
                setInstitucional("Hospital Universitário")
                setLogo("https://via.placeholder.com/60")
                setEndereco("Av. Central, 123 - Recife/PE")
            })
        } else {
            navigate("/login")
        }
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem("usuario")
        navigate("/login")
    }

    if(!usuario) return null


    return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {logo && <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />}
          <div>
            <h1 className="text-xl font-semibold text-gray-800">{instituicao}</h1>
            <p className="text-sm text-gray-500">{endereco}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">
            👨‍⚕️ {usuario.nome || "Usuário"}
          </span>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
          >
            Sair
          </button>
        </div>
      </header>

      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Bem-vindo, {usuario.nome ? `Dr. ${usuario.nome}` : "usuário"}!
        </h2>
      </div>

      <main className="flex flex-wrap justify-center gap-6 px-6">
        <Card
          titulo="Ver Imagens Histopatológicas"
          emoji="📷"
          onClick={() => navigate("/imagens")}
        />
        <Card
          titulo="Análise Automática"
          emoji="🤖"
          onClick={() => navigate("/analise")}
        />
        <Card
          titulo="Gerar Laudo"
          emoji="📄"
          onClick={() => navigate("/laudo")}
        />
        <Card
          titulo="Histórico / Log"
          emoji="🧾"
          onClick={() => navigate("/log")}
        />
      </main>
    </div>
  );
}


function Card({ titulo, emoji, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow-md hover:shadow-xl cursor-pointer rounded-2xl w-64 h-40 flex flex-col justify-center items-center transition-transform hover:scale-105"
    >
      <span className="text-4xl">{emoji}</span>
      <p className="mt-3 text-lg font-medium text-gray-700 text-center">
        {titulo}
      </p>
    </div>
  );
}