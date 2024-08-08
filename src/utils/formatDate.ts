import { format } from 'date-fns'
import { ptBR } from "date-fns/locale/pt-BR"

export function formatDate(date: string) {
  const formattedDate = format(date, 'P', { locale: ptBR });
  const weekDay = format(date, 'EEEE', { locale: ptBR });
  const formattedWeekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1);
  return {
    formattedDate,
    formattedWeekDay
  }
}