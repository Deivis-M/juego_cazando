let canvas=document.getElementById("areaJuego")
let ctx =canvas.getContext("2d")
const ANCHO_GATO=200
const ALTO_GATO=100
let gatoX=(canvas.width/2)-(ANCHO_GATO/2)
let gatoY=(canvas.height/2)-(ALTO_GATO/2)

const ANCHO_COMIDA=50
const ALTO_COMIDA=50
let comidaX=0
let comidaY=0


function iniciarJuego(){
    graficarGato()
    graficarComida()
}

function graficarGato(){
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"blue")
}

function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"red")
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle =color;
    ctx.fillRect(x,y,ancho,alto);  
}