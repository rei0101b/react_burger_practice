import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-295cf.firebaseio.com/'
});

export default instance;
