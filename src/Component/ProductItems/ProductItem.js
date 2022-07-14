import React from 'react'
import { useDispatch, useSelector } from 'react-redux';




export default function ProductItem(props) {
    const item = props.sanPham
    const dispatch = useDispatch();


    return (
        <div className='card p-2 my-2'>
            <img src={item.imgSrc_jpg}></img>
            <p>{item.name}</p>
            <button className='btn btn-success' onClick={() => {
                const action = {
                    type: "THU_QUAN_AO",
                    payload: {
                        type: item.type,
                        cloth: item.imgSrc_png,
                        
                    }
                }
                dispatch(action)

            }}> Thử</button>
        </div>

    )
}
