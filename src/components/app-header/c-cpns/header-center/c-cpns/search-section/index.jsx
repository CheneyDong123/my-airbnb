import React, { memo } from 'react'
import { SectionWrapper } from './style'

const SearchSection = memo((props) => {
  const { searchInfo = [] } = props
  return (
    <SectionWrapper>
      {
        searchInfo?.map((item, index) => {
          return (
            <div className='item' key={index}>
              <div className='info'>
                <div className='title'>{item.title}</div>
                <div className='desc'>{item.desc}</div>
              </div>
            </div>
          )
        })
      }
    </SectionWrapper>
  )
})

export default SearchSection