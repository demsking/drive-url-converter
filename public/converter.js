'use strict'

/* global Vue ga */

const app = new Vue({
  el: '#app',
  data: {
    output: null
  },
  render (createElement) {
    const nodes = []

    nodes.push(createElement('h1', {
      class: 'uk-card-title'
    }, 'Drive Sharing Link Converter'))

    const formElements = []

    formElements.push(createElement('div', {
      class: 'uk-margin'
    }, [createElement('input', {
      ref: 'url',
      class: 'uk-input',
      attrs: {
        type: 'url',
        placeholder: 'Google Drive Sharing URL'
      }
    })]))

    if (this.output) {
      formElements.push(createElement('textarea', {
        class: 'uk-input',
        attrs: {
          readonly: true
        }
      }, this.output))
    }

    formElements.push(createElement('button', {
      class: 'uk-button uk-button-secondary',
      attrs: { type: 'submit' }
    }, 'Convert'))

    nodes.push(createElement('form', {
      class: 'uk-form-stacked',
      on: {
        submit: this.submit
      }
    }, formElements))

    return createElement('div', nodes)
  },
  methods: {
    submit (event) {
      event.preventDefault()
      event.stopPropagation()

      var input = this.$refs.url
      var resourceId = input.value.match(/file\/d\/([\w\d_-]+)\//i)[1]

      this.output = 'https://drive.google.com/uc?export=view&id=' + resourceId
    }
  }
})
