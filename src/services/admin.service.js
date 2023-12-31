import axios from 'axios'
import authToken from './auth-token'

const API_URL = 'https://kaiftour.catscode.ru/api'

export async function getClients() {
  return await axios
    .get(`${API_URL}/admin/statistics`, {
      headers: {
        accept: 'application/json',
        Authorization: authToken()
      },
      params: {
        isShowOnlyTour: false,
        isShowOnlyHotel: false,
        isNewClient: false,
        page: 1,
        limit: 10
      }
    })
    .then(({ data }) => data)
    .catch(function (error) {
      if (error.response) {
        return error.response.status
      } else {
        console.log('Error', error.message)
      }
      console.log(error.config)
    })
}

export async function postFileUpload(id, file) {
  return await axios
    .post(`${API_URL}/files/upload`, file, {
      headers: {
        accept: '*/*',
        Authorization: authToken(),
        'Content-Type': 'multipart/form-data'
      },
      params: {
        paymentId: id
      }
    })
    .then(({ data }) => data)
    .catch(function (error) {
      console.log(error)
    })
}

export async function downloadFile() {
  const fileId = 1

  try {
    const response = await axios.get(`${API_URL}/files/download/${fileId}`, {
      accept: '*/*',
      headers: {
        Authorization: authToken()
      }
    })

    const blob = new Blob([response.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file');
    document.body.appendChild(link);
    link.click();

    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
  } catch (error) {
    console.error('Ошибка при скачивании файла:', error)
  }
}
