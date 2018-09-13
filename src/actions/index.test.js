import * as actions from '../actions'


describe('storeHouseData', () => {
  it('should have a type of STORE_HOUSE_DATA', () => {
    const houseData = { name: 'House Corbray of Hearts Home' }
    const expectedAction = {
      type: 'STORE_HOUSE_DATA',
      houseData: { name: 'House Corbray of Hearts Home' }
    }

    const result = actions.storeHouseData(houseData)
    
    expect(result).toEqual(expectedAction)

  })
})