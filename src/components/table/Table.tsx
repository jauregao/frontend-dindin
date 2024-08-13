import { Transacao } from "../../types/transaction"
import { formatDate } from "../../utils/formatDate"
import { formatValue } from "../../utils/formatValue";

interface TableProps {
  transactions: Transacao[];
}

export default function Table({ transactions }: TableProps){
  function handleEditIcon () {}
  function handleDeleteIcon () {}

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="data">Data <img src="/polygon.svg" alt="ordernar" /></th>
          <th>Dia da semana</th>
          <th>Descrição</th>
          <th>Categoria</th>
          <th>Valor</th>
          <th></th>
        </tr>
      </thead>
      <tbody>  
      {
        transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{formatDate(transaction.data).formattedDate}</td>
            <td>{formatDate(transaction.data).formattedWeekDay}</td>
            <td>{transaction.descricao}</td>
            <td>{transaction.categoria_nome}</td>
            <td>{formatValue(transaction.valor)}</td>
            <td className="icons">
              <img src="/editar.svg" alt="icone editar" onClick={ handleEditIcon }/>
              <img src="/remover.svg" alt="icone excluir" onClick={ handleDeleteIcon }/>
            </td>
          </tr>
        ))
      }
      </tbody>
    </table>
  )
}