import apiUrl from '../apiConfig'
import axios from 'axios'

export const getProfile = (user) => {
    return axios({
      url: `${apiUrl}/profile/`,
      method: 'GET',
      headers: {
          Authorization: `Token ${user.token}`
      },
  })
}

export const createProfile = (user, newProfile) => {
    console.log('this is the user', user)
    console.log('this is the newProfile', newProfile)
    return axios({
      url: `${apiUrl}/profiles/`,
      method: 'POST',
      headers: {
          Authorization: `Token ${user.token}`
      },
      data: { profile: newProfile }
    })
}


export const updateProfile = (user, updatedProfile) => {
    console.log('this is user', user)
    console.log('this is updated profile', updateProfile)
    return axios({
        url: `${apiUrl}/profile/`,
        method: 'PATCH',
        headers: {
            // Authorization: `Token token=${user.token}`
            Authorization: `Token ${user.token}`
        },
        data: { profile: updatedProfile }
    })
}
