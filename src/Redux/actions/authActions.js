const updateUser = user => {
  return {
    type: 'UPDATE_USER',
    user,
  };
};

const removeUser = () => {
  return {
    type: 'REMOVE_USER',
  };
};
const addType = (user) => {
  return {
    type: 'ADD_TYPE',
    user,

  };
};

export {updateUser, removeUser , addType};
