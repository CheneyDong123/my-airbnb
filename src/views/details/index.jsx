import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import DetailInfo from './c-cpns/detail-info'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailsWrapper } from './style'
import { changeHeaderConfigAction } from '@/store/modules/main';

const detail = memo(() => {

  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  const { picture_urls = [] } = detailInfo
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({isFixed: true, topAlpha: false}))
  })
  return (
    <DetailsWrapper>
      <DetailPictures itemData={picture_urls} />
      <DetailInfo />
    </DetailsWrapper>
  )
})

export default detail