// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
// function selectingDrivers(){
//
// }

function createFareMultiplier(int){
  return function(fare){
    return fare*int
  }
}

function fareDoubler(fare){
  const cool = createFareMultiplier(2)
  return cool(fare)
}

function fareTripler(fare){
  const cool = createFareMultiplier(3)
  return cool(fare)
}

function fetchSpecifiedDrivers(drivers, func){
  return func(drivers)
}
