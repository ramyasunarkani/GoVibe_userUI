import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-links">
  <Link to="/about">About Us</Link>
  <Link to="/policies">Policies</Link>
  <Link to="/help">Help</Link>
  </div>
  <p>&copy; 2025 GoVibe. All rights reserved.</p>
</footer>

  )
}

export default Footer