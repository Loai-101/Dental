import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" className="header-logo-link" onClick={closeMobileMenu}>
            <img 
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756289157/1_rztcm8.webp" 
              alt="Dental Care Clinic Logo" 
              className="header-logo-image"
            />
            <h1 className="header-title">Dental Care Clinic</h1>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="header-navigation desktop-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <Link
                to="/"
                className={`header-nav-link ${location.pathname === '/' ? 'header-nav-link-active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/services"
                className={`header-nav-link ${location.pathname === '/services' ? 'header-nav-link-active' : ''}`}
              >
                Services
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/insurance"
                className={`header-nav-link ${location.pathname === '/insurance' ? 'header-nav-link-active' : ''}`}
              >
                Insurance
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/team"
                className={`header-nav-link ${location.pathname === '/team' ? 'header-nav-link-active' : ''}`}
              >
                Team
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/contact"
                className={`header-nav-link ${location.pathname === '/contact' ? 'header-nav-link-active' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'mobile-menu-button-active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-navigation ${isMobileMenuOpen ? 'mobile-navigation-open' : ''}`}>
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <Link
                to="/"
                className={`mobile-nav-link ${location.pathname === '/' ? 'mobile-nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                to="/services"
                className={`mobile-nav-link ${location.pathname === '/services' ? 'mobile-nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                to="/insurance"
                className={`mobile-nav-link ${location.pathname === '/insurance' ? 'mobile-nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                Insurance
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                to="/team"
                className={`mobile-nav-link ${location.pathname === '/team' ? 'mobile-nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                Team
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                to="/contact"
                className={`mobile-nav-link ${location.pathname === '/contact' ? 'mobile-nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
