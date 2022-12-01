import { fetchEntireDataAction } from '@/store/modules/entire/actionCreator'
import Pagination  from '@mui/material/Pagination'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PaginationWrapper } from './style'

const EntirePagination = memo((props) => {

  const { totalCount, currentPage, isLoading }  = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    isLoading: state.entire.isLoading
  }))

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20 > totalCount ? totalCount : (currentPage + 1) * 20

  const dispatch = useDispatch()
  function handleChange(e, newPage) {
    window.scrollTo(0, 0)
    dispatch(fetchEntireDataAction(newPage - 1))
  }

  return (
    <PaginationWrapper>
      { !isLoading && (
        <div className='info'>
          <Pagination count={totalPage} page={currentPage + 1} onChange={handleChange} />
          <div className="desc">
            第 {startCount} - {endCount} 个房源，共 {totalCount} 个房源
          </div>
        </div>
      )}
    </PaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination