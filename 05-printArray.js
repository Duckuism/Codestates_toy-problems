// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

function printArray(array){

var nonmetod = array[0]

    for ( var i = 0; i<array.length; i++){

        console.log(i);

    	if	( i === 0 ){

    	var	nonmethod = ("\"" + array[i]);
        

    	} else if ( i === array.length-1 ) {
 			

    		nonmethod += (array[i] + "\"");

    	} else {

    		nonmethod += array[i];
    	}

    }

  	return nonmethod 

} 

console.log(printArray(["h","o","l","a"]));





