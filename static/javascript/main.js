if (new Date().getHours() < 18) {
    document.getElementById("demo").innerHTML = "Good day!";
  }
  //example of an if statement

 const bllk = ["isagi", "niko", "nagi", "rin", "aryu", "aiku"];

  let text = "";
  for (let i = 0; i < bllk.length; i++) {
    text += bllk[i] + "<br>";
  }
  
  document.getElementById("demo").innerHTML = text; 
  //example of a for statement

  let day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case  6:
      day = "Saturday";
  }
  // example of a switch case statement 

 ;
//since there is no pass statements in java, i did research and found that a semi colon has a similar effect



//another example of a switch case statement 

function HigherNumber(first,second){

    if(first >= second){
    document.write(first+' is greater than or equal to '+second)
}
else{
    document.write(second+' is greater than '+first)


    }

}
HigherNumber(11, 50);
//function comparing 2 numbers and returning the highest

function alertmessage(){
    document.getElementById("button").innerHTML = "JavaScript Best Practices";
    //document.write('<a href= 'https://www.w3schools.com/js/js_best_practices.asp'>W3website</a>)
}
//A function that, when a button is clicked, displays JavaScript Best Practices