
alert('Hello welcome to our page :)')
var hourNow = prompt ( ' what time is it 0 - 23 ? ' ) ;
console.log(hourNow)
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
document.write('<h3>'+ greeting +'</h3>');
var nice;
if (hourNow > 0 && hourNow <= 24){
    nice = 'Have a nice day :)'
}

document.write('<h4>' + nice + '</h4>');

