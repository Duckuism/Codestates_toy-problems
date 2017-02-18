/** 
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
 * Implement a function that determines whether a string that contains only letters is an isogram. 
 * Assume the empty string is an isogram. Ignore letter case.
 * example 1: isIsogram("Dermatoglyphics"); => true
 * example 2: isIsogram("aba"); => false
 * example 3: isIsogram("moOse"); => false // -- ignore letter case
 */

var isIsogram = function(str) {
 var object = {};
 var result;
 var string = str.toLowerCase();
    for(i=0;i<string.length;i++){
         if(!object[string[i]]){
            object[string[i]] = 1;
            
         }else{
            
            return false;
          }
    }
return true;
  //Your code here
};