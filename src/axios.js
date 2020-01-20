import axios from 'axios';

const instance = axios.create({
    baseURL :'https://myprojectimg.firebaseio.com',
    //baseURL :'http://soleiletlune.hebergratuit.net/Pinterest/Apophysis/
    //baseURL :'https://react-my-burger-2fc3b.firebaseio.com/'
    headers : {'Acces-Control-Allow-Origin' : '*' ,
                'Acces-Control-Allow-Methods' : 'GET',
                'Acces-Control-Allow-Headers' : 'Authorization',
                'X-Content-Type-Options': 'nosniff'}
    //baseURL: 'https://management-development-1b6c3.firebaseio.com'
});

export default instance;