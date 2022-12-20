import React from 'react';

import Category from './category';

import { useCart } from '../contexts/cart';

export default (props) => {
  const { products } = useCart();

  return (
    <>
      <header>
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="w-full text-red-700 md:text-left text-2xl font-semibold">
              <a href="/">Shop</a>
            </div>
            <div className="flex items-center justify-end w-full lg:w-2/5 lg:justify-around">
              <button className="text-gray-600">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </button>
              <button className="text-gray-600 ml-4 lg:ml-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
              <a href="/cart">
                <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                  <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                  {products && products.length}
                  </span>
                </button>
              </a>

              <div className="flex sm:hidden">
                <button
                  type="button"
                  className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <nav className="hidden sm:flex sm:justify-center sm:items-center mt-4 ">
            <div className="flex flex-col sm:flex-row">
              <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/">
                Home
              </a>
              <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/products">
                Shop
              </a>
              <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="/about">
                About
              </a>
              <div className="lg:-mt-2 lg:ml-4">
                <button className="border font-mono p-2 w-1/3 bg-lime-300 border-black shadow-offset-black lg:w-24 lg:mr-8">
                  Log In
                </button>
                <button className="ml-2 border font-mono p-2 w-1/3 bg-lime-300 border-black shadow-offset-black lg:w-24 mr-4 lg:mr-8">
                  Sign Up
                </button>
              </div>
            </div>
          </nav>
          <Category />
        </div>
      </header>

      <main className="my-8">
        <div className="bg-white">
          <div className="container mx-auto px-6">{props.children}</div>
        </div>
      </main>

      <footer className="m-3 p-3 border-slate-300 border-y border-b-0">
        <div className="text-center">Powered by Shop @2022</div>
      </footer>
    </>
  );
};
