// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  const Hq = 42;

  let result
  result = (Hq > street ? (Hq - street) : (street - Hq));
  return result
}

function distanceFromHqInFeet (street) {
  const Hq = 42;

  let result 
  result = (distanceFromHqInBlocks(street) * 264)
  return result
}
