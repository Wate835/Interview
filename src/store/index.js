import { createStore } from 'vuex'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

export default createStore({
  state: {
    usersData: null,
    isLoading: false,
    isLoadingFailed: false,
    isSending: false,
    isSendingFailed: false,
    questionsData: [
      {
        id: 1,
        type: 'text',
        placeholder: 'How are you?',
        answer: null,
      },
      {
        id: 2,
        type: 'checkbox',
        placeholder: 'How are you?',
        answer: null,
      },
      {
        id: 3,
        type: 'radio',
        placeholder: 'How are you?',
        answer: null,
      },
      {
        id: 4,
        type: 'text',
        placeholder: 'How are you?',
        answer: null,
      },
      {
        id: 5,
        type: 'number',
        placeholder: 'How are you?',
        answer: null,
      },
      {
        id: 6,
        type: 'number',
        placeholder: 'How are you?',
        answer: null,
      },
      {
        id: 7,
        type: 'number',
        placeholder: 'How are you?',
        answer: null,
      },
      {
        id: 8,
        type: 'number',
        placeholder: 'How are you?',
        answer: null,
      },
      {
        id: 9,
        type: 'number',
        placeholder: 'How are you?',
        answer: null,
      },
      {
        id: 10,
        type: 'number',
        placeholder: 'How are you?',
        answer: null,
      },
    ],
  },
  getters,
  mutations,
  actions
})
