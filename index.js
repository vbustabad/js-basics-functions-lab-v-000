// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  const Hq = 42;

  let result 
  result = (Hq > street ? (Hq - street) : (street - Hq));
  return result
}

function distanceFromHqInFeet (someValue) {
  distanceFromHqInBlocks(someValue);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}
