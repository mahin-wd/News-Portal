import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>News: {allNews.length}</h2>
        </div>
    );
};

export default News;