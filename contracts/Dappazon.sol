// SPDX-License-Identifier: UNLICENSED
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import 'github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol';
contract Dappazon {
    string public constant name = "Dappazon";
    address public immutable owner;
    using Counters for Counters.Counter;
    Counters.Counter itemIndex;
    constructor() payable {
       owner = msg.sender;
    }
    //stores all the items in the store 
    mapping(uint => Item) public items;
    mapping(address=>Seller) sellers;
    enum ProductStatus{outOfStock , inStock , takenDown}
    struct Seller{
        string name;
        address wallet;
    }
    struct Item {
        address owner;
        uint id;
        string name;
        string cateogry; 
        string image;
        uint cost;
        uint rating ;
        ProductStatus status;

    }
    // adds Items in the list 
    function addItem(
     string memory _name , 
     string memory _cateogry , 
     string memory _image, 
     uint _cost , 
     uint _rating 
     ) public {
    Item memory item= Item(msg.sender , itemIndex.current() , _name , _cateogry , _image , _cost , _rating  , ProductStatus.inStock);
    items[itemIndex.current()] = item;
    }
}
