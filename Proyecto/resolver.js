function pasarDatos() {
    // Obtener los valores de las entradas y colocarlos en la matriz global
    const m = parseInt(document.getElementById("filas").value);
    const n = parseInt(document.getElementById("columnas").value);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const input = document.getElementById(`f${i}c${j}`);
            const valor = parseInt(input.value.trim());
            if (valor < 0){
                alert("No se permiten valores negativos en las celdas. ;)")
                return;
            }
            if (input.value.trim() === "") {
                input.value = "0";
            }
            matriz[i][j] = parseInt(input.value);
        }
    }

    const contenedor = document.getElementById("mi2Contenedor");
    contenedor.innerHTML = ""; // Limpiar el contenedor antes de mostrar la nueva matriz

    // Implementación del algoritmo de la esquina noroeste
    const ofertas = [];
    const demandas = [];

    for (let i = 0; i < m; i++) {
        const input = document.getElementById(`fila${i}c0`);
        const oferta1 = parseInt(input.value.trim());
        if (oferta1 < 0){
                alert("No se permiten valores negativos en las ofertas.")
                return;
        }
        if (input.value.trim() === "") {
                input.value = "0";
        }
        ofertas.push(parseInt(input.value));
    }

    for (let j = 0; j < n; j++) {
        const input = document.getElementById(`columna${j}`);
        const oferta2 = parseInt(input.value.trim());
        if (oferta2 < 0){
                alert("No se permiten valores negativos en las demandas.")
                return;
        }
        if (input.value.trim() === "") {
                input.value = "0";
        }
        demandas.push(parseInt(input.value));
    }

    const asignacion = new Array(m);
    for (let i = 0; i < m; i++) {
        asignacion[i] = new Array(n).fill(0);
    }

    let i = 0;
    let j = 0;
    let costoMinimo = 0;

    while (i < m && j < n) {
        const asignar = Math.min(ofertas[i], demandas[j]);

        asignacion[i][j] = asignar;
        costoMinimo += asignar * matriz[i][j];

        ofertas[i] -= asignar;
        demandas[j] -= asignar;

        if (ofertas[i] === 0) i++;
        if (demandas[j] === 0) j++;
    }

    // Mostrar la matriz de asignación en el contenedor
    for (let i = 0; i < m; i++) {
        const fila = document.createElement("div");

        for (let j = 0; j < n; j++) {
            const input = document.createElement("input");
            input.type = "number";
            input.value = asignacion[i][j];
            fila.appendChild(input);
        }
        contenedor.appendChild(fila);
    }

    // Mostrar el costo mínimo
    document.getElementById("minimo").textContent = costoMinimo;

    // Mostrar oferta restante
    const ofertaRestanteContainer = document.getElementById("ofertaRestanteContainer");
    ofertaRestanteContainer.innerHTML = ""; // Limpiar el contenedor antes de mostrar la nueva oferta restante

    for (let i = 0; i < m; i++) {
        const fila = document.createElement("div");

        for (let j = 0; j < 1; j++) {
            const input = document.createElement("input");
            input.type = "number";
            input.value = ofertas[i];
            fila.appendChild(input);
        }
        ofertaRestanteContainer.appendChild(fila);
    }

    // Mostrar demanda restante
    const demandaRestanteContainer = document.getElementById("demandaRestanteContainer");
    demandaRestanteContainer.innerHTML = ""; // Limpiar el contenedor antes de mostrar la nueva demanda restante

    const filaDemanda = document.createElement("div");
    for (let j = 0; j < n; j++) {
        const input = document.createElement("input");
        input.type = "number";
        input.value = demandas[j];
        filaDemanda.appendChild(input);
    }
    demandaRestanteContainer.appendChild(filaDemanda);
}