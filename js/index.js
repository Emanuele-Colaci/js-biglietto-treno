//DOMANDE DA CHIEDERE ALL'UTENTE
let km = prompt('Quanti km vuoi percorrere?'); // 10
let anni = prompt('Quanti anni hai?');
let prezzoPieno = km * 0.21;
//ANNI E SCONTISTICHE 
const minorenni = 17;
const over = 65;
let sconto_40 = '40% Sconto';
let sconto_20 = '20% Sconto';
//OPERAZIONE PER LA SCONTISTICA DEI MINORENNI E DEGLI OVER 65
let prezzoTot40 = (prezzoPieno - (40 * prezzoPieno / 100)).toFixed(2);
let prezzoTot20 = (prezzoPieno - (20 * prezzoPieno / 100)).toFixed(2);
//SE E ALTRIMENTI
if (anni >= over){
    console.log('COSTO PER GLI OVER',prezzoTot40)
}else if (anni <= minorenni){
    console.log('COSTO PER IL MINORENNE', prezzoTot20)
}else{
    console.log('PREZZO PIRENO', prezzoPieno)
}
//STAMPE DEGLI SCONTI E DEL PREZZO PIENO DEL TRENO
console.log (anni, km);
document.getElementById('km').innerHTML = (km + ' Km');
document.getElementById('anni').innerHTML = (anni + ' Anni');
document.getElementById('no-sconto').innerHTML = ('Prezzo normale ' + prezzoPieno + ' €');
document.getElementById('costo-tot-minorenni').innerHTML = ('Prezzo per i minorenni ' + prezzoTot20 + ' €');
document.getElementById('costo-tot-over').innerHTML = ('Prezzo per gli over 65 ' + prezzoTot40 + ' €');