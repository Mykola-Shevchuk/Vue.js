export default {
  name: 'add-comment-form',
  components: {},
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
  mounted () {

  },
  methods: {
    saveComment () {
      const article = {
        id: new Date(),
        author: this.author,
        text: this.text
      };

      this.$emit('add-comment', article);

      this.author = '';
      this.text = '';
    }
  }
}
