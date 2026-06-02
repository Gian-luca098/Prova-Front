
export default interface Agendamento {
  id: number;
  clienteNome: string;
  servico: string;
  data: string;
  hora: string;
  barbeiro: string;
  status: 'confirmado' | 'pendente' | 'cancelado';
}
