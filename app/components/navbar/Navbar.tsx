import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <>
    <nav className="navbar bg-primary text-white shadow-md mint">
  <div className="container mx-auto flex justify-between items-center py-4 px-6">

    <div className="navbar-logo text-2xl font-extrabold">
      sunnyside
    </div>

    
    <div className="navbar-links hidden md:flex gap-6 items-center">
      <a href="#about" className="nav-link hover:text-secondary transition">About</a>
      <a href="#services" className="nav-link hover:text-secondary transition">Services</a>
        <a href="#projects" className="nav-link hover:text-secondary transition">Projects</a>
        <button className={styles.button}>Contact</button>
    </div>

    
    <div className="navbar-hamburger md:hidden cursor-pointer">
      <span className="block w-6 h-1 bg-white mb-1"></span>
      <span className="block w-6 h-1 bg-white mb-1"></span>
      <span className="block w-6 h-1 bg-white"></span>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar