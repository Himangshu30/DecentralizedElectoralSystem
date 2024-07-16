// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract ES {
    // enum Gender { Male, Female, Transgender, Non_binary }
    enum UserType {
        Administrator,
        Voter
    }

    struct Location {
        int256 latitude; // Latitude multiplied by 10^6 (microdegrees)
        int256 longitude; // Longitude multiplied by 10^6 (microdegrees)
    }

    struct DOB {
        uint256 day;
        uint256 month;
        uint256 year;
    }

    struct Voter {
        string name;
        string gender;
        DOB dob;
        string uid; //Encrypted
        string constituency;
        Location residentalAddress;
        string phoneNumber; //Encrypted
        bool isVoted;
    }

    struct Candidate {
        string name;
        string gender;
        DOB dob;
        string uid; //Encrypted
        string constituency;
        Location residentalAddress;
        string politicalAffiliation;
        string phoneNumber; //Encrypted
        uint256 votes;
    }

    mapping(string => Voter) public voters;
    mapping(string => Candidate) public candidates;
    mapping(string => Candidate[]) public constituencies;
    UserType public userType;
    // string[] private constituencyList;
    string[] public parties;
    mapping(string => uint256) private partyIndex;

    constructor() {
        if (msg.sender == 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4) {
            userType = UserType.Administrator;
        } else {
            userType = UserType.Voter;
        }
    }

    modifier onlyAdministrator() {
        require(
            userType == UserType.Administrator,
            "Only administrators can call this function"
        );
        _;
    }

    function addParty(string memory party) public onlyAdministrator {
        require(partyIndex[party] == 0, "Party already exists");
        parties.push(party);
        partyIndex[party] = parties.length; // Store index + 1 to differentiate from default value 0
    }

    function getPartyIndex(string memory party)
        public
        view
        onlyAdministrator
        returns (uint256)
    {
        require(partyIndex[party] != 0, "Party does not exist");
        return partyIndex[party] - 1; // Subtract 1 to get the correct index
    }

    function initializeParties() public onlyAdministrator {
        addParty("BJP");
        addParty("TMC");
        addParty("CPIM");
        addParty("AAP");
        addParty("INC");
    }

    function registerVoter(
        string memory _name,
        string memory _gender,
        uint256 _day,
        uint256 _month,
        uint256 _year,
        string memory _uid,
        string memory _constituency,
        int256 _lat,
        int256 _long,
        string memory _phoneNumber
    ) external onlyAdministrator {
        voters[_uid] = Voter(
            _name,
            _gender,
            DOB(_day, _month, _year),
            _uid,
            _constituency,
            Location(_lat, _long),
            _phoneNumber,
            false
        );
    }

    //Register flow -> BJP, TMC, CPIM, AAP,

    function registerCandidate(
        string memory _name,
        string memory _gender,
        uint256 _day,
        uint256 _month,
        uint256 _year,
        string memory _uid,
        string memory _constituency,
        int256 _lat,
        int256 _long,
        string memory _politicalAffiliation,
        string memory _phoneNumber
    ) external onlyAdministrator {

        require(
            bytes(candidates[_uid].name).length == 0,
            "Candidate with this UID is already exists"
        );

        require(checkParty(_constituency, _politicalAffiliation),
        "Multiple candidates can't register for a same party in the same constituency");

        Candidate memory candidate = Candidate(
            _name,
            _gender,
            DOB(_day, _month, _year),
            _uid,
            _constituency,
            Location(_lat, _long),
            _politicalAffiliation,
            _phoneNumber,
            0
        );
        candidates[_uid] = candidate;
        constituencies[_constituency].push(candidate);
    }

    function getCandidates(string memory _constituency)
        external
        view
        returns (Candidate[] memory)
    {
        uint256 candidateCount = constituencies[_constituency].length;
        Candidate[] memory candidatesList = new Candidate[](candidateCount);
        for (uint256 i = 0; i < candidateCount; i++) {
            candidatesList[i] = constituencies[_constituency][i];
        }
        return candidatesList;
    }

    function checkVoterValidity(string memory _uid) external view returns (string memory, bool) {
        if(bytes(voters[_uid].name).length != 0)
            return ("Voter is not registered", false);
        else if(!voters[_uid].isVoted)
            return ("Voter is already voted", false);
        else
            return ("", true);
    }

    function getVoterDetails(string memory _uid)
        external
        view
        returns (Voter memory)
    {
        require(bytes(voters[_uid].name).length != 0, "Voter is not registered");
        return voters[_uid];
    }

    function getCandidateDetails(string memory _uid)
        external
        view
        returns (Candidate memory)
    {
        require(bytes(candidates[_uid].name).length != 0, "Candidate is not registered");
        return candidates[_uid];
    }

    function vote(
        string memory _voter_uid,
        string memory _constituency,
        uint256 _index
    ) external {
        require(
            bytes(constituencies[_constituency][_index].name).length != 0,
            "Enter your vote to a valid candidate"
        );

        require(!voters[_voter_uid].isVoted,
        "You are already voted");

        constituencies[_constituency][_index].votes += 1;
            candidates[constituencies[_constituency][_index].uid].votes += 1;
            voters[_voter_uid].isVoted = true;
    }

    function compareStrings(string memory _str1, string memory _str2)
        private
        pure
        returns (bool)
    {
        bytes32 hash1 = keccak256(abi.encodePacked(_str1));
        bytes32 hash2 = keccak256(abi.encodePacked(_str2));
        return hash1 == hash2;
    }

    function checkParty(string memory _constituency, string memory _politicalAffiliation) view public returns (bool) {
        bool check = true;
        for(uint i = 0; i < constituencies[_constituency].length; i++) {
            if(keccak256(abi.encodePacked(constituencies[_constituency][i].politicalAffiliation)) == keccak256(abi.encodePacked(_politicalAffiliation)))
                check = false;
        }
        return check;
    }

    // function strToGender(string memory _strGender) private pure returns (Gender) {
    //     if (keccak256(abi.encodePacked(_strGender)) == keccak256(abi.encodePacked("Male"))) {
    //         return Gender.Male;
    //     } else if (keccak256(abi.encodePacked(_strGender)) == keccak256(abi.encodePacked("Female"))) {
    //         return Gender.Female;
    //     } else {
    //         revert("Invalid gender. Please specify Male or Female.");
    //     }
    // }
}
