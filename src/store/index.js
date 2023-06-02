import { createStore } from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'

export default createStore({
  state: {
    usersData: [],
    isLoading: false,
    isLoadingFailed: false,
    questionsData: [
      {
        id: 1,
        type: 'text',
        value: null,
        placeholder: 'Фамилия первого призидента России?',
        answer: null,
        correctAnswer: 'Ельцин'
      },
      {
        id: 2,
        type: 'checkbox',
        value: ['Где?' , 'Когда?', 'Почему?'],
        placeholder: 'Что?',
        answer: [],
        correctAnswer: ['Где?', 'Когда?']
      },
      {
        id: 3,
        type: 'radio',
        value: ['Vue' , 'React', 'Angular'],
        placeholder: 'На чём написан этот опросник?',
        answer: null,
        correctAnswer: 'Vue'
      },
      {
        id: 4,
        type: 'select',
        value: ['Машина' , 'Самолёт', 'Ракета'],
        placeholder: 'На чём ты поедешь домой?',
        answer: null,
        correctAnswer: 'Машина'
      },
      {
        id: 5,
        type: 'number',
        value: null,
        placeholder: 'В каком году вышел фильм бриллиантовая рука?',
        answer: null,
        correctAnswer: 1968
      },
    ],
  },
  mutations,
  actions
})
