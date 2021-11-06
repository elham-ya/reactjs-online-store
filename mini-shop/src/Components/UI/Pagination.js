import React from 'react';
import { Link } from 'react-router-dom'
import ArrowLeft from '../../assets/Left.png'
import ArrowRight from '../../assets/Right.png'

const Pagination = ({ pages, page, id }) => {


    return (pages > 1 && (
        <ul className="pagination">
            {[...Array(pages).keys()].map((x) => (
                <li key={x} className={x + 1 === page ? 'active' : ''}>
                    <Link
                        key={x + 1}
                        to={`?categories=${id}&page=${x + 1}`}
                    >
                        {x + 1}
                    </Link>
                </li>
            ))}
        </ul>
    )
    )
};

export default Pagination;