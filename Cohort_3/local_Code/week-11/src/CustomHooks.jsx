import React from 'react'
import { usePosttitle } from './hooks/usePosttitle'


function CustomHooks() {
  const postTitle=usePosttitle()
  return (
    <div>
      {postTitle}
    </div>
  )
}

export default CustomHooks
