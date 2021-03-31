import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="header">
        <div class="container">
          <h1>
            <a href="index.html">Jonathan Mwebaze</a>
          </h1>

          <h2>
            I'm a passionate <span>Coder Designer</span> from Uganda
          </h2>

          <nav id="navbar" class="navbar">
            <ul>
              <li>
                <Link class="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link class="nav-link" to="/resume">
                  Resume
                </Link>
              </li>
              <li>
                <Link class="nav-link" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link class="nav-link" href="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link class="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div class="social-links">
            <a href="https://twitter.com/jonahgeek" class="twitter">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="https://facebook.com/jonahgeek" class="facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://instagram.com/jonahgeek" class="instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://linkedin.in/jonahgeek" class="linkedin">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
