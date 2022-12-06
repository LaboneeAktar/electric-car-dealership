import React from "react";
import { FaShoppingBasket, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 py-3 shadow-lg mb-3 lg:px-36">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li tabIndex={0}>
                <a href="/" className="justify-between">
                  Home
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a href="/service">Service</a>
                  </li>
                  <li>
                    <a href="/dealership">Dealership</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li tabIndex={0}>
                <a href="/inventory" className="justify-between">
                  Inventory
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a href="/inventory1">Inventory 1</a>
                  </li>
                  <li>
                    <a href="/inventory2">Inventory 2</a>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <a href="/services" className="justify-between">
                  Services
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a href="/service1">Service 1</a>
                  </li>
                  <li>
                    <a href="/service2">Service 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li tabIndex={0}>
                <a href="/pages" className="justify-between">
                  Pages
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a href="/page1">Page 1</a>
                  </li>
                  <li>
                    <a href="/page2">Page 2</a>
                  </li>
                </ul>
              </li>
              <span className="flex items-center">
                <FaUserCircle className="text-lime-500 mr-4 text-xl" />
                <FaShoppingBasket className="text-lime-500 ms-4 text-xl mr-4" />
              </span>
              <button className=" bg-lime-500 text-white font-normal px-4 rounded-sm hover:bg-lime-200 hover:text-black">
                Add Listing
              </button>
            </ul>
          </div>
          <a href="..." className="btn btn-ghost normal-case text-xl">
            <span className="text-lime-500">AUTO</span> HIVE
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex={0}>
              <a href="/">
                Home
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a href="/service">Service</a>
                </li>
                <li>
                  <a href="/dealership">Dealership</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li tabIndex={0}>
              <a href="/services" className="justify-between">
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a href="/service1">Service 1</a>
                </li>
                <li>
                  <a href="/service2">Service 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li tabIndex={0}>
              <a href="/pages" className="justify-between">
                Pages
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a href="/page1">Page 1</a>
                </li>
                <li>
                  <a href="/page2">Page 2</a>
                </li>
              </ul>
            </li>
            <span className="flex items-center">
              <FaUserCircle className="text-lime-500 mr-4 text-xl" />
              <FaShoppingBasket className="text-lime-500 ms-4 text-xl mr-4" />
            </span>
            <button className=" bg-lime-500 text-white font-normal px-4 rounded-sm hover:bg-lime-200 hover:text-black">
              Add Listing
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
