import axios from 'axios';

const insctance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

insctance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSATNCE';

export default insctance;