import { fetchArticles } from '../../../client';
import ArticleItem from '../article-item';

export default {
  name: 'article-list',
  components: {
    ArticleItem
  },
  props: [],
  data () {
    return {
      articles: [],
      options: ['mobile', 'desktop'],
      selectedOption: '',
      textFilter: ''
    }
  },
  computed: {
    filteredArticles: function () {
      return this.articles
        .filter(({ category }) => !this.selectedOption || category === this.selectedOption)
        .filter(({ title }) => title.includes(this.textFilter))
    }
  },
  mounted () {
    fetchArticles().then(({ data }) => {
      this.articles = data
    })
  },
  methods: {}
}
