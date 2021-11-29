export default (state = {}, action) => {
  const { title, category, quantity, id, key, imgSRC } = action;
switch (action.type){
  case 'ADD_MERCH':
    return Object.assign({}, state, {
      [id]: {
        title: title,
        category: category,
        quantity: quantity,
        id: id,
        key: key,
        imgSRC: imgSRC
      }
    });
  case 'DELETE_MERCH':
    let newState = {...state };
    delete newState[id];
    return newState;
  default:
      return state;
  }
};