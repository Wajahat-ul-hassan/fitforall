const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_USER': {
      return {...state, user: action.user};
    }
    case 'REMOVE_REGISTER_USER': {
      return {...state, user: null};
    }
    default: {
      return state;
    }
  }
};

export default reducer;
