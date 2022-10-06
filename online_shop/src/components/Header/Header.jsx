import React from 'react'
import './header.css'
import { Container, Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

const nav_link = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },
]

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nav_wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                {/* <li className="nav_item">
                  <NavLink to='home'>Home</NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to='home'>Shop</NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to='home'>Cart</NavLink>
                </li> */}
                {
                  nav_link.map((item, index) => (
                    <li className="nav_item" key={index}>
                      <NavLink to={item.path}
                        className={(navClass) => navClass.isActive ? 'nav_active' : ''}
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="nav_icons">
              <span className='fav_icon'>
                <i class="ri-heart-line"></i>
                <span className='badge'>1</span>
              </span>
              <span className='cart_icon'>
                <i class="ri-shopping-bag-line"></i>
                <span className='badge'>2</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.3 }} src={userIcon} alt="userIcon" />
              </span>
            </div>

            <div className="mobile_menu">
              <span><i class="ri-menu-line"></i></span>
            </div>

          </div>
        </Row>
      </Container>
    </header >
  )
}

export default Header