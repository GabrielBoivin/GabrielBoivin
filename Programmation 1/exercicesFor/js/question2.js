var f = -40;
var c;

for (f = -40; f <= 40; f += 5){
    c = Number((f-32) * 5/9);
    document.write(f + " Fahrenheit est " + c + " en Celsius" + "<br>");
}