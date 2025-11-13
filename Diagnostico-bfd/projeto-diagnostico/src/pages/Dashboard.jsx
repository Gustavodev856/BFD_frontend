import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Navegação lateral */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/Cadastro"
                className="block text-blue-600 hover:underline"
              >
                Cadastrar Novo Usuário
              </Link>
            </li>
            <li>
              <Link
                to="/Consultar"
                className="block text-blue-600 hover:underline"
              >
                Consultar Usuário
              </Link>
            </li>
            <li>
              <Link
                to="/Auditoria"
                className="block text-blue-600 hover:underline"
              >
                Auditoria
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Visão Geral</h1>

        {/* Cards de estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-gray-500">Total de Usuários</p>
            <p className="text-2xl font-bold">120</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-gray-500">Usuários Ativos</p>
            <p className="text-2xl font-bold">95</p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <p className="text-gray-500">Novos Cadastros</p>
            <p className="text-2xl font-bold">8</p>
          </div>
        </div>

        {/* Tabela de usuários (exemplo) */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Últimos Usuários</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2">Nome</th>
                <th className="px-4 py-2">CPF</th>
                <th className="px-4 py-2">Cargo</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">João Silva</td>
                <td className="px-4 py-2">123.456.789-00</td>
                <td className="px-4 py-2">Médico</td>
                <td className="px-4 py-2">Ativo</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">Maria Souza</td>
                <td className="px-4 py-2">987.654.321-00</td>
                <td className="px-4 py-2">Administrador</td>
                <td className="px-4 py-2">Ativo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
