import axios from 'axios';

export default axios.create({
	baseURL: '/api'
	// baseURL: 'http://localhost:80/api'
});
