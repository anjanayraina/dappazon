// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Dappazon {
    string public constant name = "Dappazon";
    address public immutable owner;
    constructor() payable {
       owner = msg.sender;
    }
}
