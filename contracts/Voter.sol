// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "./ES.sol";

contract Voter {

    ES public es;

    constructor(address esAddress) {
        es = ES(esAddress);
    }

    function fetchVoterDetails(string memory _uid) public view
    returns (string memory, string memory, uint, uint, uint, string memory, string memory, int, int, bool, string[] memory) {
        ES.Voter memory voter = es.getVoterDetails(_uid);
        return (voter.name, voter.gender, voter.dob.day, voter.dob.month, voter.dob.year, voter.constituency,
        voter.phoneNumber, voter.residentalAddress.latitude, voter.residentalAddress.longitude, voter.isVoted,
        fetchCandidates(voter.constituency));
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

    function vote(
        string memory _voter_uid,
        string memory _constituency,
        uint256 _index
    ) public returns (string memory) {
        (string memory _msg, bool isEligible) = es.checkVoterValidity(_voter_uid);
        if(isEligible) {
        es.vote(_voter_uid, _constituency,  _index);
        return "Voted successfully";
        } else {
            return _msg;
        }
    }

}