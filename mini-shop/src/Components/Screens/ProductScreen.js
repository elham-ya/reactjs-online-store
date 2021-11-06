import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
// import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../Actions/productAction'
import ProductItem from '../UI/ProductItem'

const ProductScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { error, loading, products } = productList
    const query = new URLSearchParams(useLocation().search);
    const categoryId = query.get("categories");

    useEffect(() => {
        dispatch(listProducts(categoryId))
    }, [dispatch]);

    return (
        <div className="products-page">
            <h1>محصولات</h1>
            <div className="product-grid">
                {
                    products.map((item) => (
                        <ProductItem
                            key={item.id}
                            source={`https://shopapi.rc.liadev.ir${item.small_pic}`}
                            alt={item.title}
                            title={item.title}
                            price={item.price.price}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default ProductScreen
