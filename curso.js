console.log("Hola mundo")
//varglobales
var nombresvar=2.2;
var nomrbrecas=2;
var texto="Hola mundo";
var listas=[1,2,3];



// Añadir un evento de clic a un botón
document.getElementById("inicio").addEventListener("click", function() {
    // Cambiar el contenido de un elemento
    document.getElementById("texto").value = "Este es un div";

    // Cambiar el estilo de un elemento
    document.getElementById("texto").style.color = "red";
    alert("¡Hiciste clic en el botón!");
});

function mostrarMensaje(){
    //variables locales

    let i=0;
    if (nombresvar>2){
        alert("Mayor")
    } 
    else{alert("Menor")}
    
    for (i=0;i<3;i++){
        console.log(listas[i])
    }

    //Deuna sola linea
    /*Varias
    Lineas de
    comentario
    while(//Terminacion){
        }*/

    // Añadir y eliminar elementos
    listas.push("Uva"); // Añadir al final
    listas.pop();       // Eliminar el último
    console.log("algo publicar", listas[2]);

    // Definir un objeto
    let persona = {
        nombre: "Henry",
        edad: 30,
        esEstudiante: true,
        saludar: function() {
            console.log("Hola, mi nombre es " + this.nombre);
        }
    };

    console.log(persona.nombre);
    persona.saludar();
}