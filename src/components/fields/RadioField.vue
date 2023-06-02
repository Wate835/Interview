<template>
  <fieldset id="question" class="que-input">
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