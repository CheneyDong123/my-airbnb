import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'
import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoomWrapper } from './style'

const EntireRoom = memo((props) => {

  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  const dispatch = useDispatch()
  const navigate =  useNavigate()
  const itemClickHandle = useCallback((item) => {
    dispatch(changeDetailInfoAction(item))
    navigate("/details")
  },[navigate, dispatch])

  return (
    <RoomWrapper>
      { !isLoading && <div className='title'>{totalCount}多出住所</div> }
      <div className='list'>
        {
          roomList?.map((item) => {
            return (
              <RoomItem
                roomInfo={item}
                key={item._id}
                itemWidth={'20%'}
                itemClick={(e) => itemClickHandle(e)}
              />
            )
          })
        }
      </div>
      { isLoading && <div className='cover'></div>}
    </RoomWrapper>
  )
})

EntireRoom.propTypes = {}

export default EntireRoom