import axios from 'axios';

const instance = axios.create({
baseURL: 'https://react-my-burger360-default-rtdb.firebaseio.com/'
});
export default instance;