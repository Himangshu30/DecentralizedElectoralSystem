// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

import "./ES.sol";

contract Voter {

    ES public es;

    constructor(address esAddress) {
        es = ES(esAddress);
    }

    function getVoterDetails(string memory _uid) public view
    returns (string memory, string memory, uint, uint, uint, string memory, string memory, int, int, bool) {
        ES.Voter memory voter = es.getVoterDetails(_uid);
        return (voter.name, voter.gender, voter.dob.day, voter.dob.month, voter.dob.year, voter.constituency,
        voter.phoneNumber, voter.residentalAddress.latitude, voter.residentalAddress.longitude, voter.isVoted);
    }

}