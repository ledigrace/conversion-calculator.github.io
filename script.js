// weight
document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;

    document.getElementById('kgOutput').innerHTML = lbs/2.2046;

    document.getElementById('ozOutput').innerHTML = lbs*16;
});
// length
document.getElementById('output2').style.visibility = 'hidden';
document.getElementById('metersInput').addEventListener('input', function(e){
    document.getElementById('output2').style.visibility = 'visible';
    let met = e.target.value;
    document.getElementById('feetOutput').innerHTML = met*3.2808;

    document.getElementById('inchOutput').innerHTML = met*39.370;

    document.getElementById('cmOutput').innerHTML = met/0.01;

    document.getElementById('yardsOutput').innerHTML = met*1.0936;
});
// time
document.getElementById('output3').style.visibility = 'hidden';
document.getElementById('dayInput').addEventListener('input', function(e){
    document.getElementById('output3').style.visibility = 'visible';
    let time = e.target.value;
    document.getElementById('hourOutput').innerHTML = time*24;

    document.getElementById('minOutput').innerHTML = time*1440;

    document.getElementById('secOutput').innerHTML = time*86400;
});

// temperature
document.getElementById('output4').style.visibility = 'hidden';
document.getElementById('tempInput').addEventListener('input', function(e){
    document.getElementById('output4').style.visibility = 'visible';
    let temp = e.target.value;
    document.getElementById('celOutput').innerHTML = (temp-32)/1.8;

    document.getElementById('kelOutput').innerHTML = ((temp-32)/1.8)+273.15;
});
