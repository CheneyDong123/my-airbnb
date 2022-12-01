import airRequest from ".."

export const getEntireRoomList = (offset = 0, size = 20) => {
  return airRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size
    }
  })
}