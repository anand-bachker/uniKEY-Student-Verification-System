import React from "react";

export const Navbar = () => {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="./" class="flex items-center">
          <img
            src="data:image/png;base64,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"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            UniKey
          </span>
        </a>
        <div class="flex md:order-2">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="mobile-menu-4"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-4"
        >
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="./"
                class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="./"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="./"
                class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
