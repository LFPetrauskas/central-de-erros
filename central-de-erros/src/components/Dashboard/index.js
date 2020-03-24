import React from "react";
import ErrorTable from "../ErrorTable";
import { useDispatch } from "react-redux";

function Dashboard() {
  const [texto, setTexto] = React.useState("");
  const [filtro, setFiltro] = React.useState("");
  const dispatch = useDispatch();

  function handleChangeServidor(value) {
    dispatch({ type: "FILTER_BY_SERVER", payload: value });
  }

  function handleChangeOrdem(value) {
    dispatch({ type: "ORDER_BY", payload: value });
  }

  function handleChangeBusca(value, type) {
    if (type === "select") {
      setFiltro(value);
    } else {
      setTexto(value);
    }
    dispatch({
      type: "BUSCA_POR",
      payload: { filtro, texto }
    });
  }

  function alternaExibicaoArquivados() {
    dispatch({ type: "ALTERNA_EXIBICAO_ARQUIVADOS" });
  }

  function arquivar() {
    dispatch({ type: "ARCHIVE_ITEMS" });
    dispatch({ type: "SET_SELECTED", payload: {} });
  }

  function apagar() {
    dispatch({ type: "DELETE_ITEMS" });
    dispatch({ type: "SET_SELECTED", payload: {} });
  }

  return (
    <div>
      <section>
        <select onChange={e => handleChangeServidor(e.target.value)}>
          <option defaultValue value="">
            Todos
          </option>
          <option value="prd">Produção</option>
          <option value="hml">Homologação</option>
          <option value="dev">Desenvolvimento</option>
        </select>
        <select onChange={e => handleChangeOrdem(e.target.value)}>
          <option value="">Ordenar por</option>
          <option value="level">Level</option>
          <option value="eventos">Frequência</option>
        </select>
        <select onChange={e => handleChangeBusca(e.target.value, "select")}>
          <option defaultValue value="">
            Buscar por
          </option>
          <option value="level">Level</option>
          <option value="descricao">Descrição</option>
          <option value="servidor">Origem</option>
        </select>
        <input
          type="text"
          onChange={e => handleChangeBusca(e.target.value, "input")}
        ></input>
      </section>
      <section>
        <button onClick={arquivar}>Arquivar</button>
        <button onClick={apagar}>Apagar</button>
        <input type="checkbox" onChange={alternaExibicaoArquivados} /> Mostrar
        arquivados
      </section>
      <ErrorTable />
    </div>
  );
}

export default Dashboard;
