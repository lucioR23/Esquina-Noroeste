let matriz = []; 
let matrizfila = [];
let matrizcolumna = [];

function crearMatriz() {
    
    const m = parseInt(document.getElementById("filas").value);
    const n = parseInt(document.getElementById("columnas").value);
    if (m <= 0 || n <= 0) {
        alert("El número de filas y columnas debe ser mayor que cero.");
        return;
    }
    
    matriz = new Array(m);
    for (let i = 0; i < m; i++) {
        matriz[i] = new Array(n);
    }

    
    const contenedor = document.getElementById("miContenedor");
    contenedor.innerHTML = ""; 
    for (let i = 0; i < m; i++) {
        const fila = document.createElement("div");

        for (let j = 0; j < n; j++) {
            const input = document.createElement("input");
            input.type = "number";
            input.id = `f${i}c${j}`; 
            fila.appendChild(input);
        }
        contenedor.appendChild(fila);
    }

    matrizfila = new Array(m);
    for (let i = 0; i < m; i++) {
        matrizfila[i] = new Array(1);
    }

    const contenedorFila = document.getElementById("ContenedorFila");
    contenedorFila.innerHTML = ""; 
    for (let i = 0; i < m; i++) {
        const fila = document.createElement("div");

        for (let j = 0; j < 1; j++) {
            const input = document.createElement("input");
            input.type = "number";
            input.id = `fila${i}c${j}`;
            fila.appendChild(input);
        }
        contenedorFila.appendChild(fila);
    }

    matrizcolumna = new Array(1);
    for (let i = 0; i < 1; i++) {
        matrizcolumna[i] = new Array(n);
    }
    
    const contenedorColumna = document.getElementById("contenedorColumna");
    contenedorColumna.innerHTML = ""; 
    const filaColumna = document.createElement("div");
    for (let j = 0; j < n; j++) {
        const input = document.createElement("input");
        input.type = "number";
        input.id = `columna${j}`; 
        filaColumna.appendChild(input);
    }
    contenedorColumna.appendChild(filaColumna);
}