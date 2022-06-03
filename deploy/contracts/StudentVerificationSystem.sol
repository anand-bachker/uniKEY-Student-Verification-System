// SPDX-License-Identifier: NONE
pragma solidity ^0.8.4;

contract StudentVerificationSystem{
    address private adminAddress;

    struct College{
        string collegeName;
        uint collegeUniqueID;
        address collegeAddress;
        string collegeLocation;
        bool verify;
        uint timestamp;
    }

    struct Student{
        uint registrationNumber;
        string hash;    // name; registrationNumber; stream; dob; fname; mname; result; duration;
        bool verify;
        uint timestamp;
    }

    mapping(address=>College) private mapAddStudent;
    mapping(uint=>College) private mapCollege;
    mapping(uint=>mapping(uint=>Student)) private mapStudent;

    constructor(){
        adminAddress = msg.sender;
    }

    function addCollege(string memory _collegeName, uint _collegeUniqueID, address _collegeAddress, string memory _collegeLocation) public{
        require(msg.sender == adminAddress);
        mapAddStudent[_collegeAddress] = College(_collegeName, _collegeUniqueID, _collegeAddress, _collegeLocation, true, block.timestamp);
        mapCollege[_collegeUniqueID] = College(_collegeName, _collegeUniqueID, _collegeAddress, _collegeLocation, true, block.timestamp);
    }

    function addStudent(uint _registrationNumber, string memory _hash) public{
        require(mapAddStudent[msg.sender].verify == true);
        mapStudent[mapAddStudent[msg.sender].collegeUniqueID][_registrationNumber] = Student(_registrationNumber, _hash, true, block.timestamp);
    }

    function removeCollege(uint _collegeUniqueID) public{
        require(msg.sender == adminAddress);
        mapCollege[_collegeUniqueID].verify = false;
    }

    function removeStudent(uint _registrationNumber) public{
        require(mapAddStudent[msg.sender].verify == true);
        mapStudent[mapAddStudent[msg.sender].collegeUniqueID][_registrationNumber].verify = false;
    }

    function viewCollege(uint _collegeUniqueID) public view returns(string memory, uint, address, string memory, bool, uint){
        return(mapCollege[_collegeUniqueID].collegeName, mapCollege[_collegeUniqueID].collegeUniqueID, mapCollege[_collegeUniqueID].collegeAddress, mapCollege[_collegeUniqueID].collegeLocation, mapCollege[_collegeUniqueID].verify, mapCollege[_collegeUniqueID].timestamp);        
    }

    function viewStudent(uint _collegeUniqueID, uint _registrationNumber) public view returns(uint, string memory, bool, uint){
        return(mapStudent[_collegeUniqueID][_registrationNumber].registrationNumber, mapStudent[_collegeUniqueID][_registrationNumber].hash, mapStudent[_collegeUniqueID][_registrationNumber].verify, mapStudent[_collegeUniqueID][_registrationNumber].timestamp);
    }
}