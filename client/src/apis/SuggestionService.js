import axios from 'axios';

const a = axios.create({
  baseURL: 'http://localhost:8080/suggestions'
});

export default {
  getQuestions: async tags => {
    const questions = await a.get('/questions', { params: { tags } });
    return questions.data;
  }
};
