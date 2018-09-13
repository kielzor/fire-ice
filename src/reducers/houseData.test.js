import { HouseData } from './houseData'

describe('HouseData', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = HouseData(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with a house data array', () => {
    const expected = { name: 'GoT', founded: 209, seats: 10 }

    const result = HouseData([], { houseData: { name: 'GoT', founded: 209, seats: 10 }, type: 'STORE_HOUSE_DATA'})

    expect(result).toEqual(expected)
  })
})