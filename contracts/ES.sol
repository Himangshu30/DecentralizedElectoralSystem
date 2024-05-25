// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

// import "hardhat/console.sol";

contract ES {

    enum Gender { Male, Female, Transgender, Non_binary }
    enum UserType { Administrator, Voter }

    struct Location {
        int latitude;  // Latitude multiplied by 10^6 (microdegrees)
        int longitude; // Longitude multiplied by 10^6 (microdegrees)
    }

    struct DOB {
        uint day;
        uint month;
        uint year;
    }

    struct Voter {
        string name;
        Gender gender;
        DOB dob;
        string uid; //Encrypted
        string constituency;
        Location residentalAddress;
        string phoneNumber;  //Encrypted
        bool isVoted;
    }

    struct Candidate {
        string name;
        Gender gender;
        DOB dob;
        string uid; //Encrypted
        string constituency;
        Location residentalAddress;   
        string politicalAffiliation;
        string phoneNumber; //Encrypted
        uint votes;
    }

    mapping(string => Voter) public voters;
    mapping(string => Candidate) public candidate;
    mapping(string => Candidate[]) public constituencies;
    UserType public userType;

    constructor() {
        if(msg.sender == 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4) {
            userType = UserType.Administrator;
        } else {
            userType = UserType.Voter;
        }
    }

    modifier onlyAdministrator() {
        require(userType == UserType.Administrator, "Only administrators can call this function");
        _;
    }

    function registerVoter(
        string memory _name,
        string memory _gender,
        uint _day,
        uint _month,
        uint _year,
        string memory _uid,
        string memory _constituency,
        int _lat,
        int _long,
        string memory _phoneNumber
    ) public onlyAdministrator { 
        voters[_uid] = Voter(_name, strToGender(_gender), DOB(_day, _month, _year), _uid, _constituency,
        Location(_lat, _long), _phoneNumber, false);
    }

    function registerCandidate(
        string memory _name,
        string memory _gender,
        uint _day,
        uint _month,
        uint _year,
        string memory _uid,
        string memory _constituency,
        int _lat,
        int _long,
        string memory _politicalAffiliation,
        string memory _phoneNumber
    ) public onlyAdministrator { 
            constituencies[_constituency].push(Candidate(_name, strToGender(_gender), DOB(_day, _month, _year), _uid, _constituency,
            Location(_lat, _long), _politicalAffiliation, _phoneNumber, 0));
    }

    function getCandidates(
        string memory _constituency
    ) public view returns (Candidate[] memory) {
        uint256 candidateCount = constituencies[_constituency].length;
        Candidate[] memory candidates = new Candidate[](candidateCount);
        for (uint256 i = 0; i < candidateCount; i++) {
            candidates[i] = constituencies[_constituency][i];
        }
        return candidates;
    }

    function getVoterDetails(string memory _uid) public view returns (Voter memory) {
        return voters[_uid];
    }

    function compareStrings(string memory _str1, string memory _str2) public pure returns (bool) {
        bytes32 hash1 = keccak256(abi.encodePacked(_str1));
        bytes32 hash2 = keccak256(abi.encodePacked(_str2));
        return hash1 == hash2;
    }

    function strToGender(string memory _strGender) private pure returns (Gender) {
        if (keccak256(abi.encodePacked(_strGender)) == keccak256(abi.encodePacked("Male"))) {
            return Gender.Male;
        } else if (keccak256(abi.encodePacked(_strGender)) == keccak256(abi.encodePacked("Female"))) {
            return Gender.Female;
        } else {
            revert("Invalid gender. Please specify Male or Female.");
        }
    }

}