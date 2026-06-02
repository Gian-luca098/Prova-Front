<template>
  <div class="container">
    <h2 class="mb-4">📅 Agendamentos do Dia</h2>
  <h1>Site para  Agendamentos de barbearia</h1>
  <nav>
    <RouterLink to="/cadastro" class="btn btn-primary mt-3">Cadastrar Agendamento</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
<br>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      <div class="col" v-for="agendamento in agendamentos" :key="agendamento.id">
        <!-- Passa o agendamento (com clienteNome e servico) via prop -->
        <AgendamentoCard :agendamento="agendamento" />
        
        <StatusBadge :status="agendamento.status" />
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AgendamentoCard from '../components/AgendamentoCard.vue'
import type Agendamento from '../interfaces/Agendamento'
import { listarAgendamentos, criarAgendamentos } from '../services/agendamentoService'

// TODO [CRITÉRIO 3]:
// Crie uma variável reativa (ref) para armazenar a lista de agendamentos.

const agendamentos = ref<Agendamento[]>([])
// TODO [CRITÉRIO 3 e 8]:
// Use onMounted para chamar a função que busca os agendamentos da API
// assim que a tela for carregada.
async function buscarAgendamentos() {
  agendamentos.value = await listarAgendamentos()
}

onMounted(buscarAgendamentos)
</script>