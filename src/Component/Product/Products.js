import React from 'react'
import ProductItem from '../ProductItems/ProductItem'
import { useSelector } from 'react-redux';

export default function Products() {

    const { arrSP } = useSelector(state => state.layAPIReducer)

    const { chooseCategory } = useSelector(state => state.categoryReducer)

    const renderProduct = () => {
        return arrSP.filter(item => item.type === chooseCategory).map((sp, index) => {
            return <div className='col-4' key={index}>
                <ProductItem sanPham={sp}></ProductItem>
            </div>
        })
    }

    return (

        <div className='row'>
            {chooseCategory === 'top' ?

                <div className='container text-center'>
                    <h1>Thử Đồ Online</h1>
                </div>
                : renderProduct()}

        </div>

    )
}
