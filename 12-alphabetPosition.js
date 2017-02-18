/**
 * In this exercise, you are required to, given a string, 
 * replace every letter with its position in the alphabet. 
 * If anything in the text isn't a letter, ignore it 
 * and don't return it. a being 1, b being 2, etc.
 * example 1: alphabetPosition("The sunset sets at twelve o' clock."); => "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
 */

/* 풀이1 */ var alphabetPosition = function(text) {
var text1 = text.toLowerCase();
var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var output = '' ;
for(var i = 0; i<text1.length; i++){
    for(var k = 0; k<alphabet.length; k++  )
        {
            if(text1[i] == alphabet[k]){
                output += ' '+(k+1);
                
            }
            else {}
        }
}
// for(i=0;;i++)
// var arr[i] = 
// text.charCodeAt()
// for(var i=0;i<)
    
  return output.replace(output[0],'');
};
console.log(alphabetPosition("The sunset sets at twelve o' clock."));

/* 풀이2 */ var alphabetPosition = function(text) {
 var ans='';
     for(var i=0; i<text.length; ++i){
         var temp = text[i].toUpperCase().charCodeAt(0);
         if(temp >= 65 && temp <= 90 ){
             ans+=(temp-64)+' ';
         }
     }
 return ans;
};
console.log(alphabetPosition("The sunset sets at twelve o' clock."));