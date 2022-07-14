import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Categories() {

  const {arrButton} = useSelector(state => state.categoryReducer)




  // console.log(chooseCategory);
  
  const dispatch = useDispatch();

  const renderButton = () => {
    return arrButton.map((sp, index) => {
      return <button  key={index} className='btn btn-primary' onClick={() =>{
        const action = {
          type: "SET_CATEGORY",
          category:sp.type
        }
        dispatch(action)
      }}>{sp.showName}</button>
    })
  }


  return (
    <div className='btn-group'>
      {renderButton()}
    </div>
  )
}
