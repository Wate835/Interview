<template>
  <input v-if="question.type == 'text' || question.type == 'number'" id="item" class="que-input" v-model="curQue.answer"
    :type="question.type">
  <select v-if="question.type == 'select'" id="question" class="que-input" v-model="curQue.answer">
    <option disabled :value='null' selected>Выберите один из вариантов</option>
    <option v-for="option in question.value" :key="option" :value="option" :selected="question.value[0]">{{ option }}</option>
  </select>
  <fieldset v-if="question.type == 'checkbox'" id="question" class="que-input">
    <div v-for="item in question.value" :key="item">
      <input :value="item" v-model="curQue.answer" class="mr-05" type="checkbox" :id="item" :name="item">
      <label :for="item">{{ item }}</label>
    </div>
  </fieldset>
  <fieldset v-if="question.type == 'radio'" id="question" class="que-input">
    <div v-for="item in question.value" :key="item">
      <input v-model="curQue.answer" class="mr-05" type="radio" :id="item" name="radio" :value="item">
      <label :for="item">{{ item }}</label>
    </div>
  </fieldset>
</template>

<script>
export default {
  props: ['question'],
  computed: {
    curQue: {
      get: function () {
        return this.question
      },
      set: function () {
        this.$emit('update:question', this.curQue)
      }
    }
  },
}
</script>

<style>
.mr-05 {
  margin-right: 0.5vh;
}
</style>