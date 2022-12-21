import React, { useEffect, useState } from 'react';

import Category from './category';

import { useCart } from '../contexts/cart';

export default (props) => {
  const { productsNumber } = useCart();

  return (
    <div className="container mx-auto pb-6">
      <div className="grid grid-cols-4 gap-4 relative">
        <header className="col-start-1 col-end-5 fixed">
          <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
              <a href="/" class="flex items-center">
                <span class="self-center text-3xl text-red-700 font-semibold whitespace-nowrap dark:text-white">
                  Shop
                </span>
              </a>
              <div class="flex items-center">
                <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                  <li>
                    <a
                      href="#"
                      class="text-gray-900 dark:text-white hover:underline"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">
                      Category
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">
                      Team
                    </a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">
                      Features
                    </a>
                  </li>
                </ul>
              </div>
              <div class="flex items-center">
                <a
                  href="#"
                  class="text-sm mr-6 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Login
                </a>
                <a
                  href="tel:5541251234"
                  class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
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
                  <span className="sr-only">account</span>
                </a>
                <a
                  href="tel:5541251234"
                  class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 "
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
                  <span className="sr-only">Favorite</span>
                </a>
                <a
                  href="/cart"
                  class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 inline"
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
                    {productsNumber}
                  </span>
                  <span className="sr-only">Cart</span>
                </a>
              </div>
            </div>
          </nav>
          <Category />
        </header>

        <div className="col-start-1 col-end-5  mt-48">
          {props.children}
          <p className="flex justify-end text-sm text-gray-500">Images provided by  <a href='https://www.iga.net' className='text-blue-800'>&nbsp;IGA</a></p>
        </div>

        <footer className="col-start-1 col-end-5 m-3 p-3 border-slate-300 border-y border-b-0">
          <div className="text-center">Powered by Shop @2022</div>
        </footer>
      </div>
    </div>
  );
};
