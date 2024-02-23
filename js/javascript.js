
function randomNum(minimum,maximum){
    minimum = parseInt(1);
    maximum = parseInt(3);

    return Math.floor(Math.random()*(maximum-minimum+1))+minimum;
}