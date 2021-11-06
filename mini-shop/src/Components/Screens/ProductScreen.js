import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import axios from "axios";

const ProductScreen = () => {
    const [products, setProducts] = useState({});
    const query = new URLSearchParams(useLocation().search);
    const categoryId = query.get("categories");

    useEffect(() => {

        async function fetchProducts() {

            const { data } = await axios.get(`/get_product?categories=${categoryId}`);
            setProducts(data);

        };
        fetchProducts();

        console.log('products', products);
        console.log('categoryId', categoryId);
    }, [categoryId, products]);

    return (
        <div className="product-grid">

        </div>
    )
}

export default ProductScreen
