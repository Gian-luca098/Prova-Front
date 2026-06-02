<template>
 
 <div class="card shadow-sm h-100">
    <div class="card-body d-flex flex-column">

      <div class="d-flex justify-content-between align-items-start mb-2">
        
        <h5 class="card-title mb-0">
          {{ agendamento.clienteNome }} - {{ agendamento.servico }} 
        </h5>
        <span if="agendamento.status == 'confirmado'" class="badge bg-success" v-show="agendamento.status == 'confirmado'">{{ agendamento.status }}</span>
         <span else if="agendamento.status == 'pendente'" class="badge bg-warning text-dark" v-show="agendamento.status == 'pendente'">{{ agendamento.status }}</span>
          <span else class="badge bg-secondary" v-show="agendamento.status == 'cancelado'">{{ agendamento.status }}</span>
        <!-- StatusBadge recebe o status via prop e exibe o badge colorido -->
        <StatusBadge :status="agendamento.status" />
      </div>

      <!-- Descrição do serviço -->
      <p class="card-text text-muted flex-grow-1">
        {{ agendamento.barbeiro }} - {{ agendamento.data }} às {{ agendamento.hora }}
      </p>


      <!-- RouterLink navega para a página de detalhes da ordem -->
      <RouterLink
        :to="`/agendamentos/${props.agendamento.id}`"
        class="btn btn-outline-dark btn-sm mt-auto"
      >
        Ver detalhes
      </RouterLink>

    </div>
  </div>   


</template>

<script setup lang="ts">
import type Agendamento from '../interfaces/Agendamento'
import { useRouter } from 'vue-router'


// TODO [CRITÉRIO 5]:
// Declare a prop "agendamento" do tipo Agendamento.
// Ela será passada pelo componente pai (HomeView) para este componente.

const router = useRouter()

const props = defineProps<{
  agendamento: Agendamento
}>()

// TODO [CRITÉRIO 6 e 7]:
// Implemente a função "verDetalhes" que navega para a rota /agendamento/:id
// usando o id do agendamento recebido via prop.
function verDetalhes() {
  router.push(`/agendamentos/${props.agendamento.id}`)
}
function formatarData(data: string): string {
  if (!data) return ''
  const dataPartes = data.split('-')
  return `${dataPartes[2]}/${dataPartes[1]}/${dataPartes[0]}`
}
</script>