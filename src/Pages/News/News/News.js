import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaStar } from 'react-icons/fa';

const News = () => {
    const news = useLoaderData();
    const {author, details, image_url, title, rating, category_id} = news;
    return (
        <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <div className='d-flex justify-content-around mt-3'>
            <div>
                Authore: <b>{author.name}</b>
            </div>
            <div>
                Publish Date: <b>{author.published_date}</b>
            </div>
            <div className='d-flex align-items-center'>
          <FaStar className='text-warning me-2'></FaStar>
          <span><b>{rating.number}</b></span>
        </div>
          </div>
        </Card.Body>
        <Link className='m-3' to={`/category/${category_id}`}>
            <Button variant="primary">Categories</Button>
        </Link>
      </Card>
    );
};

export default News;