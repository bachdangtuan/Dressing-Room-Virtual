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
                    <h1>Logic Bài Toán</h1>
                    <p>Tổ chức redux xác định thành phần state thay đổi,sử dụng hook Khởi tạo action getAPI, và dispatch action gửi data lên redux</p>
                    <p>Link: https://621e368a849220b1fc93323b.mockapi.io/Dressingroom</p>
                    <p>Xử lý render từng sản phẩm tương ứng theo mục</p>
                    <p>Khi click vào button "Quần, Áo" sẽ gửi lên store 1 type , nếu type trùng với type ở arrSP lấy từ API về thì render</p>
                    <p>....update.....</p>
                </div>
                : renderProduct()}

        </div>

    )
}
