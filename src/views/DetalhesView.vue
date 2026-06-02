<template>
  <div class="container">

    <!-- TODO [CRITÉRIO 4]:
      Use v-if para exibir as informações do agendamento apenas quando ele
      tiver sido carregado (ou seja, quando a variável não for null).
      Exiba todos os campos: clienteNome, servico, data, hora, barbeiro e status.
      Adicione um botão "Voltar" que leva de volta para a rota '/'.
    -->
    <router-link to="/" class="btn btn-secondary mb-3">Voltar</router-link>
    <div v-if="agendamento" class="card">
      <div class="card-body">
        <h5 class="card-title">{{ agendamento.clienteNome }} - {{ agendamento.servico }}</h5>
        <p class="card-text">
          <strong>Data:</strong> {{ agendamento.data }}<br>
          <strong>Hora:</strong> {{ agendamento.hora }}<br>
          <strong>Barbeiro:</strong> {{ agendamento.barbeiro }}<br>
          <strong>Status:</strong> {{ agendamento.status }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type Agendamento from '../interfaces/Agendamento'
import { BuscarAgendamentoById } from '../services/agendamentoService'

const route = useRoute()
const router = useRouter()

// TODO [CRITÉRIO 3]:
// Crie uma variável reativa (ref) para armazenar o agendamento carregado.
// O tipo deve ser "Agendamento"
const agendamento = ref<Agendamento | null>(null)
// TODO [CRITÉRIO 3, 7 e 9]:
// Use onMounted para buscar o agendamento pelo ID da rota.
// O ID está disponível em: route.params.id
// Lembre-se de converter o ID para number (as number) antes de usar.
async function buscarAgendamento() {
  const id = Number(route.params.id)
  agendamento.value = await BuscarAgendamentoById(id)
}

onMounted(buscarAgendamento)
</script>