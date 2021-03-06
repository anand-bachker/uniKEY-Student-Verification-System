import React from "react";
import { create } from 'ipfs-http-client'
import { useState } from "react";
import { ethers } from "ethers";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import StudentVerificationSystem from "../artifacts/contracts/StudentVerificationSystem.sol/StudentVerificationSystem.json";
const client = create('https://ipfs.infura.io:5001/api/v0')
const StudentVerificationSystemAddress = "0x224f1738e951291180afa7297Dc9F6c7B7bC7A4E";

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

  async function  stud (){
    const firebaseConfig = {
      apiKey: "AIzaSyDTJ_8yIfgI12Mf4H-me3SmyHemJ6M8_J0",
      authDomain: "minorblockchain.firebaseapp.com",
      databaseURL: "https://minorblockchain-default-rtdb.firebaseio.com",
      projectId: "minorblockchain",
      storageBucket: "minorblockchain.appspot.com",
      messagingSenderId: "721147850216",
      appId: "1:721147850216:web:481d55ff9084a6bb44c85d"
    };
    
    // Initialize Firebase
    const app = await initializeApp(firebaseConfig);
    const db= await getDatabase(app);
    set(ref(db,"/Students/0"+registrationNumber.toString()), {
      name:name,
      registrationNumber:registrationNumber,
      stream:stream,
      dob:dob,
      fname:fname,
      mname:mname,
      result:result,
      duration:4,   
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
    
  }

  async function setStudent() {
    if (window.ethereum) {
      await requestAccount();
      const studentData = `Student Data:\n Name: ${name}\n Registration Number: ${registrationNumber}\n Stream: ${stream}\n DOB: ${dob}\n Father Name: ${fname}\n Mother Name: ${mname}\n Result: ${result}\n Duration: ${startYear}-${endYear}`;
      const addStudentData = await client.add(studentData)
      const url = `https://ipfs.infura.io/ipfs/${addStudentData.path}`
      await setHash(url);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        StudentVerificationSystemAddress,
        StudentVerificationSystem.abi,
        signer
      );
      const transaction = await contract.addStudent(registrationNumber, hash);
      await transaction.wait();
      await stud();
      
    }

  }

  return (
    <div className="w-[450px] mx-auto my-24">
      <div className="p-4  bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
            College Portal
          </h5>
          <h5 className="text-l font-medium text-gray-900 dark:text-white text-center">
            Add Student Information
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">
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
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">
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
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">
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
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">
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
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">
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
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">
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
            className="mt-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Student
          </button>
      </div>
    </div>
  );
};
