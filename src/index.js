import LearnVueButton from './components/LearnVueButton.vue'

export { LearnVueButton }

export default {
  install: (app, options) => {
    app.component('LearnVueButton', LearnVueButton)
  },
}
