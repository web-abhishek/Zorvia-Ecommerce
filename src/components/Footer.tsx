import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-0 lg:px-0 shadow-sm'>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <aside>
               <Link to="/"> <img src={logo} alt="Logo" className="h-auto w-40" /> </Link>
                <p>
                    Providing reliable tech since 1992
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Categories</h6>
                <Link to="/products" className="link link-hover">All Products</Link>
                <Link to="/categories" className="link link-hover">All Categories</Link>
                <Link to="/cart" className="link link-hover">View Cart</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <Link to="/about" className="link link-hover">About Us</Link>
                <Link to="/contact" className="link link-hover">Contact Us</Link>
                <Link to="/profile" className="link link-hover">User Profile</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <Link to="/terms" className="link link-hover">Terms of use</Link>
                <Link to="/privacy" className="link link-hover">Privacy policy</Link>
                <Link to="/cookies" className="link link-hover">Cookie policy</Link>
            </nav>
        </footer>
        </div>
    )
}

export default Footer