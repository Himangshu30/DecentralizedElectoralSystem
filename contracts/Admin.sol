// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "./ES.sol";

contract Admin {

    ES public es;

    constructor(address esAddress) {
        es = ES(esAddress);
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
    ) public {
        es.registerVoter(_name, _gender, _day, _month, _year, _uid, _constituency, _lat, _long, _phoneNumber);
    }

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
    ) public {
        es.registerCandidate(_name, _gender, _day, _month, _year, _uid, _constituency, _lat, _long, _politicalAffiliation, _phoneNumber);
    }

    function fetchCandidates(string memory _constituency) private view returns (string[] memory){
        ES.Candidate[] memory candidates = es.getCandidates(_constituency);
        string[] memory list = new string[](candidates.length);

        for (uint i = 0; i < candidates.length; i++) {
            string memory data = string(abi.encodePacked(candidates[i].name, "(", candidates[i].politicalAffiliation, ")"));
            list[i] = data;
        }

        return list;
    }

    function checkVoterValidity(string memory _uid) public view returns (string memory) {
        (string memory _msg, bool isEligible) = es.checkVoterValidity(_uid);
        return _msg;
    }

    function fetchVoterDetails(string memory _uid) public view
    returns (string memory, string memory, uint, uint, uint, string memory, string memory, int, int, bool, string[] memory) {
        ES.Voter memory voter = es.getVoterDetails(_uid);
        return (voter.name, voter.gender, voter.dob.day, voter.dob.month, voter.dob.year, voter.constituency,
        voter.phoneNumber, voter.residentalAddress.latitude, voter.residentalAddress.longitude, voter.isVoted,
        fetchCandidates(voter.constituency));
    }

    function fetchCandidateDetails(string memory _uid) public view
    returns (string memory, string memory, uint, uint, uint, string memory, string memory, int, int, string memory, uint) {
        ES.Candidate memory candidate = es.getCandidateDetails(_uid);
        return (candidate.name, candidate.gender, candidate.dob.day, candidate.dob.month, candidate.dob.year, candidate.constituency,
        candidate.phoneNumber, candidate.residentalAddress.latitude, candidate.residentalAddress.longitude,
        candidate.politicalAffiliation, candidate.votes);
    }

    function checkParty(string memory _constituency, string memory _politicalAffiliation) view  private returns (string memory) {
        if(es.checkParty(_constituency, _politicalAffiliation))
            return "This party is registerd";
        else return "This party is not registerd";
    }

}