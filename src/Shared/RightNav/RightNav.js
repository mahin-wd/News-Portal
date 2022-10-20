import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Carouser from '../Carousel/Carousel/Carouser';



const RightNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"><FaGoogle/> Login With Google</Button>
                <Button variant="outline-dark"><FaGithub/> Login With GitHub</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facrbook</ListGroup.Item>
                    <ListGroup.Item><FaWhatsapp/> Whatsapp</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <Carouser></Carouser>
            </div>
        </div>
    );
};

export default RightNav;