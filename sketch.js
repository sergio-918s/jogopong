let posicaox = 200
let posicaoy = 200
let tamanho = 30
let xraquete = 4
let yraquete = 200
let xraqueteoponente = 545
let yraqueteoponente = 200
let larguraraquete = 15
let alturaraquete = 100
let raio = tamanho/2
let velocidadex = 7
let velocidadey = 7
let velocidadeyraquete;
let largura = 560
let altura = 410
let colidiu = false
let meuspontos = 0
let oponentepontos = 0


function setup() {
  createCanvas(largura, altura);
}

function draw() {
  background(0);
  criabolinha();
  velocidadebolinha();
