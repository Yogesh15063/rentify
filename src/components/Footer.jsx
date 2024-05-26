import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">&copy; 2024 Rentify. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-4">
              <li>
                <a href="#" className="hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
