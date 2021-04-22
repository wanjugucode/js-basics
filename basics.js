
function compare(){
    var book='maths';
    if(book=='history'){
        console.log('history book');
    }
    else if (book=='economics'){
        console.log('this is economics book');

    }
    else if(book=='C.R.E'){
        console.log('this is C.R.E book');
    }
    else{
        console.log('this is out of sylabus');
    }
console.log(book);
};
compare()



function gettGrade(){ 
var grade='F';
console.log("Entering switch block");
switch (grade)
{
case 'A':  console.log("Good job");
break;
case 'B': console.log ("Pretty good<");
break;
case 'C': console.log("Passed");
break;
case 'D': console.log("Not so good");
break;
case 'F': console.log("Failed");
break;
default:
console.log("Unknown grade")
}
};
gettGrade();





function Count (){
var count = 0;
console.log('start loop');

while (count<10){
    console.log("current count:" + count)
    count++;
}
console.log('loop stoppped')
};
Count();



//destructuring
const alphabet=['A','B','C','D','E','F'];
const numbers=[1,2,3,4,5,6];
//const a=alphabet[0];
//spread operators(...rest)
const [a,b,...rest]=alphabet
//combine two arrays 
const newArray=[...alphabet, ...numbers];
console.log(newArray);
const newArrays=alphabet.concat(numbers);
console.log(newArrays);


console.log(a);
console.log(b);
console.log(rest);