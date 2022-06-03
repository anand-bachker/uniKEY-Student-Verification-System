import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import StudentVerificationSystem from "../artifacts/contracts/StudentVerificationSystem.sol/StudentVerificationSystem.json";
const StudentVerificationSystemAddress =
  "0x938292a760EA13e6386Cd04F212350D025AA3C5e";

export const MA = () => {
  const [collegeName, setCollegeName] = useState(null);
  const [collegeUniqueID, setCollegeUniqueID] = useState(null);
  const [collegeAddress, setCollegeAddress] = useState(null);
  const [collegeLocation, setCollegeLocation] = useState(null);

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function setCollege() {
    await requestAccount();
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        StudentVerificationSystemAddress,
        StudentVerificationSystem.abi,
        signer
      );
      const transaction = await contract.addCollege(
        collegeName,
        collegeUniqueID,
        collegeAddress,
        collegeLocation
      );
      await transaction.wait();
    }
  }

  return (
    <div>
      <div className="w-[450px] mx-auto my-24">
        <div className="p-4  bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
              Admin Portal
            </h5>
            <h5 className="text-l font-medium text-gray-900 dark:text-white text-center">
              Add College Information
            </h5>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="collegeName"
                id="collegeName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="College Name"
                required
                onChange={(e) => setCollegeName(e.target.value)}
              />
            </div>
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
                Address
              </label>
              <input
                type="text"
                name="collegeAddress"
                id="collegeAddress"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="College Address"
                required
                onChange={(e) => setCollegeAddress(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Location
              </label>
              <input
                type="text"
                name="collegeLocation"
                id="collegeLocation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="College Location"
                required
                onChange={(e) => setCollegeLocation(e.target.value)}
              />
            </div>
            <button
            onClick={setCollege}
            className="mt-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add College
          </button>
        </div>
      </div>
    </div>
  );
};
