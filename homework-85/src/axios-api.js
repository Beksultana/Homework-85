import axios from 'axios';
import {apiURL} from './contacts';

const instance = axios.create({
    baseURL: apiURL
});

export default instance;