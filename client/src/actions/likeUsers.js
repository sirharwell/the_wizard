import axios from 'axios';

export const getUsersByTag = (tag)=> {
  return (dispatch) => {
    axios.get(`/api/users/${tag}`)
      .then( res => {
        dispatch({
          type: 'LIKE_USERS',
          users: res.data,
          headers: res.headers
        })
      })
  }
}

export const getLikeUsers = () => {
  return (dispatch) => {
    axios.get('/api/like_users')
      .then( res => {
        dispatch({
          type: 'LIKE_USERS',
          users: res.data,
          headers: res.headers
        })
      })
  }
}
