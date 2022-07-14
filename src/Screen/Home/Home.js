import React, { useEffect , useState} from 'react';
import Categories from '../../Component/Category/Categories'
import Model from '../../Component/Model/Model'
import Products from '../../Component/Product/Products'
import Footer from '../../Layout/Footer/Footer'
import Header from '../../Layout/Header/Header'
import { layAPIAction } from '../../redux/actions/layAPIAction';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {

    const dispatch = useDispatch();
    
    // GEt API
    useEffect(() => {
        // axios.get('https://621e368a849220b1fc93323b.mockapi.io/Dressingroom').then((res) => {
        //     setPosts(res.data);
        //     console.log(posts);
        // })
       const action = layAPIAction;
       dispatch(action)
    },[]);

    //Lấy dữ liệu từ redux về


    return (
        <div>
            <Header></Header>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <Categories></Categories>
                        <Products></Products>
                    </div>
                    <div className='col-6'>
                        <Model></Model>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
