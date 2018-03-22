import axios from 'axios';

export const getLikeUsers = () => {
  return (dispatch) => {
    axios.get('/api/like_users')
      .then( res => dispatch({ type: 'LIKE_USERS', users: res.data, headers: res.headers }) )
  }
}

export const getUsersByTag = (tag, page = 1) => {
  return (dispatch) => {
    axios.get(`/api/users/${tag}?page=${page}`)
      .then( res => {
        const type = page > 1 ? 'LOAD_MORE' : 'LIKE_USERS'
        dispatch({ type, users: res.data, headers: res.headers }) 
      })
  }
}


