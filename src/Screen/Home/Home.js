import React, { useEffect , useState} from 'react';
import Categories from '../../Component/Category/Categories'
import Model from '../../Component/Model/Model'
import Products from '../../Component/Product/Products'
import axios from 'axios'
import Footer from '../../Layout/Footer/Footer'
import Header from '../../Layout/Header/Header'
import { layAPIAction } from '../../redux/actions/layAPIAction';

export default function Home() {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        layAPIAction()
    });

    return (
        <div>
            <Header></Header>
            <div className='container-fluid'>
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
