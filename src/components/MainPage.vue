<template>
  <div class="container">
    <BreadCrumbs link="List of respondents" />
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
      <h2 v-else-if="isLoadingFailed">
        Возникла ошибка при загрузке пользователей. Попробуйте позже.
      </h2>
      <h2 v-else-if="!users.length">
        Пока что список пуст. Попробуйте позже!
      </h2>
      <div v-for="user in users" :key="user.id" class="table-row">
        <div class="table-data">{{ user.name }}</div>
        <div class="table-data">{{ user.email }}</div>
        <div class="table-data">{{ user.phone }}</div>
        <div class="table-data" v-if="user.questions">{{totalResult(user)}}/ {{ user.questions.length }}</div>
        <div class="table-data" v-else>{{ rndNum(5) }}/5</div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
export default {
  components: { BreadCrumbs },
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
      console.log(user.questions.reduce((accumulator, currentValue) =>  currentValue.answer ? accumulator + 1 : accumulator, 0));
      return user.questions.reduce((accumulator, currentValue) =>  currentValue.answer ? accumulator + 1 : accumulator, 0)
    },
    rndNum(max) {
      return Math.floor(Math.random() * max)
    },
  },
  // created() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((json) => this.users = json);
  // }
}
</script>

<style scoped></style>
