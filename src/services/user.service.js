import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'https://kaiftour.catscode.ru/api'

class UserService {
  async getAllTourHotelData() {
    try {
      const response = await axios.get(API_URL + '/admin/statistics', {
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

      return response.data
    } catch (error) {
      console.error(error)
    }
  }
  async postFileUpload(id, file) {
    try {
      await axios.post(API_URL + '/files/upload', file, {
        headers: {
          accept: '*/*',
          Authorization: authHeader(),
          'Content-Type': 'multipart/form-data'
        },
        params: {
          paymentId: id
        }
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export default new UserService()
