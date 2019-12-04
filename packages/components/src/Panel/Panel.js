import React from 'react'

import './panel.css'
export default ({title, text}) => {
  return (
  <div className="panel">
    <h3>
      {title}
    </h3>
    <p>
      {text}
    </p>
  </div>
  )
}