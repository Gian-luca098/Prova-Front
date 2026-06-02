import axios from 'axios'
import type Agendamento from '../interfaces/Agendamento'

// URL base da API — não altere este valor
const API_URL = 'http://localhost:3000'

const http = axios.create({
  baseURL: API_URL
})
// Retorna todos os agendamentos
export async function buscarTodosAgendamentos() {
  const response = await http.get('/agendamentos')
  return response.data
}

// Retorna um agendamento pelo id
export async function BuscarAgendamentoById(id:number) {
  const response = await http.get(`/agendamentos/${id}`)
  return response.data
}


export async function criarAgendamentos(agendamento: Omit<Agendamento, 'id'>) {
  await http.post<Agendamento>('/agendamentos', agendamento)
}

// TODO [CRITÉRIO 8]:
// Implemente a função "listarAgendamentos".
// Ela deve fazer uma requisição GET à API (/agendamentos) e retornar a lista de agendamentos.
export async function listarAgendamentos() {
  const response = await http.get('/agendamentos')
  return response.data
}

