import apiUrl from '../apiConfig'
import axios from 'axios'

export const getProfile = (user) => {
    return axios({
      url: `${apiUrl}/profile/${user.id}`,
      method: 'GET',
      headers: {
          Authorization: `Token ${user.token}`
      },
  })
  }