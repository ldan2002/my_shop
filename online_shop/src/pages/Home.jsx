import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroImg from '../assets/images/hero-img.png'
import counterImg from '../assets/images/counter-timer-img.png'
import '../styles/home.css'
import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'
import Clock from '../components/UI/Clock'

const Home = () => {

  const year = new Date().getFullYear()
  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSalesProducts] = useState([])

  useEffect(() => {
    const filterdTrendingProducts = products.filter(
      (item) => item.category === "chair"
    )

    const filterdBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    )

    setTrendingProducts(filterdTrendingProducts)
    setBestSalesProducts(filterdBestSalesProducts)
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
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best_sales">
        <Container>
          <Row>
            <Col lg='12' className='text_center'>
              <h2 className='section_title'>Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="clock_top_content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock />

              <motion.button whileTap={{ scale: 1.2 }} className="buy_btn store_btn">
                <Link to='/shop'>Visit Store</Link>
              </motion.button>
            </Col>

            <Col lg='6' md='6' className='text-end'>
              <img src={counterImg} alt="counterImg" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home