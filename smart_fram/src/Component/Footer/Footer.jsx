import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p className="text-gray-400">
            We connect farmers and customers, offering fresh, organic products
            directly from the farm. Join us in promoting sustainable living.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/menu" className="text-gray-400 hover:text-white">
                Menu
              </a>
            </li>
            <li className="mb-2">
              <a href="/about" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <p className="text-gray-400">Phone: +91 93920 34144</p>
          <p className="text-gray-400">Email: fulsorecoding4268@gmail.com</p>
          <p className="text-gray-400">Location: Hyderabad, India</p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-gray-400">
        <p>&copy; 2024 Smart Farm. All Rights Reserved. Fulsore</p>
      </div>
    </footer>
  );
}

export default Footer;
