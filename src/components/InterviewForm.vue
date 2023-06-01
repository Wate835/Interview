<template>
  <div class="inter">
    <h2>Вопросы:</h2>
    <progress-bar v-model:current="current" :items="user.questions"></progress-bar>
    <!-- Поле с вопросами -->
    <div class="int-wrapper">
      <!-- Вопросы -->
      <span class="int-text"> Вопрос {{ current }}:</span>
      <label class="que-label">{{ question.placeholder }}
        <answer-field v-model:question="question"></answer-field>
      </label>
      <!-- Кнопки -->
      <a style="margin-right: 31px;" href="#" :class="{ disabled: current == 1 }" @click.prevent="changeCurr(-1)"
        class="btn">Вернуться назад</a>
      <a href="#" @click.prevent="changeCurr(1)" v-if="this.current < this.user.questions.length"
        class="btn">Следующий</a>
      <router-link :to="{ name: 'home' }" @click.prevent="pushUser(userInProgress)" v-else class="btn">Закончить опрос</router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import ProgressBar from './ProgressBar.vue'
import AnswerField from './AnswerField.vue'
export default {
  props: ['user'],
  components: { ProgressBar, AnswerField },
  data() {
    return {
      userInProgress: this.user,
      current: 1,
    }
  },
  computed: {
    question: {
      get: function () {
        return this.userInProgress.questions[this.current - 1]
      },
      set: function (newValue) {
        this.userInProgress.questions[this.current - 1] = newValue
      }
    }
  },
  methods: {
    ...mapMutations(['pushUserToData']),
    ...mapActions(['saveData']),
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
      this.saveData()
      this.$emit('update:user', null)
    }
  }
}
</script>