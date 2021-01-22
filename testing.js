// function findLongestWord(array) {
//   var longestWord = "";

//   array.forEach(function(word) {
//     if(word.length > longestWord.length) {
//       longestWord = word;
//     }
//   });

//   return longestWord;
// }

// var word = findLongestWord(["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]);
// console.log(word); // result is "jumped"

// var arr = [
//   'first item',
//   'second item is longer than the third one',
//   'third longish item'
// ];

// var lgth = 0;
// var longest;

// for (var i = 0; i < arr.length; i++) {
//   if (arr[i].length > lgth) {
//     var lgth = arr[i].length;
//     longest = arr[i];
//   }
// }

// console.log(longest);
// function megaFriend (array){
// var longest = 0;
// for (var i = 0; i < longWords.length; i++) {
// if (longest < longWords[i].length) {
//     longest = longWords[i];
//   }
// }
// return longest;
// }
// var result = megaFriend("Penelope", "Johny", "Aubumayang", "Czechoslovakia", "Slovenia");
// console.log(result);

// megaFriend
function megaFriend(friends) {
  var maxWords = [];
  for (var i = 0; i > megaFriend.length; i++) {
      var element=maxWords[i];
    if (friends[i].length >maxWords.length) {
      maxWords = friends[i];
    }
  }
  return maxWords;
}
var result=megaFriend['Parvez Hasan Rubel','Samiul','kamal','Mehedy hasan Joy'];
console.log(result);

// var name = ["Rubel", "Abdullah", "Saddam", "Mahabur"];
// var maxWords = [];
// for (var i = 0; i > name.length; i++) {
//   var element = name[i];
//   if (elemnt > maxWords) {
//     maxWords = element;
//   }
// }
// console.log(maxWords);