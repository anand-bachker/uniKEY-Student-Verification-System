import React from "react";
import { create } from 'ipfs-http-client'
import { useState } from "react";
import { ethers } from "ethers";
// import StudentVerificationSystem from "../artifacts/contracts/StudentVerificationSystem.sol/StudentVerificationSystem.json";
const client = create('https://ipfs.infura.io:5001/api/v0')
const StudentVerificationSystemAddress = "";

export const CA = () => {
  const [name, setName] = useState(null);
  const [registrationNumber, setRegistrationNumber] = useState(null);
  const [stream, setStream] = useState(null);
  const [dob, setDOB] = useState(null);
  const [fname, setFName] = useState(null);
  const [mname, setMName] = useState(null);
  const [result, setResult] = useState(null);
  const [startYear, setStartYear] = useState(null);
  const [endYear, setEndYear] = useState(null);

  const [hash, setHash] = useState(null);

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function setStudent() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      const studentData = `Student Data:\n Name: ${name}\n Registration Number: ${registrationNumber}\n Stream: ${stream}\n DOB: ${dob}\n Father Name: ${fname}\n Mother Name: ${mname}\n Result: ${result}\n Duration: ${startYear}-${endYear}`;
      const addStudentData = await client.add(studentData)
      const url = `https://ipfs.infura.io/ipfs/${addStudentData.path}`
      await setHash(url);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        StudentVerificationSystemAddress,
        // StudentVerificationSystem.abi,
        signer
      );
      const transaction = await contract.addStudent(registrationNumber, hash);
      await transaction.wait();
    }
  }

  return (
    <div className="w-[450px] mx-auto my-24">
      <div className="p-4  bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
            College Portal
          </h5>
          <h5 className="text-l font-medium text-gray-900 dark:text-white text-center">
            Add Student Information
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="studentName"
              id="studentName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Student Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
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
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Stream
            </label>
            <input
              type="text"
              name="studentStream"
              id="studentStream"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Student's Stream"
              required
              onChange={(e) => setStream(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Student DOB"
              required
              onChange={(e) => setDOB(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Father Name
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Student's Father Name"
              required
              onChange={(e) => setFName(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Mother Name
            </label>
            <input
              type="text"
              name="mname"
              id="mname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Student's Mother Name"
              required
              onChange={(e) => setMName(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Result
            </label>
            <input
              type="bool"
              name="result"
              id="result"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Student's Result"
              required
              onChange={(e) => setResult(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Duration
            </label>
            <input
              type="month"
              name="start-year"
              id="start-year"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Student start year"
              required
              onChange={(e) => setStartYear(e.target.value)}
            />
            <input
              type="month"
              name="end-year"
              id="end-year"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Student end year"
              required
              onChange={(e) => setEndYear(e.target.value)}
            />
          </div>
          <button
            onClick={setStudent}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};
