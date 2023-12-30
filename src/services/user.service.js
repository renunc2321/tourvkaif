import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'https://kaiftour.catscode.ru/api/admin/statistics'

class UserService {
  getAllTourHotelData() {
    return axios
		.get(API_URL, {
      headers: {
				accept: 'application/json',
				Authorization: authHeader()
			},
      params: {
        isShowOnlyTour: false,
        isShowOnlyHotel: false,
        isNewClient: false,
        page: 1,
        limit: 10
      }
    })
		.then(response => {
			return response.data
		})
  }
}

export default new UserService()
