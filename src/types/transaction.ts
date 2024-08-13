export type Transaction = {
  id: string;
  type: EType;
  description: string;
  value: number;
  date: string;
  user_id: number;
  category_id: number;
  category_description: string;
};

export enum EType {
  entrada = "entrada",
  saida = "saida"
};

export type TransactionDto = {
  id: string;
  type: EType;
  description: string;
  value: number;
  date: string;
  user_id: number;
  category_id: number;
  category_description: string;
};
