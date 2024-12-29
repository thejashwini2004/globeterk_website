import React from 'react'
import './footer.css'
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap'

import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png' ;

const quick__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },

];
const quick__links2=[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  },

];

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
          <div className="logo">
          <img src={logo} alt="" />
          <p>"Follow Globe Trek on Instagram, Facebook, Twitter, and YouTube for travel tips, inspiration, and breathtaking adventures. Let’s explore the world together!"</p>
          </div>
          <div className="social__links d-flex align-items-center gap-4">
          <span>
            <Link tp='#'><i class="ri-youtube-fill"></i></Link>
          </span>
          <span>
            <Link tp='#'><i class="ri-github-fill"></i></Link>
          </span>
          <span>
            <Link tp='#'><i class="ri-facebook-circle-fill"></i></Link>
          </span>
          <span>
            <Link tp='#'><i class="ri-instagram-fill"></i></Link>
          </span>
          </div>
          </Col>
          <Col lg='3'>
          <h5 className="footer__link-title">Discover</h5>

            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>

          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Quick Links</h5>

            <ListGroup className='footer__quick-links'>
              {
                quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
          <h5 className="footer__link-title">Contact</h5>

<ListGroup className='footer__quick-links'>

      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
    <h6 className='mb-0 d-flex align-items-center gap-2'>
      <span><i class="ri-map-pin-fill"></i></span>
      Address:
    </h6>
    <p className='mb-0'>Bengaluru,karnataka</p>
      </ListGroupItem>
  
      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
    <h6 className='mb-0 d-flex align-items-center gap-2'>
      <span><i class="ri-mail-fill"></i></span>
      Email:
    </h6>
    <p className='mb-0'>Globetrek@gmail.com</p>
      </ListGroupItem>
      <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
    <h6 className='mb-0 d-flex align-items-center gap-2'>
      <span><i class="ri-phone-fill"></i></span>
      Phone:
    </h6>
    <p className='mb-0'>+023456987456</p>
      </ListGroupItem>
</ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
          <p className='copyright'>
            Copyright {year}, design and develop by Globe Trek  Team</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
