const likeUsers = ( state = [], action ) => {
  switch (action.type) {
    case 'LIKE_USERS':
      return action.users
    default:
      return state
  }
}

export default likeUsers;
