import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <h1>Links to Our Sponsors</h1>
      <span id="sponsors_box">
        <a
          href="https://github.com/about"
          rel="noreferrer"
          target="_blank"
          className="sponsor_text"
        >
          GitHub
        </a>
        <a
          href="https://www.csi.cuny.edu/"
          rel="noreferrer"
          target="_blank"
          className="sponsor_text"
        >
          College of Staten Island
        </a>
        <a
          href="https://csi.bncollege.com/shop/csi/home"
          rel="noreferrer"
          target="_blank"
          className="sponsor_text"
        >
          CSI Bookstore
        </a>
        <a
          href="https://www.csi.cuny.edu/campus-life/student-services/center-career-and-professional-development"
          rel="noreferrer"
          target="_blank"
          className="sponsor_text"
        >
          CSI Career Center
        </a>
        <a
          href="https://projecthospitality.org/"
          rel="noreferrer"
          target="_blank"
          className="sponsor_text"
        >
          Project Hospitality
        </a>
      </span>
      <p>&copy; Copyright 2021 HACK-A-PROJECT</p>
    </footer>
  );
}
