let km = prompt('Quanti km vuoi percorrere?');
let anni = prompt('Quanti anni hai?');



let prezzoPieno = (parseInt('0.21').toFixed(2));
console.log(prezzoPieno)




const minorenni = 17;
const over = 65;
let sconto_40 = '40% Sconto';
let sconto_20 = '20% Sconto';

if (anni >= over){
    sconto_40
    console.log (sconto_40)
}else if (anni <= minorenni){
    sconto_20
    console.log (sconto_20)
}else{
    prezzoPieno
    console.log (prezzoPieno)
}

console.log (anni, km);
document.getElementById('km').innerHTML = (km + 'Km');
document.getElementById('anni').innerHTML = (anni + 'Anni');