import Indicator from '@/base-ui/indicator'
import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'

const Demo = memo((props) => {

  const list = ["qwer","tyui","iopa","sdfg","hjkl","zxcv","bnm"]

  const [itemIndex, setItemIndex] = useState(0)

  function clickHandle(index) {
    let newIndex = itemIndex + index
    if(newIndex < 0) newIndex = list.length - 1
    if(newIndex > list.length - 1) newIndex = 0
    
    setItemIndex(newIndex)
  }

  return (
    <DemoWrapper>
      <div className='control'>
        <button onClick={e => clickHandle(-1)}>上一个</button>
        <button onClick={e => clickHandle(+1)}>下一个</button>
      </div>
      
      <div className='list'>
        <Indicator selectIndex={itemIndex}>
          {
            list.map((item,index) => {
              return <button key={index}>{item}</button>
            })
          }
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

Demo.propTypes = {}

export default Demo