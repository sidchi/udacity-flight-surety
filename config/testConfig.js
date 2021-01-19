var FlightSuretyApp = artifacts.require("FlightSuretyApp");
var FlightSuretyData = artifacts.require("FlightSuretyData");
var BigNumber = require('bignumber.js');

var Config = async function(accounts) {
    
    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0x2eC8a236341583cA20cA70653766238b97414685",
        "0x5987D0CA003602148169a97EED6050C738DE992a",
        "0x869303280a013f7747FcA4fB9E87088aE51Cf9AB",
        "0xd7BEF2097A0CDc084c232aC5baD1A59B8b9e4041",
        "0xf0Df80A7dbD3630eC129F86DfFA03CD447a7ae00",
        "0x29C2D9162Bd9846c550A8F80Ef52308723161Cd1",
        "0xB3D7CC2eA41F585872307F22c8A4783192E9206B",
        "0x0d68d3cc281776a3F68c5AddB23816E4a4AE98AF",
        "0x36ED477af3c4F7005E2683c7a6f17ad05d797cdF",
        "0x29bf6770776bAB698d4e2D48cb3fca16690eb38F"
    ];


    let owner = accounts[0];
    let firstAirline = accounts[1];

    let flightSuretyData = await FlightSuretyData.new(firstAirline);
    let flightSuretyApp = await FlightSuretyApp.new(flightSuretyData.address);

    
    return {
        owner: owner,
        firstAirline: firstAirline,
        weiMultiple: (new BigNumber(10)).pow(1),
        testAddresses: testAddresses,
        flightSuretyData: flightSuretyData,
        flightSuretyApp: flightSuretyApp
    }
}

module.exports = {
    Config: Config
};