//function
//1. declaration
//1. expression

//1. declaration
/*
function name(parameter){
  code block;
}
*/
function sayHello(){
  return "Hello world"
}
console.log(sayHello());

function sapaNama(name){
  return "My Name is" + name;
}
console.log(sapaNama(" Taqiya "));
console.log(sapaNama(" Alin "));

//e.g (menghitung luas persegi panjang menggunakan function)
//luas : panjang * lebar

function persegiPanjang(panjang, lebar){ //panjang dan lebar itu parameter
  let luas = panjang * lebar;
  return "Luas persegi panjang adalah" + luas;
}
console.log(persegiPanjang(4, 5)); //4 dan 5 adalah parameter panjang dan lebar yng di atas
console.log(persegiPanjang(100, 27));

//menghitung luas segitiga menggunakan function
//luas = 1/2 * alas * tinggi

function luasSegitiga(a, t){
  let luas = 1/2 * a * t;
  return "Luas Segitiga adalah " + luas;
}
console.log(luasSegitiga(10, 55));

//konversi suhu dari fahrenheit menjadi icelcius menggunakan function
// C = (5/9) * (f-32);

function fahrenheitKeCelcius(f){
  let c = (5/9) * (f - 32);
  return "Suhu dalam Celcius adalah " + c + "°C";  // atau (return f + " °F = " + c + " °C";)
}
console.log(fahrenheitKeCelcius(50))

//2. function expression 

const hello = function(){
  return "Hello world"
}
console.log(hello) 
console.log(hello()) //tmbah kurung buka tutup 

//1. sapanama
//2. luas persegi panjang
//3. luas segitiga
//4. konverensi suhu

//1.
const nama = function(){
  return "My Name is fayyad";
}
console.log(nama())

//2.
const persegi_Panjang = function(panjang, lebar){
  let L = panjang * lebar;
  return "Luas persegi panjang adalah " + L;
}
console.log(persegi_Panjang(10, 5))

//3.
const luas_Segitiga = function (alas1, tinggi1){
  let luas2 = 0.5 * alas1 * tinggi1;
  return "Luas segitiga adalah " + luas2
}
console.log(luas_Segitiga(5, 6));

//4.
const fahrenheit = function(f){
  let C = (5/9) * (f - 32);
  return "Suhu dalam Celcius adalah " + C;
}
console.log(fahrenheit(50))

//Function arrow; 
const persegipanjang1 = (panjang, lebar) => 
  "luas persegi panjang adalah " + panjang * lebar;
console.log(persegipanjang1(5, 6));

//1. 
const Hello1 = () =>
  "Hello world";
console.log(sayHello());

//2. 
const sapa_Nama = () =>
 "My name is Taqi"; 
 console.log(sapa_Nama());


