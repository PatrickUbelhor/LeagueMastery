import axios from 'axios';

export default axios.create({
	baseURL: '/api'
	// baseURL: 'http://localhost:3001/api'
});
