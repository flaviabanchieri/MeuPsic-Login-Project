export interface Agenda {
  id: number;
  clienteId: number;
  dataConsulta: Date;
  presente: boolean;
  hora: string;
  descricao: string;
  transparent?: boolean; // Adiciona a propriedade "transparent" opcional ao objeto;
  tag?: string;
  color?: string;
}
