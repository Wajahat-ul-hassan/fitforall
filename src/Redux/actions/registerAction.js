
const registredUser = user => {
  return {
    type: 'REGISTER_USER',
    user,
  };
};

const removeRegistreddUser = user => {
  return {
    type: 'REMOVE_REGISTER_USER',
    user,
  };
};

export {registredUser, removeRegistreddUser};
