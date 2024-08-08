export type Transacao = {
  id: number;
  tipo: ETipo;
  descricao: string;
  valor: number;
  data: string;
  usuario_id: number;
  categoria_id: number;
  categoria_nome: string;
};

enum ETipo {
  entrada = "entrada",
  saida = "saida"
}