import axios from 'axios'

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:5000'
    });

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if(token) {
          config.headers = {
            Authorization: `Bearer ${token}`,
          }
        }
        return config
      },
      (error) => console.log(error)
    )

    this.api.interceptors.response.use(
      (response) => response,
      ((error) => {
        if (error.response.status === 400){
          localStorage.removeItem('token')
        }
        throw error
      }
    )
  )
  }

  login = async (payload) => {
    try {
      const { data } = await this.api.post('/login', payload);
      const { token } = data;
      localStorage.setItem('token', token)
    } catch (error){
      throw new Error(error)
    }
  }

  getUsers = async () => {
    try {
      const { data } = await this.api.get('/user')
      console.log(data)
    } catch (error) {
      
    }
  }

  getOneJoke = async (id) => {
    try {
      const { data } = await this.api.get(`/jokes/${id}`)
      console.log(data)
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default new Api();