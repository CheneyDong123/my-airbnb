import React, { memo, useState } from 'react'

import filterData from '@/assets/data/filter_data.json';
import { FilterWrapper } from './style'
import classNames from 'classnames';

const EntireFilter = memo((props) => {

  const [filterItem, setFilterItem] = useState([])

  function itemClickHandle(item) {
    const newFilterItem = [...filterItem]
    if(!filterItem.includes(item)) {
      newFilterItem.push(item)
    } else {
      newFilterItem.splice(newFilterItem.indexOf(item), 1)
    }

    setFilterItem(newFilterItem)
  }

  return (
    <FilterWrapper>
      <div className='filter'>
        {
          filterData.map((item) => {
            return (
              <div
                className={classNames("item", {active: filterItem.includes(item)})}
                key={item}
                onClick={e => itemClickHandle(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter