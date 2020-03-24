import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

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
    newErros = newErros.filter(erro => erro.arquivado === false || mostrarArquivados);
    if (filtro.trim() !== "" && texto.trim() !== "") {
      newErros = newErros.filter(erro => erro[filtro].toUpperCase().search(texto.toUpperCase()) > 0 );
    }

    if (servidorFiltro.trim() !== "")
      newErros = newErros.filter(erro => erro.servidor === servidorFiltro);

    if (propriedadeOrdem.trim() !== "")
      newErros.sort((a, b) => {
        if (a[propriedadeOrdem] > b[propriedadeOrdem]) return 1;
        if (a[propriedadeOrdem] < b[propriedadeOrdem]) return -1;
        return 0;
      });

    setListados(newErros);
  }, [erros, propriedadeOrdem, texto, filtro, servidorFiltro, mostrarArquivados]);

  function redirect(erro) {
    history.push("/erro", { erro });
  }

  function handleCheck(value, index) {
    const source = {...selected};
    if (value) {
      source[index.toString()] = true;
    } else {
      delete source[index.toString()];
    }
    dispatch({type: "SET_SELECTED", payload: {...source}});
  }

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Level</th>
          <th>Log</th>
          <th>Eventos</th>
        </tr>
      </thead>
      <tbody>
        {listados.map((erro, index) => (
          <TableRow key={index} erro={erro} redirect={redirect} index={index} handleCheck={handleCheck} />
        ))}
      </tbody>
    </table>
  );
}

export default ErrorTable;

function TableRow({ erro, redirect, index, handleCheck }) {
  return (
    <tr>
      <td>
        <input type="checkbox" onChange={e => handleCheck(e.target.checked, index)}></input>
      </td>
      <td onClick={() => redirect(erro)}>{erro.level}</td>
      <td onClick={() => redirect(erro)}>{erro.detalhes}</td>
      <td onClick={() => redirect(erro)}>{erro.eventos}</td>
    </tr>
  );
}
