

function uno (dos) {
    console.log("uno")
   setTimeout(dos,2000)
    
}
function uno (tres) {
    console.log("dos")
   setTimeout(tres,2000)
    
}

function uno (cuatro) {
    console.log("tres")
   setTimeout(cuatro,2000)
    
}
function uno (cinco) {
    console.log("tres")
   setTimeout(cinco,2000)
    
}

function dos () {
    console.log("dos")
}

setTimeout(()  => uno(dos),5000)


const  nombre = function ()  {
    console.log("nombre")

}

//callback hell

