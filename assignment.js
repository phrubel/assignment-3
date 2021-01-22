// kilometerToMeter
function kilometerToMeter(kilometer) {
  var meter = kilometer * 1000;
  return meter;
}
var showMeter = kilometerToMeter(5);
console.log(showMeter);

// budgetCalculator
function budgetCalculator(watch, phone, laptop) {
  var watchSum = watch * 50;
  var phoneSum = phone * 100;
  var laptopSum = laptop * 500;
  var total = watchSum + phoneSum + laptopSum;
  return total;
}
var result = budgetCalculator(5, 8, 5);
console.log(result);

// hotelCost
function hotelCost(day) {
  var rent = 0;
  if (day <= 10) {
    rent = day * 100;
  } else if (day <= 20) {
    var tenDays = 10 * 100;
    var remainingDays = day - 10;
    var twentyDays = remainingDays * 80;
    rent = tenDays + twentyDays;
  } else {
    var tenDays = 10 * 100;
    var twentyDays = 10 * 80;
    var remainingDays = day - 20;
    var afterTwentyDays = remainingDays * 50;
    rent = tenDays + twentyDays + afterTwentyDays;
  }
  return rent;
}
var totalRent=hotelCost(25);
console.log(totalRent);

// megaFriend

var friendsName = ["Parvez Hasan Rubel","Mehedi Hasan Joy","Samiul Islam Samim"];
function megaFriend(names) {
  var longestName = names[0];
  for (i = 0; i < names.length; i++) {
    if (names[i].length > longestName.length) {
      longestName = names[i];
    }
  }
  return longestName;
}
var result=(megaFriend(friendsName));
console.log(result);

