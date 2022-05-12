const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_USER': {
      return { ...state, user: action.user };
    }
    case 'REMOVE_USER': {
      return { ...state, user: null };
    }
    case 'ADD_TYPE': {
      return {
        ...state, type: action.user,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
