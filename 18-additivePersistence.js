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

	
	for(var i = 0; i<result.length; i++){
		if(result.length > 1){
			output += Number(result[i]);
		}
		
	}
  	if(output>10){
  	times++;
  	return newAdditivePersistence(output);
  	}else{return times;}


         
}      

console.log(AdditivePersistence(num));