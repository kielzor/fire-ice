import { App, mapDispatchToProps } from './App'
import { storeHouseData } from '../../actions/index'

describe('mapDispatchToProps', () => {
  it('calls dispatch with storeHouseData when storeHouse is invoked', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = {"houseData": {"founded": 809, "name": "GoT"}, "type": "STORE_HOUSE_DATA"}

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.storeHouse({ name: 'GoT', founded: 809 })

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})

