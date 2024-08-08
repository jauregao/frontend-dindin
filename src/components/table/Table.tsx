import { useEffect, useState } from "react"
import api from "../../services/api"
import useAuth from "../../hooks/useAuth"
import { Transacao } from "../../types/transaction"
import { formatDate } from "../../utils/formatDate"

export default function Table(){
  const { handleGetToken } = useAuth()
  const [transactions, setTransactions] = useState<Transacao []>([])

  function handleEditIcon () {}
  function handleDeleteIcon () {}

  useEffect(() => {
    (async () => {
      try {
        const token = handleGetToken();

        const responseTran = await api.get("/transacao", {
          headers: { Authorization: `Bearer ${token}` }
        });

        setTransactions(responseTran.data);
      } catch (error) {
        console.error("Erro ao buscar transações:", error);
      }
    })();
  }, []);

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
            <td>{transaction.valor}</td>
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