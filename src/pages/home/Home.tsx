import Table from '../../components/table/Table'
import { useEffect, useState } from "react"
import api from "../../services/api"
import useAuth from "../../hooks/useAuth"
import { Transacao } from '../../types/transaction'
import TableResume from '../../components/table-resume/TableResume'

export default function HomePage() {
  const { handleGetToken } = useAuth()
  const [transactions, setTransactions] = useState<Transacao []>([])

  useEffect(() => {
    (async () => {
      try {
        const token = handleGetToken();

        const response = await api.get("/transacao", {
          headers: { Authorization: `Bearer ${token}` }
        });

        setTransactions(response.data);
      } catch (error) {
        console.error("Erro ao buscar transações:", error);
      }
    })();
  }, []);

  return (
    <div className="home">
      <div className="gradiente"></div>
      <div className="main-background">
        <div className="container dashboard">
          <div className='table-rows'>
            <Table transactions={transactions} />
          </div>
          <div className='table-resume'>
            <TableResume transactions={transactions}/>
          </div>
        </div>
      </div>
    </div>
  )
}