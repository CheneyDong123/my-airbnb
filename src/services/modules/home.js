import airRequest from ".."

export const getHomeData = () => {
  return airRequest.get({
    url: "/home/goodprice"
  })
}

export const getHighScoreData = () => {
  return airRequest.get({
    url: "/home/highscore"
  })
}

export const getDiscountData = () => {
  return airRequest.get({
    url: "/home/discount"
  })
}

export const getRecommendData = () => {
  return airRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export const getHomeLongforData = () => {
  return airRequest.get({
    url: "/home/longfor"
  })
}

export const getHomePlusData = () => {
  return airRequest.get({
    url: "/home/plus"
  })
}