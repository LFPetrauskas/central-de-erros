import React from "react";
import ErrorTable from "../ErrorTable";

function Dashboard() {
  const [servidor, setServidor] = React.useState("prd");
  const [ordem, setOrdem] = React.useState("Ordenar por");
  const [busca, setBusca] = React.useState("Buscar por");
  return (
    <div>
      <section>
        <select value={servidor} onChange={(e) => setServidor(e.target.value)}>
          <option value="prd">Produção</option>
          <option value="hml">Homologação</option>
          <option value="dev">Desenvolvimento</option>
        </select>
        <select value={ordem} onChange={(e) => setOrdem(e.target.value)}>
          <option value="">Ordenar por</option>
          <option value="level">Level</option>
          <option value="eventos">Frequência</option>
        </select>
        <select value={busca} onChange={(e) => setBusca(e.target.value)}>
          <option value="">Buscar por</option>
          <option value="level">Level</option>
          <option value="descricao">Descrição</option>
          <option value="servidor">Origem</option>
        </select>
        <input></input>
      </section>
      <section>
        <button>Arquivar</button>
        <button>Apagar</button>
      </section>
      <ErrorTable />
    </div>
  );
}

export default Dashboard;
