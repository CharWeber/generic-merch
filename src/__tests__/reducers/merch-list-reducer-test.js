import merchListReducer from '../../reducers/merch-list-reducer';

describe('merchListReducer', () => {
  let action;
  const merchData = {
    title: 'Shirt',
    category: 'Clothing',
    quantity: 1,
    id: '1',
    key: '1',
    imgSRC: 'https://picsum.photos/131'
  }

  const currentState = {
    1:{
      title: 'Shirt',
      category: 'Clothing',
      quantity: 1,
      id: '1',
      key: '1',
      imgSRC: 'https://picsum.photos/131'
    },
    2: {
      title: 'Earrings',
      category: 'Accesory',
      quantity: 1,
      id: '2',
      key: '2',
      imgSRC: 'https://picsum.photos/132'
    }
  }



  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(merchListReducer({}, {type: null})).toEqual({});
  });

  test('should successfully add new data to merchData', () => {
    const { title, category, quantity, id, key, imgSRC } = merchData;
      action = {
        type: 'ADD_MERCH',
        title: title,
        category: category,
        quantity: quantity,
        id: id,
        key: key,
        imgSRC: imgSRC
      };

    expect(merchListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        category: category,
        quantity: quantity,
        id: id,
        key: key,
        imgSRC: imgSRC
      }
    });
  });
  test('should sucessfully delete a merch item', () => {
    action = {
      type: 'DELETE_MERCH',
      id: 2
    };
    expect(merchListReducer(currentState, action)).toEqual({
      1:{
        title: 'Shirt',
        category: 'Clothing',
        quantity: 1,
        id: '1',
        key: '1',
        imgSRC: 'https://picsum.photos/131'
      }
    })
  })


});