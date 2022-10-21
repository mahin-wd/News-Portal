import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LeftNav.css'

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/news-categories')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])

    return (
        <div>
            <h2>Newses: {categories.length}</h2>

            <div className='category'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>

    );
};

export default LeftNav;