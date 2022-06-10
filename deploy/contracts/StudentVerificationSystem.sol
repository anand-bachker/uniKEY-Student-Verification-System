// SPDX-License-Identifier: NONE
pragma solidity ^0.8.4;

contract StudentVerificationSystem{
    address private adminAddress;

    struct College{
        string collegeName;
        string collegeUniqueID;
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

    struct Certificate{
        string name;
        string hash;
    }

    struct GateKeeper{
        address ID;
        string collegeUniqueID;
        bool verify;
    }

    struct OutPassIntime{
        uint intime;
    }

    struct OutPassOuttime{
        uint outtime;
    }

    mapping(address=>College) private mapAddStudent;
    mapping(string=>College) private mapCollege;
    mapping(string=>mapping(uint=>Student)) private mapStudent;
    mapping(string=>mapping(uint=>Certificate[])) private mapStudentCertificate;
    mapping(address=>GateKeeper) private mapAddOutPass;
    mapping(string=>mapping(address=>GateKeeper)) private mapGateKeeper;
    mapping(string=>mapping(uint=>OutPassIntime[])) private mapIntime;
    mapping(string=>mapping(uint=>OutPassOuttime[])) private mapOuttime;

    constructor(){
        adminAddress = msg.sender;
    }

    // Student Verification
    function addCollege(string memory _collegeName, string memory _collegeUniqueID, address _collegeAddress, string memory _collegeLocation) public{
        require(msg.sender == adminAddress);
        mapAddStudent[_collegeAddress] = College(_collegeName, _collegeUniqueID, _collegeAddress, _collegeLocation, true, block.timestamp);
        mapCollege[_collegeUniqueID] = College(_collegeName, _collegeUniqueID, _collegeAddress, _collegeLocation, true, block.timestamp);
    }

    function addStudent(uint _registrationNumber, string memory _hash) public{
        require(mapAddStudent[msg.sender].verify == true);
        mapStudent[mapAddStudent[msg.sender].collegeUniqueID][_registrationNumber] = Student(_registrationNumber, _hash, true, block.timestamp);
    }

    function removeCollege(string memory _collegeUniqueID) public{
        require(msg.sender == adminAddress);
        mapCollege[_collegeUniqueID].verify = false;
    }

    function removeStudent(uint _registrationNumber) public{
        require(mapAddStudent[msg.sender].verify == true);
        mapStudent[mapAddStudent[msg.sender].collegeUniqueID][_registrationNumber].verify = false;
    }

    function viewCollege(string memory _collegeUniqueID) public view returns(string memory, string memory, address, string memory, bool, uint){
        require(mapCollege[_collegeUniqueID].verify == true);
        return(mapCollege[_collegeUniqueID].collegeName, mapCollege[_collegeUniqueID].collegeUniqueID, mapCollege[_collegeUniqueID].collegeAddress, mapCollege[_collegeUniqueID].collegeLocation, mapCollege[_collegeUniqueID].verify, mapCollege[_collegeUniqueID].timestamp);        
    }

    function viewStudent(string memory _collegeUniqueID, uint _registrationNumber) public view returns(uint, string memory, bool, uint){
        require(mapStudent[_collegeUniqueID][_registrationNumber].verify == true);
        return(mapStudent[_collegeUniqueID][_registrationNumber].registrationNumber, mapStudent[_collegeUniqueID][_registrationNumber].hash, mapStudent[_collegeUniqueID][_registrationNumber].verify, mapStudent[_collegeUniqueID][_registrationNumber].timestamp);
    }

    // Certificates
    function addCertificate(uint _registrationNumber, string memory _name, string memory _hash) public{
        require(mapAddStudent[msg.sender].verify == true);
        mapStudentCertificate[mapAddStudent[msg.sender].collegeUniqueID][_registrationNumber].push(Certificate({
            name:_name,
            hash:_hash
        }));
    }

    function viewCertificate(string memory _collegeUniqueID, uint _registrationNumber) public view returns(Certificate[] memory){
        Certificate[] memory data = new Certificate[](mapStudentCertificate[_collegeUniqueID][_registrationNumber].length);
        for(uint index=0; index<mapStudentCertificate[_collegeUniqueID][_registrationNumber].length; index++){
            data[index] = mapStudentCertificate[_collegeUniqueID][_registrationNumber][index];
        }
        return (data);
    }

    // Out Pass
    function addGateKeeper(address _ID) public{
        require(mapAddStudent[msg.sender].verify == true);
        mapAddOutPass[_ID] = GateKeeper(_ID, mapAddStudent[msg.sender].collegeUniqueID, true);
        mapGateKeeper[mapAddStudent[msg.sender].collegeUniqueID][_ID] = GateKeeper(_ID, mapAddStudent[msg.sender].collegeUniqueID, true);
    }

    function addIntime(uint _registrationNumber) public{
        require(mapAddOutPass[msg.sender].verify == true);
        mapIntime[mapAddOutPass[msg.sender].collegeUniqueID][_registrationNumber].push(OutPassIntime({
            intime:block.timestamp
        }));
    }

    function addOuttime(uint _registrationNumber) public{
        require(mapAddOutPass[msg.sender].verify == true);
        mapOuttime[mapAddOutPass[msg.sender].collegeUniqueID][_registrationNumber].push(OutPassOuttime({
            outtime:block.timestamp
        }));
    }

    function viewOutPassData(string memory _collegeUniqueID, uint _registrationNumber) public view returns(OutPassIntime[] memory, OutPassOuttime[] memory){
        OutPassIntime[] memory InData = new OutPassIntime[](mapIntime[_collegeUniqueID][_registrationNumber].length);
        for(uint index=0; index<mapIntime[_collegeUniqueID][_registrationNumber].length; index++){
            InData[index] = mapIntime[_collegeUniqueID][_registrationNumber][index];
        }
        OutPassOuttime[] memory OutData = new OutPassOuttime[](mapOuttime[_collegeUniqueID][_registrationNumber].length);
        for(uint index=0; index<mapOuttime[_collegeUniqueID][_registrationNumber].length; index++){
            OutData[index] = mapOuttime[_collegeUniqueID][_registrationNumber][index];
        }
        return (InData, OutData);
    }
}