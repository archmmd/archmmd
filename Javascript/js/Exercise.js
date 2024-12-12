
// Set the date we're counting down to
var countDownDate = new Date("Jun 17, 2024 20:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);




/*

|| Defining var attribute ||

<!DOCTYPE html>
<html>
<body>

<h3>A demonstration of how to access a VAR element</h3>

<p>Click the button to set the color of <var id="myVar">this text</var> to red.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  var x = document.getElementById("myVar");
  x.style.color = "red";
}
</script>

</body>
</html>

*/