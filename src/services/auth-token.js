export default function authToken() {
  let user = JSON.parse(localStorage.getItem('user'))

  if (user && user.access_token) {
    return 'Bearer ' + user.access_token
  } else {
    return ''
  }
}
