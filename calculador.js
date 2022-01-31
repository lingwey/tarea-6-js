function promedio (edades){
    let total = 0;
    for (let i = 0; i < edades.length; i++){
        total += edades[i];
    }
    return total / edades.length
}

function mayorEdad (edades){
    let mayor = edades[0];
    for (let i = 0; i < edades.length; i++){
        if (mayor < edades[i]){
            mayor = edades[i]
        }
    }
    return mayor;
}

function menorEdad (edades){
    let menor = edades[0];
    for (let i = 0; i < edades.length; i++){
        if (menor > edades[i]){
            menor = edades[i];
        }
        
    }
    return menor;
}
