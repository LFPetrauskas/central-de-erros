import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Table, TableContainer } from "./style";

function ErrorTable() {
  const erros = useSelector(state => state.erros);
  const mostrarArquivados = useSelector(state => state.mostrarArquivados);
  const propriedadeOrdem = useSelector(state => state.propriedadeOrdem);
  const texto = useSelector(state => state.texto);
  const filtro = useSelector(state => state.filtro);
  const servidorFiltro = useSelector(state => state.servidorFiltro);
  const selected = useSelector(state => state.selected);

  const dispatch = useDispatch();

  const [listados, setListados] = React.useState(erros);
  const history = useHistory();

  React.useEffect(() => {
    let newErros = [...erros];

    if (filtro.trim() !== "" && texto.trim() !== "") {
      newErros = newErros.filter(
        erro =>
          erro[filtro].toUpperCase().includes(texto.toUpperCase()) === true
      );
    }

    if (texto.trim() === "") {
      newErros = [...erros];
    }

    newErros = newErros.filter(
      erro => erro.arquivado === false || mostrarArquivados
    );

    if (servidorFiltro.trim() !== "")
      newErros = newErros.filter(erro => erro.servidor === servidorFiltro);

    if (propriedadeOrdem.trim() !== "")
      newErros.sort((a, b) => {
        if (a[propriedadeOrdem] > b[propriedadeOrdem]) return 1;
        if (a[propriedadeOrdem] < b[propriedadeOrdem]) return -1;
        return 0;
      });

    setListados(newErros);
  }, [
    erros,
    propriedadeOrdem,
    texto,
    filtro,
    servidorFiltro,
    mostrarArquivados
  ]);

  function redirect(erro) {
    history.push("/erro", { erro });
  }

  function handleCheck(id) {
    dispatch({ type: "TOGGLE_CHECK", payload: id });
  }

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th className="select"></th>
            <th className="level">Level</th>
            <th className="detalhes">Log</th>
            <th className="eventos">Eventos</th>
          </tr>
        </thead>
        <tbody>
          {listados.map((erro, index) => (
            <TableRow
              key={index}
              erro={erro}
              redirect={redirect}
              index={index}
              handleCheck={handleCheck}
            />
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

export default ErrorTable;

function TableRow({ erro, redirect, handleCheck }) {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={erro.checked}
          onChange={e => handleCheck(erro.id)}
        ></input>
      </td>
      <td onClick={() => redirect(erro)} className={`level ${erro.level}`}>
        <span>{erro.level}</span>
      </td>
      <td onClick={() => redirect(erro)} className="detalhes">
        {erro.detalhes}
      </td>
      <td onClick={() => redirect(erro)} className="eventos">{erro.eventos}</td>
    </tr>
  );
}
