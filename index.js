// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  const Hq = 42;

  let result
  result = (Hq > street ? (Hq - street) : (street - Hq));
  return result
}

function distanceFromHqInFeet(street) {
  const Hq = 42;

  let result
  result = (distanceFromHqInBlocks(street) * 264);
  return result
}

function distanceTravelledInBlocks(street_1, street_2) {
  let result
  result = (street_1 > street_2 ? (street_1 - street_2) : (street_2 - street_1));
  return result
}

function distanceTravelledInFeet(street_1, street_2) {
  let result
  result = (distanceTravelledInBlocks(street_1, street_2) * 264);
  return result
}

function calculatesFarePrice(start, destination) {
  let result
  result = (distanceTravelledInBlocks(street_1, street_2) * 264);
  return result
}
