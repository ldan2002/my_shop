import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'

const Home = () => {

  const [data, setData] = useState(products)
  const year = new Date().getFullYear()

  useEffect(() => {
    const filterdProducts = products.filter(
      (item) => item.category === "chair"
    )

    setData(filterdProducts)
  }, [])

  return (
    <>
      <Helmet title={"Home"} />
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero_content">
                <p className="hero_subtitle">Trending product in {year}</p>
                <h2>Make Your More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis molestias doloremque illum reiciendis qui, doloribus amet consectetur repudiandae officia maiores.</p>
                <motion.button whileTap={{ scale: 1.2 }} className='buy_btn'>
                  <Link to='/shop'>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero_img">
                <img src={heroImg} alt="heroImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className="trending_products">
        <Container>
          <Row>
            <Col lg='12' className='text_center'>
              <h2 className='section_title'>Trending Products</h2>
            </Col>
            <ProductsList data={data} />
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home