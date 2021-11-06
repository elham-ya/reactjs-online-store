import React, { useEffect, useState } from 'react';
import CategoryItem from '../UI/CategoryItem';
import axios from "axios";

const CategoryScreen = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {

        async function fetchCategories() {
            const { data } = await axios.get('/get_categories');
            setCategory(data);
        }
        fetchCategories();
    }, []);

    return (
        <div className="category-page">
            <h1>دسته بندی</h1>
            <div className="category-grid">
                {
                    category.map((item) => (
                        <CategoryItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                        />
                    ))
                }
            </div>
        </div>
    )
};

export default CategoryScreen;