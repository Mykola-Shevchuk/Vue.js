import axios from 'axios';

const API_URL = 'http://localhost:3000/articles';

export const fetchArticles = () => axios.get(API_URL);
export const fetchArticle = id => axios.get(`${API_URL}/${id}`);
export const saveArticleComment = article => axios.put(`${API_URL}/${article.id}`, article);
