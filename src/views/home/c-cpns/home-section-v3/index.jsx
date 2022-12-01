import LongforItem from '@/components/longfor-item'
import ScrollView from '@/components/scroll-view'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'

const HomeSectionV3 = memo((props) => {

  const { infoData } = props

  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subTitle={infoData.subtitle}/>
      <div className='content'>
        <ScrollView>
          {
            infoData.list.map((item, index) => {
              return (
                <LongforItem key={item.city} item={item}/>
              )
            })
          }
        </ScrollView>
      </div>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV3