const { nextISSTimesForMyLocation } = require("./iss");
nextISSTimesForMyLocation((error, passTimes) => {
  return console.log("It did not work!!", error);
});
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (const item of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(item.risetime);
    const duration = item.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
});
