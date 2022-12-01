import IconSearchBar from '@/assets/svg/icon_search_bar'
import React, { memo } from 'react'
import { BarWrapper } from './style'

const SearchBar = memo((props) => {
  const { searchBarClick } = props

  return (
    <BarWrapper>
      <div className='search-bar' onClick={searchBarClick}>
        <div className='text'>
          搜索房源和体验
        </div>
        <div className='icon'>
          <IconSearchBar />
        </div>
      </div>
    </BarWrapper>
  )
})

export default SearchBar