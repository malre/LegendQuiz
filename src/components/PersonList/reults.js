import axios from 'axios';

const instance = axios.create({
    //baseURL :'https://react-my-burger-2fc3b.firebaseio.com/'
    
    baseURL: 'https://management-development-1b6c3.firebaseio.com'
});

export default instance;