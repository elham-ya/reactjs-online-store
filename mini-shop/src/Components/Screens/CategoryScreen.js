import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { listCategories } from '../../Actions/categoryAction';
import CategoryItem from '../UI/CategoryItem';

const CategoryScreen = () => {

    const dispatch = useDispatch();
    const categoryList = useSelector(state => state.categoryList)
    const { error, loading, categories } = categoryList

    useEffect(() => {
        dispatch(listCategories())
    }, [dispatch]);

    return (
        <div className="category-page">
            <h1>دسته بندی</h1>
            {loading ? <h2>Loading...</h2>
                : error ? <h3 className="err-message">{error}</h3>
                    :
                    <div className="category-grid">
                        {
                            categories.map((item) => (
                                <CategoryItem
                                    key={item.id}
                                    id={item.id}
                                    name={item.name}
                                    image={item.image}
                                />
                            ))
                        }
                    </div>
            }
        </div>
    )
};

export default CategoryScreen;