export const HouseData = (state=[], action) => {
  console.log(action)
  switch (action.type) {
    case  'STORE_HOUSE_DATA': 
    return action.houseData
  default:
    return state;
  }
};
