export class Cliente {
  id!: number;
  nome?: string;
  contato!: string;
  observacoes!: string;
  pacoteSemanal!: boolean;
  valorConsulta!: number;
  saldoDevedor!: number;
  telefone?: number;
  endereco!: Endereco;
  inicial!: string;
  cor!: string;
}

export interface Endereco {
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
}
