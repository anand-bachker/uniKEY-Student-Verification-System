import React from "react";

export const DescriptionContent = () => {
  return (
    <div className=" flex justify-center items-center ">
    <div className="w-[70vw]">
      <div className="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 opacity-90">
        <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          uniKEY: Student Verification System
        </h5>
        <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          uniKEY is a student Verification system that allows anyone to verify the college identity of a student. 
        </p>
        <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        </div>
      </div>
    </div>
    </div>
  );
};
