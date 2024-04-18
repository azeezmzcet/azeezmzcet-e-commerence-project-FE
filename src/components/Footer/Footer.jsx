import React from "react";
import logo from "../../assets/images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="w-full flex flex-col lg:flex-row justify-between items-center py-4 bg-gray-200 px-4">
        {/* Logo Section */}
        <a href="#" className="company-logo">
          <img src={logo} alt="company-logo" className="h-16 lg:h-24" />
        </a>

        {/* Link Columns */}
        <div className="flex flex-col lg:flex-row justify-around w-full lg:w-auto lg:space-x-10 mt-4 lg:mt-0">
          <div className="link-column flex flex-col text-left mb-4 lg:mb-0">
            <h4 className="font-bold">Product</h4>
            <a href="#" className="hover-link">Overview</a>
            <a href="#" className="hover-link">Pricing</a>
            <a href="#" className="hover-link">Customers Page</a>
            <a href="#" className="hover-link">Status Page</a>
          </div>

          <div className="link-column flex flex-col text-left">
            <h4 className="font-bold">Resources</h4>
            <a href="#" className="hover-link">Blogs</a>
            <a href="#" className="hover-link">Examples</a>
            <a href="#" className="hover-link">Testing Guides</a>
            <a href="#" className="hover-link">Help Center</a>
            <a href="#" className="hover-link">Careers</a>
          </div>
        </div>
      </footer>

      {/* Subfooter */}
      <div className="subfooter bg-gray-300 py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-around items-center text-center sm:text-left">
          <a href="#" className="hover-link">Privacy Policy</a>
          <a href="#" className="hover-link">Terms & Conditions</a>
          <a href="#" className="hover-link">Security Information</a>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#" className="hover-link">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="hover-link">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
