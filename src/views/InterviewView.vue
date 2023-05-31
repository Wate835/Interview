<template>
  <div class="container">
    <BreadCrumbs link="Interview" />
    <div class="req-wrapper" v-if="!this.user">
      <form class="reg-form">
        <label class="label" for="fullname">Full Name</label>
        <input class="input" v-model="name" id="fullname" type="text">
        <label class="label" for="email">E-mail</label>
        <input class="input" v-model="email" id="email" type="email">
        <label class="label" for="phone">Phone</label>
        <input class="input" v-model="phone" id="phone" type="number">
        <div class="links">
          <router-link class="btn" style="margin-right: 8px;" :to="{ name: 'home' }">Вернуться к списку</router-link>
          <a @click="initUser" href="#" class="btn">
            Начать опрос
          </a>
        </div>
      </form>
    </div>
    <div class="inter" v-else>
      <h2>Вопросы:</h2>
      <div class="progress">
        <div v-for="item in user.questions" :key="item.id" @click="this.current = item.id" class="que">
          <div class="line" :class="{ blue: this.current == item.id, gray: item.answer }"></div>
          <svg v-if="this.current == item.id" width="16" height="16" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.19995 0.25C3.91973 0.25 0.449951 3.71978 0.449951 8C0.449951 12.2802 3.91973 15.75 8.19995 15.75C12.4802 15.75 15.95 12.2802 15.95 8C15.95 3.71978 12.4802 0.25 8.19995 0.25ZM10.7 8C10.7 9.3785 9.57845 10.5 8.19995 10.5C6.82145 10.5 5.69995 9.3785 5.69995 8C5.69995 6.6215 6.82145 5.5 8.19995 5.5C9.57845 5.5 10.7 6.6215 10.7 8Z"
              fill="#5469D4" />
          </svg>
          <svg v-else-if="item.answer" width="16" height="16" viewBox="0 0 16 16" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71978 15.75 0.25 12.2802 0.25 8C0.25 3.71978 3.71978 0.25 8 0.25C12.2802 0.25 15.75 3.71978 15.75 8ZM7.10356 12.1036L12.8536 6.35356C13.0488 6.15831 13.0488 5.84172 12.8536 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.75 9.62869L4.56066 7.43934C4.36541 7.24409 4.04881 7.24409 3.85353 7.43934L3.14644 8.14644C2.95119 8.34169 2.95119 8.65828 3.14644 8.85353L6.39644 12.1035C6.59172 12.2988 6.90828 12.2988 7.10356 12.1036Z"
              fill="#697386" />
          </svg>
          <svg v-else width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.3999 0.25C4.11865 0.25 0.649902 3.71875 0.649902 8C0.649902 12.2812 4.11865 15.75 8.3999 15.75C12.6812 15.75 16.1499 12.2812 16.1499 8C16.1499 3.71875 12.6812 0.25 8.3999 0.25ZM8.3999 14.25C4.94678 14.25 2.1499 11.4531 2.1499 8C2.1499 4.54688 4.94678 1.75 8.3999 1.75C11.853 1.75 14.6499 4.54688 14.6499 8C14.6499 11.4531 11.853 14.25 8.3999 14.25Z"
              fill="#8792A2" />
          </svg>
          <span class="text"> Вопрос {{ item.id }}</span>
        </div>
      </div>
      <div class="int-wrapper">
        <span class="int-text"> Вопрос {{ current }}:</span>
        <label class="que-label" for="question">{{ user.questions[current - 1].placeholder + user.questions[current - 1].type  }}
          <input id="question" class="que-input" v-model="user.questions[current - 1].answer" :type="user.questions[current - 1].type">
        </label>
        <a style="margin-right: 31px;" href="#" @click.prevent="changeCurr(-1)" class="btn">Вернуться назад</a>
        <a href="#" @click.prevent="changeCurr(1)" v-if="this.current < this.user.questions.length"
          class="btn">Следующий</a>
        <router-link :to="{ name: 'home' }" href="#" @click.prevent="pushUser(user)" v-else class="btn">Закончить опрос</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
export default {
  components: { BreadCrumbs },
  data() {
    return {
      questions: JSON.parse(JSON.stringify(this.$store.state.questionsData)),
      user: null,
      name: null,
      email: null,
      phone: null,
      current: 1,
    }
  },
  methods: {
    ...mapMutations(['pushUserToData']),
    initUser() {
      return this.user = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        questions: this.questions
      }
    },
    changeCurr(dir) {
      if (this.current + dir < 1) {
        return
      } else if (this.current + dir > this.user.questions.length) {
        return
      }
      this.current += dir
    },
    pushUser(user) {
      this.pushUserToData(user);
      this.user = null
    }
  }
}
</script>

<style scoped>
</style>
