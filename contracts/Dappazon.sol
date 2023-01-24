// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import 'github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol';
contract Dappazon {
    string public constant name = "Dappazon";
    address public immutable owner;
    using Counters for Counters.Counter;
    Counters.Counter itemIndex;
    Counters.Counter orderIndex;
    constructor() payable {
       owner = msg.sender;
    }
    //stores all the items in the store 
    mapping(uint => Item) public items;
    // stores all the sellers in the store
    mapping(address=>Seller) sellers;
    // all the order history of the clients
    mapping(uint => Order) orders;
    enum ProductStatus{outOfStock , inStock , takenDown}
    enum DeliveryStatus{ordered , dispatched , delivered }
    modifier isSeller(){
         require(keccak256(abi.encodePacked(sellers[msg.sender].name))!= keccak256(abi.encodePacked("")));
         _;
    }

    modifier isItemOwner(uint index){
        require(items[index].owner == msg.sender , "Only item owner can make changes");
        _;
    }

    modifier canBeBought(uint index){
        require(items[index].status == ProductStatus.inStock);
        _;
    }
    struct Seller{
        string name;
        address wallet;
    }
    struct Item {
        address owner;
        uint id;
        string name;
        string cateogry; 
        // image will be a link to the ipfs file 
        string image;
        uint cost;
        uint rating ;
        ProductStatus status;

    }

    struct Order{
        address buyer;
        address seller;
        uint itemIndex;
        DeliveryStatus status ;
    }
    // adds Items in the list 
    function addItem (
     string memory _name , 
     string memory _cateogry , 
     string memory _image, 
     uint _cost , 
     uint _rating 
     ) external isSeller{
    Item memory item= Item(msg.sender , itemIndex.current() , _name , _cateogry , _image , _cost , _rating  , ProductStatus.inStock);
    items[itemIndex.current()] = item;
    }
    // to add a seller to the marketplace
    function addSeller(string calldata _name ) public {
        sellers[msg.sender] = Seller(_name , msg.sender);
    }

    function changeItemAvaliability(uint index, uint change ) external isItemOwner(index){
        if(change == 0)items[index].status = ProductStatus.outOfStock ;

        else if(change == 1)items[index].status = ProductStatus.inStock;

        else{
            items[index].status= ProductStatus.takenDown; 
        }

 
    }

    function buyItem(uint index) external  canBeBought(index){
        Item memory item  = items[index];

    }

    function changeDelieryStatus( uint index,uint change) external  isSeller isItemOwner(index){
        Order memory order  =orders[index]; 
    }
}
