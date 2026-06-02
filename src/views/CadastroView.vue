<template>
    <!-- TODO [CRITÉRIO 11 e 12]:
      Monte o formulário de cadastro com os campos:
        - clienteNome (text)
        - servico (text)
        - data (date)
        - hora (time)
        - barbeiro (text)
      Use v-model em cada campo para fazer o binding com os dados reativos.
      O botão de envio deve chamar a função "cadastrarAgendamento"
      https://getbootstrap.com/docs/5.3/forms/overview/#overview
      https://vuejs.org/guide/essentials/forms.html#basic-usage
    -->
  <div class="container ">
    <h2 class="mb-4">Cadastrar Agendamento</h2>
    <form>
  <div class="mb-3">
    <label for="clienteNome" class="form-label">Nome do Cliente</label>
    <input type="text" class="form-control" id="clienteNome" v-model="form.clienteNome" required>
  </div>
  <div class="mb-3">
    <label for="servico" class="form-label">Serviço</label>
    <input type="text" class="form-control" id="servico" v-model="form.servico" required>
  </div>
  <div class="mb-3">
    <label for="data" class="form-label">Data</label>
    <input type="date" class="form-control" id="data" v-model="form.data" required>
  </div>
  <div class="mb-3">
    <label for="hora" class="form-label">Hora</label>
    <input type="time" class="form-control" id="hora" v-model="form.hora" required>
  </div>
  <div class="mb-3">
    <label for="barbeiro" class="form-label">Barbeiro</label>
    <input type="text" class="form-control" id="barbeiro" v-model="form.barbeiro" required>
  </div>
  <div class="mb-3">
      <label for="disabledSelect" class="form-label">Status</label>
      <select id="disabledSelect" class="form-select" v-model="form.status">
        <option value="confirmado">Confirmado</option>
        <option value="pendente">Pendente</option>
        <option value="cancelado">Cancelado</option>
      </select>
      </div>

  <button type="submit" class="btn btn-primary" @click.prevent="salvar">Cadastrar</button>
</form>
<router-link to="/" class="btn btn-secondary mt-3">Voltar</router-link>
  </div>

    
</template>

<script setup lang="ts">
import { ref,onUnmounted } from 'vue'
import type Agendamento from '../interfaces/Agendamento'
import { criarAgendamentos } from '../services/agendamentoService'

// Importar criarAgendamento do agendamentoService
// TODO [CRITÉRIO 3 e 11]:
// Crie um objeto reativo (ref) com os campos do formulário de cadastro
const form = ref({} as Agendamento)


// TODO [CRITÉRIO 10]:
// Implemente a função "cadastrarAgendamento".
// Ela deve:
// 1. Chamar criarAgendamento() passando os dados do formulário
// 2. Adicionar o agendamento retornado pela API à lista local
// 3. Limpar os campos do formulário após o envio

// 4. Redirecionar para a lista de agendamentos

async function salvar(): Promise<void> {
  try {
    const novoAgendamento = await criarAgendamentos(form.value)
    // Limpa o formulário
    form.value = {} as Agendamento


  // Redireciona para a listagem após salvar com sucesso
  } catch (error) {
    console.error('Erro ao criar agendamento:', error)
    // Aqui você pode adicionar uma mensagem de erro para o usuário, se desejar
  }
}

  

</script>