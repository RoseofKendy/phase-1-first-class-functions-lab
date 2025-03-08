// (1) Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // (2) Function to return the last two drivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // (3, 4, 5) Array of driver selection functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // (6, 7) Function to create a fare multiplier
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // (8, 9) Function to double the fare
  const fareDoubler = createFareMultiplier(2);
  
  // (10, 11) Function to triple the fare
  const fareTripler = createFareMultiplier(3);
  
  // (12, 13) Function to select different drivers
  const selectDifferentDrivers = function(arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers);
  };
  