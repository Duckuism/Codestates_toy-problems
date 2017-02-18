// Have the function DashInsert(str) insert dashes ('-') between each two odd numbers 
// in str. For example: if str is 454793 the output should be 4547-9-3. 
// Don't count zero as an odd number. 

var str = '454793';

function DashInsert(str) { 

var dash = '-';
var result = str ;

for(var i = 0; i<str.length; i++){
	if(str[i]%2 === 1 && str[i+1]%2 === 1){
		result = result.replace(str[i+1],'-' + str[i+1]);
	}
}

  return result; 
         
}   

console.log(DashInsert(str));

// Have the function ThirdGreatest(strArr) take the array of strings stored in strArr 
// and return the third largest word within in. 
// So for example: if strArr is ["hello", "world", "before", "all"] 
// your output should be world because "before" is 6 letters long, 
// and "hello" and "world" are both 5, 
// but the output should be world because it appeared as the last 5 letter word in the array. 
// If strArr was ["hello", "world", "after", "all"] the output should be after 
// because the first three words are all 5 letters long, so return the last one. 
// The array will have at least three strings and each string will only contain letters. 

var strArr = ["hello", "world", "before", "all", "abckejhlajf", "afls","abcfg"] ;

function ThirdGreatest(strArr) { 

	var result = [];
	result[0] = strArr[0];
	for ( var i = 1; i<strArr.length; i++){
		
		if(result[0].length < strArr[i].length){
			result.unshift(strArr[i]);
		}else if(result[0].length === strArr[i].length){
			result.push(strArr[i]);
		}
	}

	console.log(result);
  return result[2]; 
         
}

console.log(ThirdGreatest(strArr));

// Have the function AdditivePersistence(num) take the num parameter being passed 
// which will always be a positive integer and return its additive persistence 
// which is the number of times you must add the digits in num 
// until you reach a single digit. For example: if num is 2718 then 
// your program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 

var num = 999999999999999;
// var str = '2 7 1 8';
// var asd = str.split(" ");
// console.log(asd);
// var asg = asd[0] + asd[1];
// console.log(asg);
// var ascc = Number(asd[0]);
// console.log(ascc);


function AdditivePersistence(num) { 

var result = num.toString() ;
var output = 0;
var times = 1;	
	
	for(var i = 0; i<result.length; i++){
		if(result.length > 1){
			output += Number(result[i]);
		}
	}
	
  	if(output>10){
  	times++;
  	return newAdditivePersistence(output);
  	}else{return times;}

  		var newAdditivePersistence = function(p){

  			var a = p.toString();
  			var newoutput = 0;

  			for(var i = 0; i<a.length; i++){
  				if(a.length > 1){
  					newoutput += Number(a[i]);
  				}
  			}

  			if(a>=10){
  				times++;
  				return newAdditivePersistence(newoutput);
  			}else if(a<10){return times;}

  		}
         
}      

console.log(AdditivePersistence(num));