const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(1).slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiple) {
  return function(fare) {
    return multiple * fare
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(drivers, returnLastTwoDrivers) {
  return returnLastTwoDrivers(drivers);
};
