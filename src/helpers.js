export const fetchHouseData = async () => {
  const url = 'http://localhost:3001/api/v1/houses'
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const getSwornMembers = async members => {
  const memberData = await members.map(async (member) => {
    const splitMember = member.split('/')
    const memberId = splitMember.pop()
    const response = await fetch(`http://localhost:3001/api/v1/character/${memberId}`)
    const data = await response.json()
    return data
  })
  return Promise.all(memberData)
}
