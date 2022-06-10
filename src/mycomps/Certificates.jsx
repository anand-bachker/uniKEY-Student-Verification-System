import React from "react";
import { create } from "ipfs-http-client";
import { useState } from "react";
import { ethers } from "ethers";
import StudentVerificationSystem from "../artifacts/contracts/StudentVerificationSystem.sol/StudentVerificationSystem.json";
const client = create("https://ipfs.infura.io:5001/api/v0");
const StudentVerificationSystemAddress =
  "0xE7aF8190bf5311E4f99CC60491650e38186d5cd2";

export const Certificates = () => {
  const [registrationNumber, setRegistrationNumber] = useState(null);
  const [achievementName, setAchievementName] = useState(null);
  const [collegeUniqueID, setCollegeUniqueID] = useState(null);

  const [file, setFile] = useState(null);
  const [hash, setHash] = useState(null);

  const [data, setData] = useState(null);

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function setCertificate() {
    if (window.ethereum) {
      await requestAccount();
      const addCertificate = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${addCertificate.path}`;
      await setHash(url);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        StudentVerificationSystemAddress,
        StudentVerificationSystem.abi,
        signer
      );
      const transaction = await contract.addCertificate(
        registrationNumber,
        achievementName,
        hash
      );
      await transaction.wait();
    }
  }

  async function fetchStudentCertificates() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      StudentVerificationSystemAddress,
      StudentVerificationSystem.abi,
      provider
    );
    let Data = await contract.viewCertificate(collegeUniqueID, registrationNumber);
    setData(Data);
    console.log(`\n Data: ${data}`);
  }

  return (
    <div>
      <div className="w-[450px] mx-auto my-24">
        <div className="p-4  bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="text-l font-medium text-gray-900 dark:text-white text-center">
            Add Student Achievements
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">
              Registration Number
            </label>
            <input
              type="number"
              name="registrationNumber"
              id="registrationNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Student Registration Number"
              required
              onChange={(e) => setRegistrationNumber(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">
              Achievement Name
            </label>
            <input
              type="text"
              name="achievementName"
              id="achievementName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Student's Achievement"
              required
              onChange={(e) => setAchievementName(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">
              Upload Certificate
            </label>
            <input
              type="file"
              name="certificate"
              id="certificate"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Upload Certificate"
              required
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <button
            onClick={setCertificate}
            className="mt-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Certificate
          </button>
        </div>
      </div>
      <div className="w-[450px] mx-auto my-24">
        <div className="p-4  bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="text-l font-medium text-gray-900 dark:text-white text-center">
            View Student Achievements
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">
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
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">
              Registration Number
            </label>
            <input
              type="number"
              name="registrationNumber"
              id="registrationNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Student Registration Number"
              required
              onChange={(e) => registrationNumber(e.target.value)}
            />
          </div>
          <button
            onClick={fetchStudentCertificates}
            className="mt-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Certificate
          </button>
        </div>
      </div>
    </div>
  );
};
