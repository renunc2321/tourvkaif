import axios from 'axios'

const API_URL = 'https://kaiftour.catscode.ru/api/auth'

export async function login(user) {
  return axios
    .post(`${API_URL}/login`, {
      email: user.email,
      password: user.password
    })
    .then((response) => {
      if (response.data.access_token) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        return 'Неверный почта или пароль'
      } else {
        return 'Произошло ошибка'
      }
    })
}

export async function logout() {
  localStorage.removeItem('user')
}
