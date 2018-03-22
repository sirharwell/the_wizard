const tags = ( state = [], actions ) => {
  switch (action.type) {
    case 'TAGS':
      return action.tags
    case 'ADD_TAG':
      return [...state, action.tag]
    case 'DELETE_TAG':
      return state.filter( t => t.id !== actions.id )
    default:
      return state;
    }
  }

export default tags;
