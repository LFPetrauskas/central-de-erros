import React from "react";
import ErrorTable from "../ErrorTable";

function Dashboard() {
  return (
    <div>
      <section>
        <select>
          <option>Produção</option>
        </select>
        <select>
          <option>Ordenar por</option>
        </select>
        <select>
          <option>Buscar por</option>
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
