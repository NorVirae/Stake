//SPDX-License-Identifier:MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StakeItBro is ERC20, Ownable {

    using SafeMath for uint256;
    address[] internal stakeholders;

    constructor(address _owner, uint256 _supply) public{
        _mint(_owner, _supply);
    }

    function isStakeholder(address _address) internal returns(bool, uint256){
        for (uint256 s = 0; s < stakeholders.length; s += 1){
            if(_address != stakeholders[s]){
                return (false, 0);
            }

            return (true, s);
        }
    }

}



}