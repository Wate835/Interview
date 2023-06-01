<template>
  <div class="wrapper">
    <div class="table-head table-row">
      <div class="">Full Name</div>
      <div class="">E-mail</div>
      <div class="">Phone</div>
      <div class="">Result</div>
    </div>
    <div class="loader-wrapper" v-if="isLoading">
      <base-loader></base-loader>
    </div>
    <h2 class="error" v-else-if="isLoadingFailed">
      Возникла ошибка при загрузке пользователей. Обратитесь в поддержку или попробуйте позже.
    </h2>
    <h2 class="error" v-else-if="!users.length">
      Пока что список пуст. Пройдите опрос!
    </h2>
    <div v-for="user in users" :key="user.id" class="table-row">
      <div class="table-data">{{ user.name }}</div>
      <div class="table-data">{{ user.email }}</div>
      <div class="table-data">{{ user.phone }}</div>
      <div class="table-data" v-if="user.questions">{{ totalResult(user) }}/ {{ user.questions.length }}</div>
    </div>
  </div>
</template>

<script>
import counter from '@/helpers/counter'

export default {
  mixins: [counter],
  computed: {
    users() {
      return this.$store.state.usersData
    },
    isLoading() {
      return this.$store.state.isLoading
    },
    isLoadingFailed() {
      return this.$store.state.isLoadingFailed
    },
  },
  methods: {
    totalResult(user) {
      return user.questions.reduce((accumulator, currentValue) => this.isDone(currentValue) ? accumulator + 1: accumulator, 0)
    }
  },
}
</script>