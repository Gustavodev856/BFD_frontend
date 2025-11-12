import { useState } from "react"

export default function CadastroLogin() {
  const [Login, setLogin] = useState(true)
  
  return(
    <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-4xl flex flex-col md:flex-row">

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            {Login ? "Acesse sua conta" : "Crie sua conta"}
          </h2>

          <form className="flex flex-col gap-4">
            {!Login && (
              <>
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="CPF"
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <select
                  className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Selecione o cargo</option>
                  <option value="medico">Médico</option>
                  <option value="enfermeiro">Enfermeiro</option>
                  <option value="recepcionista">Recepcionista</option>
                  <option value="administrador">Administrador</option>
                </select>
              </>
            )}

            <input
              type="email"
              placeholder="E-mail institucional"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              placeholder="Senha"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {!Login && (
              <input
                type="password"
                placeholder="Confirmar senha"
                className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            )}

            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg p-2 mt-2 hover:bg-blue-700 transition-all"
            >
              {Login ? "Entrar" : "Cadastrar"}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            {Login ? "Não tem conta?" : "Já tem conta?"}{" "}
            <button
              onClick={() => setLogin(!Login)}
              className="text-blue-600 font-semibold hover:underline"
            >
              {Login ? "Cadastre-se" : "Fazer login"}
            </button>
          </p>
        </div>


        <div className="hidden md:flex w-1/2 bg-blue-600 items-center justify-center text-white flex-col p-8">
          <h2 className="text-3xl font-bold mb-4">
            {Login ? "Bem-vindo de volta!" : "Junte-se à nossa equipe!"}
          </h2>
          <p className="text-center text-blue-100">
            {Login
              ? "Acesse o sistema da unidade de saúde com seu e-mail e senha."
              : "Crie sua conta e comece a usar o sistema da unidade de saúde."}
          </p>
        </div>
      </div>
    </div>
    </>
  )
}