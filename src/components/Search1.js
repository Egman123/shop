import React, { useState } from 'react'

const Search1 = ({submitHandler1}) => {

 
    
  const onChangeHandler = (e) => {
    submitHandler1(e)
  }

  return (
    <div className='Search1'>
        <input placeholder='Search here...'  onChange={(e) => onChangeHandler(e.target.value)}/>
    </div>
  )
}

export default Search1