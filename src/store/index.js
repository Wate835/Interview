import { createStore } from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

export default createStore({
  state: {
    usersData: [],
    isLoading: false,
    isLoadingFailed: false,
    isSending: false,
    isSendingFailed: false,
    questionsData: [
      {
        id: 1,
        type: 'text',
        value: null,
        placeholder: 'Как твои дела?',
        answer: null,
      },
      {
        id: 2,
        type: 'checkbox',
        value: ['Где?' , 'Когда?', 'Почему?'],
        placeholder: 'Что?',
        answer: [],
      },
      {
        id: 3,
        type: 'radio',
        value: ['Vue' , 'React', 'Angular'],
        placeholder: 'На чём написан этот опросник?',
        answer: null,
      },
      {
        id: 4,
        type: 'select',
        value: ['Машина' , 'Самолёт', 'Ракета'],
        placeholder: 'На чём ты поедешь домой?',
        answer: null,
      },
      {
        id: 5,
        type: 'number',
        value: null,
        placeholder: 'Сколько тебе лет?',
        answer: null,
      },
    ],
  },
  getters,
  mutations,
  actions
})
