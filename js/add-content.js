
alert('Hello welcome to our page :)')
var hourNow = prompt ( ' what time is it 0 - 23 ? ' ) ;
console.log(hourNow)
var greeting;
var nice;
if (hourNow > 18 && hourNow <= 24 ) {
    greeting ='Good Evening !';
    nice = 'Have a nice day :)'
} else if (hourNow > 12 && hourNow <24 ) {
    greeting ='Good Afternoon !';
    nice = 'Have a nice day :)'
} else if (hourNow >= 0 && hourNow <24 ) {
    greeting ='Good Morning!';
    nice = 'Have a nice day :)'
} else {
    greeting ='Something went wrong!';
}
document.write('<h3>'+ greeting +'</h3>');


document.write('<h4>' + nice + '</h4>');

