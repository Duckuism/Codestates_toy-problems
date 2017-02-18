// Using the JavaScript language, have the function RunLength(str) take the str parameter 
// being passed and return a compressed version of the string 
// using the Run-length encoding algorithm. 
// This algorithm works by taking the occurrence of each repeating character 
// and outputting that number along with a single character of the repeating sequence. 
// For example: "wwwggopp" would return 3w2g1o2p. 
// The string will not contain any numbers, punctuation, or symbols. 
var str = "wwwggopp";



function RunLength(str) { 

var number = 1;
var output = '';
for(var i =0; i<str.length; i++){
	if(str[i] === str[i+1]){
		number++;
	}else {
		
		output += number + str[i];
		number = 1;
	}
}
	return output
         
}

console.log(RunLength(str));