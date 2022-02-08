import React from 'react'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const LoadMore = (props: { canLoadMore: boolean; onLoadMore: () => void }) => {
  const ref = React.useRef<HTMLDivElement>(null)

  useIntersectionObserver({
    target: ref,
    onIntersect: () => {
      if (props.canLoadMore) {
        props.onLoadMore()
      }
    },
  })

  return props.canLoadMore ? (
    <div ref={ref} className="load-more-container">
      Loading...
    </div>
  ) : (
    <div className="load-more-container no-more">没有更多了</div>
  )
}

export default LoadMore
