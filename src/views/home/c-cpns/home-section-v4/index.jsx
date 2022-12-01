import PropTypes from 'prop-types'
import React, { memo } from 'react'

import SectionHeader from '@/components/section-header'
import ScrollView from '@/components/scroll-view'
import { SectionV4Wrapper } from './style'
import RoomItem from '@/components/room-item'

const HomeSectionV4 = memo((props) => {

  const { infoData } = props

  return (
    <SectionV4Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle}/>
      <div className='content'>
        <ScrollView>
          {
            infoData.list.map((item) => {
              return (
                <RoomItem key={item.id} roomInfo={item} itemWidth="20%"/>
              )
            })
          }
        </ScrollView>
      </div>
    </SectionV4Wrapper>
  )
})

HomeSectionV4.propTypes = {
  infoData: PropTypes.object,
}

export default HomeSectionV4