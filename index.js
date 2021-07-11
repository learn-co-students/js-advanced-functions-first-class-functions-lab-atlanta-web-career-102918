// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
  return arr.slice(0, 2);
};

const returnLastTwoDrivers = function(arr) {
  return arr.slice(arr.length - 2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(int) { 
  return function(fare) {
    return fare * int; 
  };
};

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare);
};

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
};

const fetchSpecifiedDrivers = function(arr, fn) {
  return fn(arr);
};