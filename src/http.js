import axios from 'axios';

var http = new axios.create({
    baseURL: 'http://localhost:3000/api/'
})

export default http;