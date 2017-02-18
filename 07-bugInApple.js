// Task:

// Find out "B"(Bug) in a lot of "A"(Apple).

// There will always be one bug in apple, 
// not need to consider the situation that without bug or more than one bugs.

// input: string Array apple

// output: Location of "B", [x,y]

// example
// apple=[
// ["A","A","A","A","A"],
// ["A","B","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","A","A","A"]
// ], answer=[1,1];
	var apple = [
["A","A","A","A","A"],
["A","B","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

function sc(apple){	

	var result = [];
	for( var i=0; i<apple.length; i++){
		for( var k=0; k<apple[i].length; k++){
			if(apple[i][k] != 'A'){
				result.push(i,k);
			}
		}
	}
	return "Location of B, " + result
}

console.log(sc(apple));

