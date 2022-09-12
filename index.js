let prendas = 0 
let presupuesto = 0
let continuar = ""

function cargarPrendas(){
    presupuesto += Number(prompt("ingrese cantidad de presupuesto"));
    prendas ++;

    do{
        presupuesto += Number(prompt("ingrese las prendas que va a comprar"));
        prendas++;
        continuar = prompt("desea seguir ingresando prendas a comprar? A- si, B- no").toUpperCase()

        if(continuar === "B"){
            alert(`Usted ingreso ${presupuesto} dinero y las prendas son ${xPrendas()} `)
        }
    }while(continuar !== "B")
}

const confirmar = () => {
    if(xPrendas() >= 5){
        alert("Su compra se confirmo con exito")
    }else{
        alert("Su presupuesto no es suficiente para la compra")
    }
}

const xPrendas = () => prendas/presupuesto

cargarPrendas
confirmar()