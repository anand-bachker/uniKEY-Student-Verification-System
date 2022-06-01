import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'

export const AboutCard = (props) => {
  return (
    <div className='w-[20vw] opacity-90 mb-[2em]'>
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4"></div>
        <div class="flex flex-col items-center pb-10">
          <img
            class="mb-3 w-24 h-24 rounded-full shadow-lg"
            src={props.img}
            alt=""
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {props.name}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {props.tag}
          </span>
          <span class="text-sm text-gray-200 dark:text-gray-400">
            {props.dec}
          </span>
          <div class="flex mt-4 space-x-3 lg:mt-6">
            <a
              href={props.linkedin}
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Linkedin <BsLinkedin className='ml-2'></BsLinkedin>
            </a>
            <a
              href={props.github}
              class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              Github <BsGithub className='ml-2'></BsGithub>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
