/**
 * Using the JavaScript language, have the function LongestWord(sen) 
 * take the sen parameter being passed and return the largest word in the string. 
 * If there are two or more words that are the same length, return the first word 
 * from the string with that length. Assume sen will not be empty. 
 * example 1: longestWord("I love codestates"); // => "codestates"
 * example 2: longestWord("Teamwork skills will take you anywhere"); // => "Teamwork"
 */

var longestWord = function(sen) { 


  var array = [];
  array = sen.split(" ");



  var longgest = array[0]
  


  for (i = 1; i<array.length; i++){

  	

    if (longgest.length < array[i].length){
    	longgest = array[i];

    } 
  }

   return longgest; 

   

}

 console.log(longestWord("Teamwork skills will take you anywhere")); 

