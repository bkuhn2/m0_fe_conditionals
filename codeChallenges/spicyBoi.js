var goodDrivingRecord = true
var isOver25 = true

if (goodDrivingRecord === true && isOver25 === true) {
  console.log("congrats you get a discount!");
} else if (goodDrivingRecord === true && isOver25 === false) {
  console.log("full price, too bad");
} else if (goodDrivingRecord === false && isOver25 === true) {
  console.log("full price, too bad");
} else {
  console.log("we've called your parents");
}
