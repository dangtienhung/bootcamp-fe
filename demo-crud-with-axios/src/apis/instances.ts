import axios from 'axios';

/* config axios */
export const instances = axios.create({
	baseURL: 'http://localhost:3000',
});
