<template>
  <!-- Если в поле ответа нужен обычный input -->
  <input v-if="question.type == 'text' || question.type == 'number'" id="item" class="que-input" v-model="curQue.answer"
    :type="question.type">
  <!-- Если в поле ответа нужен select -->
  <select-field v-if="question.type == 'select'" v-model:question="curQue"></select-field>
  <!-- Если в поле ответа нужен checkbox -->
  <checkbox-field v-if="question.type == 'checkbox'" v-model:question="curQue"></checkbox-field>
  <!-- Если в поле ответа нужен radio -->
  <radio-field v-if="question.type == 'radio'" v-model:question="curQue"></radio-field>
</template>

<script>
import SelectField from './fields/SelectField.vue';
import CheckboxField from './fields/CheckboxField.vue';
import RadioField from './fields/RadioField.vue';

export default {
  props: ['question'],
  components: { SelectField, CheckboxField, RadioField },
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