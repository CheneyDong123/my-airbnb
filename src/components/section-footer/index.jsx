import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {

  const { footerInfo } = props


  let curName = "显示全部"

  if(footerInfo) {
    curName = `显示更多${footerInfo}房源`
  }
  
  const navigate = useNavigate()
  function moreClickHandle() {
    navigate("/entire")
  }

  return (
    <FooterWrapper color={footerInfo ? "#00848A": "#000"}>
      <div className='info' onClick={moreClickHandle}>
        <div className='text'>{curName}</div>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  footerInfo: PropTypes.string
}

export default SectionFooter