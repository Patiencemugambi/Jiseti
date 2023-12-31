import React from 'react';
import { Link } from 'react-router-dom';

function NavbarNotLoggedIn() {
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <span className="text-2xl font-semibold whitespace-nowrap">Jiseti</span>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle Menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white md:dark:border-gray-700">
            <li>
              <Link
                to="/contact"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/support"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 md:dark:hover-text-blue-500"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 md:dark:hover-text-blue-500"
              >
                Don't have an account?
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:underline md:hover-bg-transparent md:border-0 md:hover-text-blue-700 md:p-0 md:dark:hover-text-blue-500"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarNotLoggedIn;