import IconArrowDown from '@/assets/svg/icon-arrow-down'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconArrowUp from '@/assets/svg/icon-arrow-up'
import IconClose from '@/assets/svg/icon-close'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import Indicator from '../indicator'
import { BrowserWrapper } from './style'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeClick } = props

  const [currentPictureIndex, setPictureCurrentIndex] = useState(0)
  const [showList, setShowList] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  })

  function closeBtnClickHandle() {
    if(closeClick) closeClick()
  }

  function btnClickHandle(step) {
    let newIndex = currentPictureIndex + step

    if(newIndex < 0) newIndex = pictureUrls.length - 1
    if(newIndex >= pictureUrls.length) newIndex = 0
    setPictureCurrentIndex(newIndex)
  }
  
  return (
    <BrowserWrapper showList={showList}>
      <div className='top'>
        <div className='close-btn' onClick={closeBtnClickHandle}>
          <IconClose />
        </div>
      </div>
      <div className='slider'>
        <div className='control'>
          <div className='btn control-left' onClick={e => btnClickHandle(-1)}>
            <IconArrowLeft width={77} height={77}/>
          </div>
          <div className="btn control-right" onClick={e => btnClickHandle(1)}>
            <IconArrowRight width={77} height={77}/>
          </div>
        </div>
        <div className="picture">
          <img src={pictureUrls[currentPictureIndex]} alt="" />
        </div>
      </div>
      <div className='preview'>
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentPictureIndex + 1}/{pictureUrls.length}</span>
              <span>A bedroom in Bloomsbury图片{currentPictureIndex + 1}</span>
            </div>
            <div className="toggle" onClick={e => setShowList(!showList)}>
              <span>{showList ? "隐藏" : "显示"}照片列表</span>
              { showList ? <IconArrowDown /> : <IconArrowUp /> }
            </div>
          </div>
          <div className='list'>
          <Indicator selectIndex={currentPictureIndex}>
            {
              pictureUrls.map((item, index) => {
                return (
                  <div className={classNames("item", {active: currentPictureIndex === index})} key={item}>
                    <img src={item} alt="" />
                  </div>
                )
              })
            }
          </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array,
}

export default PictureBrowser