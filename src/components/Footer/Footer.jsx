import React from "react";
import logo from "/src/assets/lgs.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="bg-white">
     
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-teal-600">
            
            <img src={logo} alt="AutoDrive Logo" className="h-16 w-auto" />
          </div>

      
          <div className="mt-4 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            {/* Newsletter */}
            <div className="col-span-2">
              <div>
                
                <h2 className="text-xl font-bold text-gray-900">
                  Get the latest news!
                </h2>
              
                <p className="mt-2 text-sm text-gray-500">
                  Stay updated with AutoDrive's newest arrivals and special
                  offers directly in your inbox.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>
                <div className="border border-gray-100 p-2 focus-within:ring-3 sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="your-email@example.com"
                    className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
                  />
                  <button className="mt-1 w-full bg-teal-500 px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>

            {/* Services */}
            <div className="col-span-2 sm:col-span-1">
             
              <p className="font-medium text-gray-900 text-base">Services</p>
              
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Car Sales{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Financing{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Trade-In{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Leasing{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    After-sales Support{" "}
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-span-2 sm:col-span-1">
            
              <p className="font-medium text-gray-900 text-base">Company</p>
            
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    About Us{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Press{" "}
                  </a>
                </li>
              </ul>
            </div>

            {/* Helpful */}
            <div className="col-span-2 sm:col-span-1">
            
              <p className="font-medium text-gray-900 text-base">Helpful Links</p>
            
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Contact Us{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    FAQ{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Customer Support{" "}
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="col-span-2 sm:col-span-1">
        
              <p className="font-medium text-gray-900 text-base">Legal</p>
             
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Terms of Service{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Cookie Policy{" "}
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="col-span-2 sm:col-span-1">
          
              <p className="font-medium text-gray-900 text-base">Resources</p>
             
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Car Buying Guide{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    {" "}
                    Financing Options{" "}
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
         
            <ul className="col-span-2 flex justify-start gap-4 lg:col-span-5 lg:justify-end">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                  <FacebookIcon className="size-5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <InstagramIcon className="size-5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>
                  <TwitterIcon className="size-5" />
                </a>
              </li>

              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">LinkedIn</span>
                  <LinkedInIcon className="size-5" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">YouTube</span>
                  <YouTubeIcon className="size-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/*Copyright */}
        
        <div className="mt-4 border-t border-gray-100 pt-4">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()}. AutoDrive. All rights reserved.
            </p>
          
            <ul className="mt-4 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Cookies{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;