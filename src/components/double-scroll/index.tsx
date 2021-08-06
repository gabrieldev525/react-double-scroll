// React
import React, { useEffect, useRef, useState } from 'react'

const DoubleScroll = ({ children }) => {
  // state
  const [contentWidth, setContentWidth] = useState('auto')

  // ref
  const scrollTopRef = useRef(null)
  const scrollBottomRef = useRef(null)

  useEffect(() => {
    updateScrollTopWidth?.()

    document.addEventListener('resize', setTopScrollWidth)

    scrollTopRef.current.onscroll = () => {
      scrollBottomRef.current.scrollLeft = scrollTopRef.current.scrollLeft
    }

    scrollBottomRef.current.onscroll = () => {
      scrollTopRef.current.scrollLeft = scrollBottomRef.current.scrollLeft
    }

    scrollBottomRef.current.onresize = setTopScrollWidth
  }, [])

  const setTopScrollWidth = () => {
    updateScrollTopWidth()
  }

  const updateScrollTopWidth = () => {
    let scrollBottomWidth = scrollBottomRef?.current?.scrollWidth

    if(scrollBottomWidth)
      scrollBottomWidth = scrollBottomWidth + 'px'
    else
      scrollBottomWidth = 'auto'

    setContentWidth(scrollBottomWidth)
  }

  console.log(scrollBottomRef?.current?.scrollWidth)

  return (
    <>
      <div style={{overflowX: 'auto'}} ref={scrollTopRef}>
        <div style={{height: '1px', margin: '0 1%;', width: contentWidth}}>&nbsp;</div>
      </div>

      <div style={{overflowX: 'auto'}} ref={scrollBottomRef}>
        {children}
      </div>
    </>
  )
}

export default DoubleScroll