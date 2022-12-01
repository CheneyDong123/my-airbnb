import { getHomeData, getHighScoreData, getDiscountData, getRecommendData, getHomeLongforData, getHomePlusData } from '@/services/modules/home';
import { createAsyncThunk, createSlice } from  '@reduxjs/toolkit' ;

export const fetchHomeDataAction = createAsyncThunk("fetchHomeData", (payload, { dispatch, getState }) => {
  getHomeData().then((res) => {
    dispatch(changeGoodPriceInfoAction(res))
  })

  getHighScoreData().then((res) => {
    dispatch(changeHighScoreInfoAction(res))
  })

  getDiscountData().then((res) => {
    dispatch(changeDiscountInfoAction(res))
  })
  
  getRecommendData().then((res) => {
    dispatch(changeRecommendInfoAction(res))
  })

  getHomeLongforData().then((res) => {
    dispatch(changeLongForInfoAction(res))
  })

  getHomePlusData().then((res) => {
    dispatch(changePlusInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longForInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }){
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload}) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  },
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled]: (state, action) => {
  //     state.goodPriceInfo = action.payload
  //   }
  // }
})

export const { 
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongForInfoAction,
  changePlusInfoAction
 } = homeSlice.actions
export default homeSlice.reducer