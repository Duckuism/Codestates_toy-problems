/**
 * Using the JavaScript language, have the function LetterCapitalize(str) 
 * take the str parameter being passed and capitalize the first letter of each word. 
 * Words will be separated by only one space. 
 * example 1: letterCapitalize("hello world"); => "Hello World"
 * example 2: letterCapitalize("javascript is sexy") => "Javascript Is Sexy"
 */

var letterCapitalize = function(str) { 
  
  var answer = [];
   var array = [];
   array = str.split(" ");
   

   for(var i=0; i<array.length; i++){


  	array[i] = array[i].split('');
   		

    array[i][0] = array[i][0].toUpperCase();
  	
    console.log(array);



   }
   for (var k=0; k<array.length; k++){
   // array[k].push(answer);

   
   

   }

return  array.join(' ').replace(/,/g, "")

}


console.log(letterCapitalize("Hello world"));