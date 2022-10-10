import React from 'react'
import './footer.css'
import logo from '../../assets/images/eco-logo.png'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footers>
      <footer className='footer'>
        <Container>
          <Row>
            <Col lg='4' className='mb-4'>
              <div className="logo">
                <img src={logo} alt="logo" />
                <div>
                  <h1>Multimart</h1>
                </div>
              </div>
              <p className="footer_text mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad itaque atque asperiores provident obcaecati aspernatur esse facere, quis iure dicta.
              </p>
            </Col>

            <Col lg='3' className='mb-4'>
              <div className="footer_quick-links">
                <h4 className="quick_links-title">Top Categories</h4>
                <ListGroup className='mb-3'>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Mobile Phones</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Modern Sofa</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Arm Chair</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Smart Watches</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>

            <Col lg='2' className='mb-4'>
              <div className="footer_quick-links">
                <h4 className="quick_links-title">Userful Links</h4>
                <ListGroup className='mb-3'>
                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/shop'>Shop</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/cart'>Cart</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='/login'>Login</Link>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0'>
                    <Link to='#'>Privacy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>

            <Col lg='3'>
              <div className="footer_quick-links">
                <h4 className="quick_links-title">Contact</h4>
                <ListGroup className='footer_contact'>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                    <span><i class="ri-map-pin-line"></i></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0 d-flex gap-1'>
                    <span><i class="ri-phone-line"></i></span>
                    <p>+84 33 492 0373</p>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0 d-flex gap-2'>
                    <span><i class="ri-mail-line"></i></span>
                    <p>ledaian22@gmail.com</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>

          </Row>
        </Container>
      </footer>

      <Col lg='12' className="footer_copyright">
        <p>Clone 2022 - {year} by An Le Dai and Duy Nguyen Ba</p>
        github: <a href="https://github.com/ldan2002/my_shop" style={{ textDecoration: 'none' }}>https://github.com/ldan2002/my_shop</a>
      </Col>
    </footers>
  )
}

export default Footer