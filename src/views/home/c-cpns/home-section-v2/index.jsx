import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import { SectionV2Wrapper } from './style'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
  const { infoData } = props

  const initialName = Object.keys(infoData.dest_list)[0]

  const [curName, setCurName] = useState(initialName)

  const tabNames = infoData.dest_address?.map((item) => item.name)

  function tabClickHandle(name) {
    setCurName(name)
  }

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title}  subTitle={infoData.subtitle}/>
      <SectionTabs tabs={tabNames} tabClick={tabClickHandle}/>
      <SectionRooms roomList={infoData.dest_list?.[curName]} itemNum={3}/>
      <SectionFooter footerInfo={curName}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV1.propTypes = {
  goodPriceInfo: PropTypes.object
}

export default HomeSectionV1