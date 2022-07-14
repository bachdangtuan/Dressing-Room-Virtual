import React from 'react'

export default function ProductItem(props) {
    const item = props.sanPham
    return (
        <div className='card p-2 my-2'>
            <img src={item.imgSrc_jpg}></img>
            <p>{item.name}</p>
            <button className='btn btn-success'> Thử</button>
        </div>


    )
}
