import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
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
                <a href="..." className="justify-between">
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
                    <a href="...">Service</a>
                  </li>
                  <li>
                    <a href="...">Dealership</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="...">About Us</a>
              </li>
              <li tabIndex={0}>
                <a href="..." className="justify-between">
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
                    <a href="...">Inventory 1</a>
                  </li>
                  <li>
                    <a href="...">Inventory 2</a>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <a href="..." className="justify-between">
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
                    <a href="...">Service 1</a>
                  </li>
                  <li>
                    <a href="...">Service 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="...">Blog</a>
              </li>
              <li tabIndex={0}>
                <a href="..." className="justify-between">
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
                    <a href="...">Page 1</a>
                  </li>
                  <li>
                    <a href="...">Page 2</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a href="..." className="btn btn-ghost normal-case text-xl">
            <span className="text-lime-500">AUTO</span> HIVE
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex={0}>
              <a href="..." className="justify-between">
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
                  <a href="...">Service</a>
                </li>
                <li>
                  <a href="...">Dealership</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="...">About Us</a>
            </li>
            <li tabIndex={0}>
              <a href="..." className="justify-between">
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
                  <a href="...">Inventory 1</a>
                </li>
                <li>
                  <a href="...">Inventory 2</a>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <a href="..." className="justify-between">
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
                  <a href="...">Service 1</a>
                </li>
                <li>
                  <a href="...">Service 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="...">Blog</a>
            </li>
            <li tabIndex={0}>
              <a href="..." className="justify-between">
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
                  <a href="...">Page 1</a>
                </li>
                <li>
                  <a href="...">Page 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="..." className="btn">
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
