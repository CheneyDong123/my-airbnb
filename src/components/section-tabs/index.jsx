import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'

import classNames from "classnames"
import { TabWrapper } from './style'
import ScrollView from '../scroll-view'

const SectionTabs = memo((props) => {
  const { tabs = [], tabClick } = props

  const curIndex = useRef(0)

  function itemClickHandle(name, index) {
    curIndex.current = index
    tabClick(name)
  }

  return (
    <TabWrapper>
      <ScrollView>
        {
          tabs.map((item, index) => {
            return (
              <div
                key={index}
                className={classNames("item", {active: index === curIndex.current})}
                onClick={e => itemClickHandle(item, index)}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </TabWrapper>
  )
})

SectionTabs.propTypes = {
  tabnames: PropTypes.array,
}

export default SectionTabs