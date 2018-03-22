import axios from 'axios';

export const addTag = (tag) => {
  return (dispatch) => {
    axios.post('/api/tags', { tag })
      .then( res => {
        const { data: tag, headers } = res;
        if (res.data)
          dispatch({ type: 'ADD_TAG', tag, headers })
        else
          dispatch({ type: 'HEADERS', headers })
      })
  }
}
