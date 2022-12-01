import PictureBrowser from '@/base-ui/picture-browser'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { PicturesWrapper } from './style'

const DetailPictures = memo((props) => {

  const { itemData } = props

  const [showBrowser, setShowBrowser] = useState(false)

  function broswerClickHandle(isShow) {
    console.log(111);
    setShowBrowser(isShow)
  }

  return (
    <PicturesWrapper>
      <div className='pictures'>
        <div className='left'>
          <div className='item'>
            <img src={itemData[0]} alt="" />
            <div className='cover'></div>
          </div>
        </div>
        <div className='right'>
          { 
            itemData.slice(1, 5).map(item => {
              return (
                <div className='item' key={item}>
                  <img src={item} alt="" />
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='show-btn' onClick={e => broswerClickHandle(true)}>查看照片</div>
      {
        showBrowser && <PictureBrowser pictureUrls={itemData} closeClick={e => broswerClickHandle(false)}/>
      }
    </PicturesWrapper>
  )
})

DetailPictures.propTypes = {
  itemData: PropTypes.array
}

export default DetailPictures