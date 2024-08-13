import { useEffect, useState } from "react";
import { ETipo, Transacao } from "../../types/transaction";
import { formatValue } from "../../utils/formatValue";

interface TableProps {
  transactions: Transacao[];
}

export default function TableResume ({ transactions }: TableProps) {
  const [entradas, setEntradas] = useState<number>(0);
  const [saidas, setSaidas] = useState<number>(0);
  const [saldo, setSaldo] = useState<number>(0);

  useEffect(() => {
    let totalEntradas = 0;
    let totalSaidas = 0;

    transactions.forEach((transaction) => {
      if (transaction.tipo === ETipo.entrada) {
        totalEntradas += transaction.valor;
      }
      if (transaction.tipo === ETipo.saida) {
        totalSaidas += transaction.valor;
      }
    });

    setEntradas(totalEntradas);
    setSaidas(totalSaidas);
    setSaldo(totalEntradas - totalSaidas);
  }, [transactions]);

  return (
    <section>
      <div className="resume-bg">
      <h2>Resumo</h2>
      <div>
        <div className="rows">
            <p className="tipo">Entradas</p>
            <p className="valor" style={{ color: "#6460FB" }}>{formatValue(entradas)}</p>
          </div>
          <div className="rows">
            <p className="tipo">Saídas</p>
            <p className="valor" style={{ color: "#FA8C10" }}>{formatValue(saidas)}</p>
        </div>
        </div>
        <div className="rows total-row">
          <p className="saldo">Saldo</p>
          <p className="total" style={{ color: "#3A9FF1" }}>{formatValue(saldo)}</p>
        </div>
      </div>
      <button className="add">Adicionar Registro</button>
    </section>
  )
}