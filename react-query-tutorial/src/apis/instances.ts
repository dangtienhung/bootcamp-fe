import axios from 'axios';

export const instaces = axios.create({
	baseURL: 'http://localhost:3000',
});
