"use strict"
const Lampada = document.getElementById("lampada")

function lampadaInteira(){
  return !lampada.src.includes("quebrada")
}

function botoesLigadesliga(estadoLiga, estadoDesliga ) {
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")
    ligar.disabled = estadoLiga
    desligar.disabled = estadoDesliga

}

function ligarLampada() {
    if (lampadaInteira()) {
        Lampada.src ="img/ligada.jpg"
        botoesLigadesliga(true,false)
    }
}  

function desligarLampada() {
    if (lampadaInteira()) {
        Lampada.src ="img/desligada.jpg"
        botoesLigadesliga(false,true)
    }
    
}

function quebrarLampada() {
    lampada.src= "img/quebrada.jpg"
    botoesLigadesliga(true, true)
}


// eventos
document.getElementById("ligar").addEventListener("click", ligarLampada)

document.getElementById("desligar").addEventListener("click",desligarLampada)


document.getElementById("lampada").addEventListener("mouseover" , ligarLampada)

document.getElementById("lampada") .addEventListener("mouseout", desligarLampada)

document.getElementById("lampada"). addEventListener("dblclick" , quebrarLampada)
