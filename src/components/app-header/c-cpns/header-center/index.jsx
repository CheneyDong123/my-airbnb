import React, { memo, useState } from 'react'
import { CSSTransition } from "react-transition-group"

import tabData from '@/assets/data/search_titles.json'
import SearchSection from './c-cpns/search-section'
import { CenterWrapper } from './style'
import SearchTab from './c-cpns/search-tab'
import SearchBar from './c-cpns/seatch-bar'

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props

  const [tabIndex, setTabIndex] = useState(0)

  const titles = tabData.map((item) => item.title)

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={300}
        unmountOnExit={true}
      >
        <SearchBar searchBarClick={searchBarClick} />
      </CSSTransition>

      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className='search-tab'>
          <SearchTab titles={titles} tabClick={setTabIndex} tabIndex={tabIndex}/>
          <div className='infos'>
            <SearchSection searchInfo={tabData[tabIndex].searchInfos}/>
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter