<template>
  <fieldset id="question" class="que-input">
    <div v-for="item in question.value" :key="item">
      <input :value="item" v-model="curQue.answer" class="mr-05" type="checkbox" :id="item" :name="item">
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