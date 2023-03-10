import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllMangos = (user) => {
    return axios({
      url: `${apiUrl}/mangos/`,
      method: 'GET',
      headers: {
          Authorization: `Token ${user.token}`
      },
  })
  }