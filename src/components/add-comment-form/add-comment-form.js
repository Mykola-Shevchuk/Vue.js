export default {
  name: 'add-comment-form',
  props: [],
  data () {
    return {
      author: '',
      text: ''
    }
  },
  computed: {
    isSaveButtonDisabled () {
      return !this.author || !this.text
    }
  },
  methods: {
    saveComment () {
      const article = {
        id: new Date(),
        author: this.author,
        text: this.text
      }

      this.$emit('add-comment', article)

      this.author = ''
      this.text = ''
    }
  }
}
