import axios from 'axios'


// Define la instancia de axios con la URL base
const api = axios.create({
  baseURL: 'http://localhost:8000/product'
});


export default api