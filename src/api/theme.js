import apiUrl from '../apiConfig'
import axios from 'axios'

export const getTheme = (user) => {
    return axios({
      url: `${apiUrl}/theme/`,
      method: 'GET',
      headers: {
          Authorization: `Token ${user.token}`
      },
  })
}

export const createTheme = (user, newTheme) => {
    console.log('this is the user', user)
    console.log('this is the newTheme', newTheme)
    axios({
      url: `${apiUrl}/theme/`,
      method: 'POST',
      headers: {
          Authorization: `Token ${user.token}`
      },
      data: { theme: newTheme }
    })
}


export const updateTheme = (user, updatedTheme) => {
    console.log('this is user', user)
    console.log('this is updated theme', updateTheme)
    return axios({
        url: `${apiUrl}/theme/${updateTheme.id}`,
        method: 'PATCH',
        headers: {
            // Authorization: `Token token=${user.token}`
            Authorization: `Token ${user.token}`
        },
        data: { theme: updatedTheme }
    })
}
