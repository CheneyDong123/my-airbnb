import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'

import { Carousel, Rate } from 'antd';
import { ItemWrapper } from './style'
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';


const RoomItem = memo((props) => {
  const { roomInfo, itemWidth, itemClick } = props

  const [itemIndex, setItemIndex] = useState(0)


  const carouselRef = useRef()
  function clickHandle(index) {
    let newIndex = itemIndex + index
    if(newIndex < 0) newIndex = roomInfo.picture_urls.length - 1
    if(newIndex > roomInfo.picture_urls.length - 1) newIndex = 0
    
    setItemIndex(newIndex)
    carouselRef.current.goTo(newIndex)
  }

  const pictureElement = (
    <div className="cover">
      <img src={roomInfo.picture_url} alt="" />
    </div>
  )

  const sliderElement = (
    <div className='slider'>
      <div className='control'>
        <div className='btn left' onClick={e => clickHandle(-1)}>
          <IconArrowLeft width={25} height={25} />
        </div>
        <div className='btn right' onClick={e => clickHandle(1)}>
          <IconArrowRight width={25} height={25} />
        </div>
      </div>
      <div className='indicator'>
        <Indicator selectIndex={itemIndex}>
          {
            roomInfo?.picture_urls?.map((item,index) => {
              return (
                <div className="item" key={item}>
                  <span className={classNames("dot",{active: itemIndex === index})}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={carouselRef}>
          {
            roomInfo?.picture_urls?.map((item,index) => {
              return (
                <div className='cover' key={index}>
                  <img src={item} alt=""/>
                </div>
              )
            })
          }
      </Carousel>
    </div>
  )

  return (
    <ItemWrapper 
      color={roomInfo.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
    >
      <div className="inner">
        { roomInfo.picture_urls ? sliderElement : pictureElement }
        <div className='desc'>
          {roomInfo.verify_info.messages?.join("·")}
        </div>
        <div className='name' onClick={e => itemClick(roomInfo)}>{ roomInfo.name }</div>
        <div className='price'>￥{roomInfo.price}/晚</div>
        <div className='bottom'>
          <Rate allowHalf disabled defaultValue={roomInfo.star_rating ?? 5} />
          <span className='count'>{roomInfo.reviews_count}</span>
          {roomInfo.bottom_info && <span>·{roomInfo.bottom_info.content}</span>}
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  roomInfo: PropTypes.object,
  itemWidth: PropTypes.string
}

export default RoomItem