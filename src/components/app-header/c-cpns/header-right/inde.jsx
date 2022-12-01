import IconAvatar from '@/assets/svg/icon_avater'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false)

  useEffect(() => {
    function handleDocumentClick() {
        setShowPanel(false)
    }
    window.addEventListener('click', handleDocumentClick)
    return () => {
      window.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  function changeShowPanelHandle(e) {
    e.stopPropagation()
    setShowPanel(!showPanel)
  }
  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>
      <div className='profile' onClick={e => changeShowPanelHandle(e)}>
        <IconMenu />
        <IconAvatar/>

        { showPanel && (
          <div className='panel'>
            <div className='panel-top'>
              <div className='item'>注册</div>
              <div className='item'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>出租房源</div>
              <div className='item'>开展体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>)
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight