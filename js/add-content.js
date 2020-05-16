'use strict';

alert('Hello welcome to our page :)')


var hourNow = prompt ( ' what time is it 0 - 23 ? ' ) ;
var greeting;

if (hourNow > 18 && hourNow <= 24 ) {
    greeting ='Good Evening !';
    
} else if (hourNow > 12 && hourNow <24 ) {
    greeting ='Good Afternoon !';
    
} else if (hourNow >= 0 && hourNow <24 ) {
    greeting ='Good Morning!';
    
} else {
    greeting ='Something went wrong!';
    
    

 
}

document.write('<h3>'+greeting+'</h3>')

function guessName(){
var picture =''
    
    var useranswer = prompt ('Guess a name of us!')
    while (useranswer !== 'roukia'&& useranswer !== 'rania' && useranswer !=='ashjan' ) {
        useranswer = prompt ('Guess again! hint: roukia or rania or ashjan')
    }

var howMany = prompt ( 'how many pictures do you want to see ?')
for (var i = 0; i< howMany ; i++) {
    console.log(howMany);
    
if (useranswer=='rania')
{
picture = picture + "<img src= 'IMG_3331.JPG'style='width:20%'>" 

}
else if (useranswer=='roukia')
{
    picture= picture + "<img src='IMG_3334.JPG'style='width:20%'>"
}
else if (useranswer=='ashjan')
{
    picture= picture + "<img src='IMG_3332.JPG'style='width : 20%' >" 
}

}


return picture

}


document.write (guessName())

