import { fetchEntireDataAction } from '@/store/modules/entire/actionCreator'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRoom from './c-cpns/entire-room'
import { EntireWrapper } from './sytle'
import { changeHeaderConfigAction } from '@/store/modules/main';

export const Entire = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchEntireDataAction())
    dispatch(changeHeaderConfigAction({isFixed: true, topAlpha: false}))
  },[dispatch])

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRoom />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire