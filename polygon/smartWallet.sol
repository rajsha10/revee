// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract SmartWallet {
    address public owner;

    // Event to log deposits
    event Deposit(address indexed sender, uint256 amount);
    
    // Event to log withdrawals
    event Withdraw(address indexed receiver, uint256 amount);
    
    // Event to log fund transfers
    event Transfer(address indexed from, address indexed to, uint256 amount);

    // Modifier to restrict functions to the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can execute this function");
        _;
    }

    // Constructor sets the owner to the address that deploys the contract
    constructor() {
        owner = msg.sender;
    }

    // Function to deposit funds into the wallet
    function deposit() external payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        emit Deposit(msg.sender, msg.value);
    }

    // Function to withdraw funds from the wallet
    function withdraw(uint256 _amount) external onlyOwner {
        require(address(this).balance >= _amount, "Insufficient balance in the wallet");
        payable(owner).transfer(_amount);
        emit Withdraw(owner, _amount);
    }

    // Function to transfer funds to another address
    function transferFunds(address payable _to, uint256 _amount) external onlyOwner {
        require(address(this).balance >= _amount, "Insufficient balance in the wallet");
        require(_to != address(0), "Invalid recipient address");
        _to.transfer(_amount);
        emit Transfer(owner, _to, _amount);
    }

    // Function to check the wallet balance
    //function getBalance() external view returns (uint256) {
    //    return address(this).balance;
    //}

    uint256 private balance;

    function getBalance() public view returns (uint256) {
        return balance;
    }

    // Function to change the owner of the wallet
    function changeOwner(address _newOwner) external onlyOwner {
        require(_newOwner != address(0), "New owner address cannot be zero");
        owner = _newOwner;
    }

    // Fallback function to receive Ether directly
    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }
}
