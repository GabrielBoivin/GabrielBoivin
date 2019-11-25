var k = 12;

if (k != 12){
    k = 8;
}

else{
    k = 2;
}

for (var i = 1; i <= 8; i++){
    console.log("I = " + i + " K = " + k);
    k = k * 2;
}

while (k >= 2){
    console.log(k);
    k = k / 2;
}