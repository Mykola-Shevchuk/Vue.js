export default {
  name: 'article-item',
  props: {
    article: Object
  },
  computed: {
    formattedText () {
      const { text } = this.article;

      return text.slice(0, 100) + (text.length > 100 ? '...' : '')
    }
  }
}
