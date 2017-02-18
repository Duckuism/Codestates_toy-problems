// Using the JavaScript language, have the function ABCheck(str) 
// take the str parameter being passed and 
// return the string true if the characters a and b are separated by exactly 3 places anywhere 
// in the string at least once (ie. "lane borrowed" would result in true 
// because there is exactly three characters between a and b). 
// Otherwise return the string false. 

function ABCheck(str) { 
    // var num1=str.indexOf('a');
    // var num2=str.indexOf('b');
    for(i=0;i<str.length;i++){
        if(str[i] = 'a'){
        var num1 = i;
        }
        else if(str[i]='b'){
        var num2 = i;
        }else{
            
        }
    }
    var sub = num2-num1;
    if(sub=4){
        var result = true;
    }
    else{
    result= false   
    }
return result;
      // code goes here           
}
console.log(ABCheck('lane borrowed'));

