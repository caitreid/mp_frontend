import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllLinks = (user) => {
    return axios({
      url: `${apiUrl}/links/`,
      method: 'GET',
      headers: {
          Authorization: `Token ${user.token}`
      },
  })
}

export const createLink = (user, newLink) => {
    console.log('this is the user', user)
    console.log('this is the newLink', newLink)
    axios({
      url: `${apiUrl}/links/`,
      method: 'POST',
      headers: {
          Authorization: `Token ${user.token}`
      },
      data: { link: newLink }
    })
}


export const updateLink = (user, updatedLink) => {
    console.log('this is user', user)
    console.log('this is updated link', updateLink)
    return axios({
        url: `${apiUrl}/link/${updateLink.id}`,
        method: 'PATCH',
        headers: {
            // Authorization: `Token token=${user.token}`
            Authorization: `Token ${user.token}`
        },
        data: { link: updatedLink }
    })
}

export const deleteLink = (user, deleteLink) => {
    console.log('this is user', user)
    console.log('this is updated link', deleteLink)
    return axios({
        url: `${apiUrl}/link/${deleteLink.id}`,
        method: 'DELETE',
        headers: {
            // Authorization: `Token token=${user.token}`
            Authorization: `Token ${user.token}`
        },
        data: { link: deleteLink }
    })
}