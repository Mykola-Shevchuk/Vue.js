import { fetchArticle, saveArticleComment } from '../../../client';
import AddCommentForm from '../../components/add-comment-form';

export default {
  name: 'article-details',
  components: {
    AddCommentForm
  },
  props: [],
  data () {
    return {
      article: {}
    }
  },
  computed: {

  },
  mounted () {
    const { id } = this.$route.params;

    fetchArticle(id).then(({ data }) => this.article = data);
  },
  methods: {
    goBack () {
      this.$router.back()
    },

    saveArticle (newComment) {
      const article = {
        ...this.article,
        comments: [...this.article.comments, newComment]
      };

      saveArticleComment(article).then(({ data }) => {
        this.article = data;
      });
    }
  }
}
