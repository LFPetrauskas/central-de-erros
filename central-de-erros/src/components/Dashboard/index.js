import React from "react";
import ErrorTable from "../ErrorTable";
import { useDispatch } from "react-redux";

import {
  Select,
  SectionSelect,
  Input,
  Button,
  DivButton,
  DivMostrarArquivados,
  FormSearch,
  SubmitButton
} from "./style";

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

  function submitForm(event) {
    event.preventDefault();
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
      <SectionSelect>
        <Select onChange={e => handleChangeServidor(e.target.value)}>
          <option defaultValue value="">
            Todos
          </option>
          <option value="prd">Produção</option>
          <option value="hml">Homologação</option>
          <option value="dev">Desenvolvimento</option>
        </Select>
        <Select onChange={e => handleChangeOrdem(e.target.value)}>
          <option value="">Ordenar por</option>
          <option value="level">Level</option>
          <option value="eventos">Frequência</option>
        </Select>
        <Select onChange={e => setFiltro(e.target.value)}>
          <option defaultValue value="">
            Buscar por
          </option>
          <option value="level">Level</option>
          <option value="detalhes">Descrição</option>
          <option value="servidor">Origem</option>
        </Select>
        <FormSearch onSubmit={submitForm}>
          <Input
            type="text"
            value={texto}
            onChange={e => setTexto(e.target.value)}
            // onKeyPress={e => handleKeyPress(e)}
            placeholder="Digite o texto"
          ></Input>
          <SubmitButton type="submit">
            <i className="fas fa-search"></i>
          </SubmitButton>
        </FormSearch>
      </SectionSelect>
      <section>
        <DivButton>
          <Button onClick={arquivar}>Arquivar</Button>
          <Button onClick={apagar}>Apagar</Button>
        </DivButton>
        <DivMostrarArquivados>
          <input
            name="checkArquivados"
            type="checkbox"
            onChange={alternaExibicaoArquivados}
          />
          <label htmlFor="checkArquivados">Mostrar arquivados</label>
        </DivMostrarArquivados>
      </section>
      <ErrorTable />
    </div>
  );
}

export default Dashboard;
