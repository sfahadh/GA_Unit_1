let fahrenheit = prompt("Enter a value for fahrenheit");
let fahrenheitToCelsius = (parseInt(fahrenheit) - 32) / 1.8;
let fahrenheitToKelvin = (parseInt(fahrenheit) - 459.67) / 1.8;
alert("Fahrenheit: " + fahrenheit + "\nCelsius: " + Math.round(fahrenheitToCelsius) + "\nKelvin: " + Math.round(fahrenheitToKelvin));



