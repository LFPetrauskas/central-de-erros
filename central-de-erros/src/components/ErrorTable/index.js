import React from "react";
import { useSelector } from "react-redux";

function ErrorTable() {
  const erros = useSelector(state => state.erros);
  return (
    <table>
      <thead>
        <th></th>
        <th>Level</th>
        <th>Log</th>
        <th>Eventos</th>
      </thead>
      <tbody>
        {erros.map((erro, index) => (
          <TableRow erro={erro} />
        ))}
      </tbody>
    </table>
  );
}

export default ErrorTable;

function TableRow({ erro }) {
  return (
    <tr>
      <td>
        <input type="checkbox"></input>
      </td>
      <td>{erro.level}</td>
      <td>{erro.descricao}</td>
      <td>{erro.eventos}</td>
    </tr>
  );
}
