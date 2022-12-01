import React, { memo } from 'react'

import classNames from 'classnames'
import { TabWrapper } from './style'

const SearchTab = memo((props) => {
  const { titles, tabIndex, tabClick } = props

  function titleClickHandle(index) {
    if(tabClick) tabClick(index)
  }
  return (
    <TabWrapper>
      {
        titles.map((item, index) => {
          return (
            <div
              className={classNames("item", {active: tabIndex === index})}
              key={item}
              onClick={e => titleClickHandle(index)}
            >
              <span className='text'>{item}</span>
              <span className='bottom'></span>
            </div>
          )
        })
      }
    </TabWrapper>
  )
})

export default SearchTab