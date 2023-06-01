<template>
  <div class="req-wrapper">
    <form class="reg-form" @submit.prevent="initUser">
      <div class="reg-field">
        <label class="label" for="fullname">Full Name</label>
        <input class="input" v-model="name" id="fullname" type="text">
        <span class="error-msg" v-if="errors.name">{{ errors.name }}</span>
      </div>
      <div class="reg-field">
        <label class="label" for="email">E-mail</label>
        <input class="input" v-model="email" id="email" type="email">
        <span class="error-msg" v-if="errors.email">{{ errors.email }}</span>
      </div>
      <div class="reg-field">
        <label class="label" for="phone">Phone</label>
        <input class="input" v-model="phone" id="phone" type="number">
        <span class="error-msg" v-if="errors.phone">{{ errors.phone }}</span>
      </div>
      <div class="links">
        <router-link class="btn" style="margin-right: 8px;" :to="{ name: 'home' }">Вернуться к списку</router-link>
        <button type="submit" class="btn">
          Начать опрос
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import validator from '@/helpers/validator'

export default {
  mixins: [validator],
  props: ['user'],
  data() {
    return {
      questions: JSON.parse(JSON.stringify(this.$store.state.questionsData)),
      name: null,
      email: null,
      phone: null,
      errors: []
    }
  },
  methods: {
    initUser() {
      if (this.validateForm([
        {
          field: 'name',
          validators: {
            isReq: true,
            isTwoWords: true,
          }
        },
        {
          field: 'email',
          validators: {
            isReq: true
          }
        },
        {
          field: 'phone',
          validators: {
            isReq: true,
            minLength: 11,
          }
        },
      ])) {
        this.$emit('update:user', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          questions: this.questions
        })
      }
    }
  }
}
</script>