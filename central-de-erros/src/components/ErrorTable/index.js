import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function ErrorTable() {
  const erros = useSelector(state => state.erros);
  const history = useHistory();

  function redirect(erro) {
    history.push("/erro", {erro});
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
        {erros.map((erro, index) => (
          <TableRow key={index} erro={erro} redirect={redirect} />
        ))}
      </tbody>
    </table>
  );
}

export default ErrorTable;

function TableRow({ erro, redirect }) {
  return (
    <tr onClick={() => redirect(erro)}>
      <td>
        <input type="checkbox"></input>
      </td>
      <td>{erro.level}</td>
      <td>{erro.detalhes}</td>
      <td>{erro.eventos}</td>
    </tr>
  );
}
