/*
1. Obtener los objetos element del DOM y referenciarlos
2. Obtener el value del input y agregarlo a un arreglo
3. Mostrar las tareas en el UL
*/

let formTarea = document.getElementById("formTarea");
let ulPendientes = document.getElementById("pendientes");

let arregloPendientes = [];
let arregloCompletado = [];

formTarea.addEventListener("submit", (e) => {
    e.preventDefault();
    //Para referenciar un input que esté dentro de un form
    //nombreVariableForm = ["name_input"].value

    let nuevaTarea = formTarea["tarea"].value;
    arregloPendientes.push(nuevaTarea);

    formTarea.reset();
    dibujarPendientes();
})

let dibujarPendientes = () => {
    ulPendientes.innerHTML = "";

    arregloPendientes.forEach((item, i) => {
        let li = document.createElement("li");
        li.innerHTML = item;
        ulPendientes.appendChild(li);

        li.addEventListener("dblclick", () => {
            arregloCompletado.push(arregloPendientes[i])
        })
    })
}