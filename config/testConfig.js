
var FlightSuretyApp = artifacts.require("FlightSuretyApp");
var FlightSuretyData = artifacts.require("FlightSuretyData");
var BigNumber = require('bignumber.js');

var Config = async function(accounts) {
    
    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0x04d908E829290cfEB454D687e220421959278c6d",
        "0x2673a4E01C758D2e35559279c6cAf58EEF0393b3",
        "0xA1878619e02AF9c82F04B9912569CA295aA5FC80",
        "0x7DD3384d9aF81CCD2D7Be73D46B32f544c677327",
        "0xa6E8Ab11975CF7c29e9Dfb9ce31b4c893Ac02c68",
        "0xD66a5E2280528B8094A9a78E6B43E44376666334",
        "0x90bc27Ac783b4b055782e8CF931354FEc62A227c",
        "0xf6718c06Ec086D647215a5EFDE46f987C3181ae7",
        "0x8861ae3d21a6Ad51757AF73C83F6CA23dF8d2B28",
        "0x529214Df5e6b52e065df77731DE409991c700D56"
    ];


    let owner = accounts[0];
    let firstAirline = accounts[1];

    let flightSuretyData = await FlightSuretyData.new(firstAirline);
    let flightSuretyApp = await FlightSuretyApp.new(flightSuretyData.address);

    
    return {
        owner: owner,
        firstAirline: firstAirline,
        weiMultiple: (new BigNumber(10)).pow(18),
        testAddresses: testAddresses,
        flightSuretyData: flightSuretyData,
        flightSuretyApp: flightSuretyApp
    }
}

module.exports = {
    Config: Config
};