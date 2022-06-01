import React from "react";

export const Footer = () => {
  return (
    <div id="Contact">
      <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="https://flowbite.com" class="flex items-center">
              <img
                src="data:image/png;base64,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"
                class="mr-3 h-8"
                alt="FlowBite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Unikey
              </span>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul class="text-gray-600 dark:text-gray-400">
                <li class="mb-4">
                  <a href="https://flowbite.com" class="hover:underline">
                    Flowbite
                  </a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" class="hover:underline">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul class="text-gray-600 dark:text-gray-400">
                <li class="mb-4">
                  <a
                    href="https://github.com/anand-bachker/minor_blockchain"
                    class="hover:underline "
                  >
                    Github
                  </a>
                </li>

              </ul>
            </div>
            <div>

            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="./" class="hover:underline">
              Unikey™
            </a>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="./"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

          </div>
        </div>
      </footer>
    </div>
  );
};
