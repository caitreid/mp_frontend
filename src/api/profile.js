import apiUrl from '../apiConfig'
import axios from 'axios'

export const getProfile = (user) => {
    return axios({
      url: `${apiUrl}/profile/${user.id}`,
      method: 'GET',
      validateStatus: false,
      headers: {
          Authorization: `Token ${user.token}`
      },
  })

}

export const createProfile = (user, newProfile) => {
    console.log('this is the user', user)
    console.log('this is the newProfile', newProfile)
    axios({
      url: `${apiUrl}/profile/`,
      method: 'POST',
      headers: {
          Authorization: `Token ${user.token}`
      },
      data: { profile: newProfile }
    })
}


export const updateProfile = (user, updatedProfile) => {
    return axios({
        url: `${apiUrl}/profile/${updatedProfile.id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { profile: updatedProfile }
    })
}
