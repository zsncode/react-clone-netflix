import React, { useEffect, useState } from 'react'
import './Nav.css'
const logo =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
const avatar =
  'https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png'

function Nav() {
  const [show, handleShow] = useState(false)

  const scrollListener = () =>
    window.scrollY > 100 ? handleShow(true) : handleShow(false)

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      {/* <div className="nav"> */}
      <img src={logo} alt="Netflix Logo" className="nav__logo" />
      <img src={avatar} alt="Netflix Avatar" className="nav__avatar" />
    </div>
  )
}

export default Nav
