import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsCard = ({news}) => {
    const {_id, author, details, image_url, title, total_view, rating} = news;
    
    return (
        <Card className="text-center">
      <Card.Header className='d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
          <Image className='me-3 mt-2' style={{height: '60px'}} roundedCircle src={author.img} />
          <div className='text-start mt-2'>
          <h6> <b>{author.name}</b></h6>
          <p>{author.published_date}</p>
          </div>
        </div>
        <div>
          <FaShareAlt></FaShareAlt>
          <FaBookmark></FaBookmark>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {
            details.length > 250?
            <p>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read More</Link></p> 
            :
            <p>{details}</p>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div className='d-flex align-items-center'>
          <FaStar className='text-warning me-2'></FaStar>
          <span>{rating.number}</span>
        </div>
        <div>
          <FaEye className='me-2'></FaEye>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
    );
};

export default NewsCard;