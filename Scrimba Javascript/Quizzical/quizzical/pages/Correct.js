import React from 'react'

const Correct = (props) => {
    const { count } = props
 
  return (
    <div>
      <h1>You scored {count}/5</h1>
    </div>
  )
}

export default Correct