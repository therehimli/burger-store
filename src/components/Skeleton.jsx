import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="127" cy="98" r="100" />
    <circle cx="200" cy="288" r="2" />
    <rect x="0" y="208" rx="10" ry="10" width="280" height="28" />
    <rect x="102" y="260" rx="10" ry="10" width="60" height="40" />
    <rect x="60" y="429" rx="0" ry="0" width="5" height="3" />
    <rect x="74" y="318" rx="20" ry="20" width="120" height="40" />
  </ContentLoader>
)

export default Skeleton
