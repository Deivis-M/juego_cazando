let canvas=document.getElementById("areaJuego")
let ctx =canvas.getContext("2d")
const ANCHO_GATO=100
const ALTO_GATO=50
let gatoX=(canvas.width/2)-(ANCHO_GATO/2)
let gatoY=(canvas.height/2)-(ALTO_GATO/2)

const ANCHO_COMIDA=30
const ALTO_COMIDA=30
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

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function moverIzquierda(){
    gatoX=gatoX-10
    limpiarCanva()
    graficarGato()
    graficarComida()
    detectarColision()
}

function moverDerecha(){
    gatoX=gatoX+10
    limpiarCanva()
    graficarGato()
    graficarComida()   
    detectarColision()
}

function moverArriba(){
    gatoY=gatoY-10
    limpiarCanva()
    graficarGato()
    graficarComida()  
    detectarColision()
}

function moverAbajo(){
    gatoY=gatoY+10
    limpiarCanva()
    graficarGato()
    graficarComida()
    detectarColision()  
}

function detectarColision(){
    if (comidaX+ANCHO_COMIDA>gatoX && comidaY+ALTO_COMIDA>gatoY  
        && comidaX<gatoX+ANCHO_GATO && comidaY<gatoY+ALTO_GATO)
        {
        alert ("Colision")
    }
}
