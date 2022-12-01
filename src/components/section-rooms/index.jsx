import PropTypes from 'prop-types'
import React, { memo, useMemo } from 'react'
import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

const SectionRooms = memo((props) => {
  const { roomList = [], itemNum = 4} = props

  const itemWidth = useMemo(() => `${100/itemNum}%`, [itemNum])
  
  return (
    <RoomsWrapper>
      { roomList.slice(0, 8).map((item) => {
        return <RoomItem roomInfo={item} key={item.id} itemWidth={itemWidth}/>
      })}
    </RoomsWrapper>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms