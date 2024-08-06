// CaptchaVerifier.sol
pragma solidity ^0.8.0;

contract CaptchaVerifier {
    struct Captcha {
        string question;
        string answerHash;
        bool isActive;
    }

    mapping(address => Captcha) public captchas;

    function createCaptcha(string memory question, string memory answerHash) public {
        captchas[msg.sender] = Captcha({
            question: question,
            answerHash: answerHash,
            isActive: true
        });
    }

    function verifyCaptcha(string memory answer) public view returns (bool) {
        Captcha storage captcha = captchas[msg.sender];
        require(captcha.isActive, "Captcha is not active");

        return keccak256(abi.encodePacked(answer)) == keccak256(abi.encodePacked(captcha.answerHash));
    }

    function deactivateCaptcha() public {
        captchas[msg.sender].isActive = false;
    }
}