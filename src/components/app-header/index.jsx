import React, { memo, useRef, useState } from 'react'
import HeaderCenter from './c-cpns/header-center'
import HeaderLeft from './c-cpns/header-left'
import HeaderRight from './c-cpns/header-right/inde'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import { ThemeProvider } from 'styled-components'
import { useScrollPosition } from '@/hooks'


const AppHeader = memo(() => {

  const [isSearch, setIsSearch] = useState(false)

  const { headerConfig } = useSelector((state) => ({
    headerConfig: state.main.headerConfig,
  }), shallowEqual)

  const { isFixed, topAlpha } = headerConfig

  const { scrollY } = useScrollPosition()
  const preY = useRef(0)

  if(!isSearch) preY.current = scrollY
  if(isSearch && Math.abs(scrollY - preY.current) > 30) setIsSearch(false)

  const isAlpha = topAlpha && scrollY <= 30

  return (
    <ThemeProvider theme={{isAlpha}} >
      <HeaderWrapper className={classNames({fixed: isFixed})}>
        <div className='content'>
          <div className='top'>
            <HeaderLeft/>
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e => setIsSearch(true)}/>
            <HeaderRight/>
          </div>
          <SearchAreaWrapper isSearch={isAlpha || isSearch}/>
        </div>
        { isSearch && <div className='cover' onClick={e => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader