export default {
  methods: {
    isDone(item) {
      if (item.type == 'checkbox') {
        return item.answer.length != 0
      } else {
        return item.answer
      }
    },
  }
}