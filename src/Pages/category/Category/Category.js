import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>Category: {allNews.length}</h2>
        </div>
    );
};

export default Category;