export default {
  methods: {
    isDone(item) {
      console.log(item);
      console.log(JSON.stringify(item.answer) == JSON.stringify(item.correctAnswer));
      if (JSON.stringify(item.answer) == JSON.stringify(item.correctAnswer)) {
        return true
      } else {
        return false
      }
    },
    isAnswer(item) {
      if (item.type == 'checkbox') {
        return item.answer.length != 0
      } else {
        return item.answer
      }
    },    
  }
}