import IconLogo from '@/assets/svg/icon_logo'
import React, { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'


import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {

  const navigate = useNavigate()
  const iconClickHandle = useCallback(() => {
    navigate('/')
  }, [navigate])
  return (
    <LeftWrapper>
      <div className='logo' onClick={iconClickHandle}>
        <IconLogo/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft