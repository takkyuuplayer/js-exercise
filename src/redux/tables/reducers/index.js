export default (state = false, action) => {
  switch (action.type) {
    case 'SET_EDIT_MODE':
      return action.bool;
    default:
      return state;
  }
};
