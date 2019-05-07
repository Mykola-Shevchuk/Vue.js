export default {
  name: 'article-item',
  components: {},
  props: {
    article: Object
  },
  data () {
    return {

    }
  },
  computed: {
    formattedText () {
      const { text } = this.article;

      return text.slice(0, 100) + (text.length > 100 ? '...' : '');
    }
  },
  mounted () {

  },
  methods: {

  }
}
