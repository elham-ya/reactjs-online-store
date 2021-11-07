import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../Actions/productAction'
import ProductItem from '../UI/ProductItem';
import Pagination from '../UI/Pagination';


const ProductScreen = () => {

    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { error, loading, products, page, pagecount } = productList
    const query = new URLSearchParams(useLocation().search);
    const categoryId = query.get("categories");


    useEffect(() => {
        dispatch(listProducts(categoryId))
    }, [dispatch, categoryId]);

    return (
        <div className="products-page">
            <h1>محصولات</h1>
            {loading ? <h2 className="loading">Loading...</h2>
                : error ? <h3 className="err-message">{error}</h3>
                    :
                    <div className="product-grid">
                        {
                            products.map((item) => (
                                <ProductItem
                                    key={item.id}
                                    id={item.id}
                                    source={`https://shopapi.rc.liadev.ir${item.small_pic}`}
                                    alt={item.title}
                                    title={item.title}
                                    price={item.price.price}
                                    volume={item.volume}
                                    categoryId={categoryId}
                                />
                            ))
                        }

                    </div>
            }
            <Pagination page={page} pages={pagecount} id={categoryId} />
        </div>
    )
}

export default ProductScreen
