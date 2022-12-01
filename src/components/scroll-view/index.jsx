import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollWrapper } from './style'

const ScrollView = memo((props) => {

  const  [showLeft, setShowLeft] = useState(false)
  const  [showRight, setShowRight] = useState(false)

  const scrollContentRef = useRef()
  const currentIndexRef = useRef(0)
  const totalDistanceRef = useRef()

  useEffect(() => {
    const clientWidth = scrollContentRef.current.clientWidth
    const scrollWidth = scrollContentRef.current.scrollWidth
    totalDistanceRef.current = scrollWidth - clientWidth

    setShowRight(totalDistanceRef.current > 0)
  }, [props.children])

  function controlClickHandle(num) {
    const newIndex = currentIndexRef.current + num
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`

    currentIndexRef.current  = newIndex
    setShowRight(totalDistanceRef.current  > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ScrollWrapper>
      { showLeft && (
        <div className='control left' onClick={e => controlClickHandle(-1)}>
          <IconArrowLeft/>
        </div>
      )}
      { showRight && (
        <div className='control right' onClick={e => controlClickHandle(1)}>
          <IconArrowRight />
        </div>
      )}
      
      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView