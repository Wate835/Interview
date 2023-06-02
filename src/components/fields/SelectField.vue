<template>
  <select id="question" class="que-input" v-model="curQue.answer">
    <option disabled :value='null' selected>Выберите один из вариантов</option>
    <option v-for="option in question.value" :key="option" :value="option" >{{ option }}
    </option>
  </select>
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