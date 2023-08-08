export class Cliente {
  id: number | undefined;
  nome?: string;
  contato: string | undefined;
  observacoes: string | undefined;
  pacoteSemanal: boolean | undefined;
  valorConsulta: number | undefined;
  saldoDevedor: number | undefined;
  endereco: Endereco | undefined;
  inicial: string | undefined;
}

export interface Endereco {
  cep: string | undefined;
  logradouro: string | undefined;
  numero: string | undefined;
  bairro: string | undefined;
  cidade: string | undefined;
  estado: string | undefined;
}
