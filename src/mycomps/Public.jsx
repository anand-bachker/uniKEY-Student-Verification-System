import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import StudentVerificationSystem from "../artifacts/contracts/StudentVerificationSystem.sol/StudentVerificationSystem.json";
const StudentVerificationSystemAddress = "0xb6C57b724A70ABccDB28aadEe7f060A242E8F127";

export const Public = () => {
  const [collegeUniqueID, setCollegeUniqueID] = useState(null);
  const [studentRegistrationNumber, setStudentRegistrationNumber] = useState(null);

  const [data, setData] = useState(null);

  // const [registrationNumber, setRegistrationNumber] = useState(null);
  // const [hash, setHash] = useState(null);
  // const [verify, setVerify] = useState(null);
  // const [timestamp, setTimestamp] = useState(null);

  async function fetchStudentDetails() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      StudentVerificationSystemAddress,
      StudentVerificationSystem.abi,
      provider
    );
    let Data = await contract.viewStudent(
      collegeUniqueID,
      studentRegistrationNumber
    );
    setData(Data);
    console.log(data);
  }

  return (
    <div>
      <div className="w-[350px] mx-auto my-24">
        <div className="p-4  bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
              Verify Student Details
            </h5>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Unique ID
              </label>
              <input
                type="number"
                name="collegeUniqueID"
                id="collegeUniqueID"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="College Unique ID"
                required
                onChange={(e) => setCollegeUniqueID(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Registration Number
              </label>
              <input
                type="number"
                name="studentRegistrationNumber"
                id="studentRegistrationNumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Student Registration Number"
                required
                onChange={(e) => setStudentRegistrationNumber(e.target.value)}
              />
            </div>
            <button
              onClick={fetchStudentDetails}
              className="mt-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Student Data
            </button>
        </div>
      </div>
    </div>
  );
};
