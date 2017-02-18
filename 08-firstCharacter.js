/** 
 * In this exercise, a string is passed to a method 
 * and a new string has to be returned with the first character 
 * of each word in the string
 * example 1: makeString("The community at Code States might be the biggest asset"); => "TcaCSmbtba"
 */

var makeString = function(s) {

	var answer = [];
   var array = [];
   array = s.split(" ");
   

   for(var i=0; i<array.length; i++){

  	array[i] = array[i].split('');


   		
   	answer.push(array[i][0]);


   }

return answer.join('')

}



console.log(makeString("The community at Code States might be the biggest asset"));