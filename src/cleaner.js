export const fetchHouseData = async () => {
  const url = 'http://localhost:3001/api/v1/houses'
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const getSwornMembers = async members => {
  const memberData = await members.map(async (member) => {
    const response = await fetch(member)
    const data = await response.json()
    return data
  })
  return Promise.all(memberData)
}
