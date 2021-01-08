import axios from 'axios';

const api = axios.create({
    baseURL:'http://todoapp-com.umbler.net/'
});

export default api;