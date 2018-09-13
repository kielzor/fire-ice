import { mapStateToProps } from './CardContainer'

describe('mapStateToProps', () => {
  it('should return an object in the houseData array', () => {
    const mockState = {
      HouseData: [{ name: 'GoT', founded: 209 }],
      filter: 'STORE_HOUSE_DATA'
    }

    const expected = {
      "data": [{"founded": 209, "name": "GoT"}]
    }

    const mappedProps = mapStateToProps(mockState)

    expect(mappedProps).toEqual(expected)
  })
})