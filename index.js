function paliwo() {
let dystans = document.querySelector('#km');
let spalanie = document.querySelector('#spalanie');
let wynik = document.querySelector("#wynik")

let cena = dystans.value * spalanie.value;

let suma = cena / 100;

document.querySelector('#wynik').innerHTML = `Potrzebujesz ${suma} litrów paliwa`
}