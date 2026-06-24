let canvas=document.getElementById("areaJuego")
let ctx =canvas.getContext("2d")
let valorAnchoRectangulo=150
let valorAltoRectangulo=85
const VALOR_X=(canvas.width/2)-(valorAnchoRectangulo/2)
const VALOR_Y=(canvas.height/2)-(valorAltoRectangulo/2)

function graficarGato(){
    ctx.fillStyle ="#0bfa0b";
    ctx.fillRect(VALOR_X,VALOR_Y,valorAnchoRectangulo,valorAltoRectangulo);
}