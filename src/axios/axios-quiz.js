import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-quiz-f80b5.firebaseio.com/'
})