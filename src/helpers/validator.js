export default {
  methods: {
    validateForm(arr) {
      this.errors = []
      for (let field of arr) {
        for (let item in field.validators) {
          item == 'isReq' && field.validators[item] == true ? this.isReq(field.field) : null
          if (this.isReq(field.field)) {
            item == 'isTwoWords' && field.validators[item] == true ? this.isTwoWords(field.field) : null
            item == 'minLength' ? this.minLength(field.field, field.validators[item]) : null
            item == 'isNiceEmail' ? this.isNiceEmail(field.field, field.validators[item]) : null
          }
        }
      }
      if (!this.errors['name'] && !this.errors['email'] && !this.errors['phone']) {
        return true;
      } else {
        return false
      }
    },
    isReq(field) {
      if (!this[field]) {
        this.errors[field] = `Поле должно быть заполнено`;
        return false
      }
      return true
    },
    isTwoWords(field) {
      if (this[field].trim().split(' ').length != 2) {
        this.errors[field] = `Полное имя должно состоять из двух слов`;
      }
    },
    minLength(field, min) {
      if (String(this[field]).replace(/ /g,'').length < min) {
        this.errors[field] = `Минимум ${min} символов`;
      }
    },
    isNiceEmail(field) {
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(this[field])) {
        this.errors[field] = `Введите правильный Email`;
      }
    },
  }
}