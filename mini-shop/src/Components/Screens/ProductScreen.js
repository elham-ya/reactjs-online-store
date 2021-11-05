import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";

const ProductScreen = () => {
    const [products, setProducts] = useState({});
    const query = new URLSearchParams(useLocation().search);
    const categoryId = query.get("categories");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(`/get_product?categories=${categoryId}`);
                setProducts(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProducts();
        console.log('products', products)
        console.log('categoryId', categoryId)
    }, [categoryId, products]);

    return (
        <div className="product-grid">

        </div>
    )
}

export default ProductScreen
