const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'USER':
      return actions.user;
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

export default user;
