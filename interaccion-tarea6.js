const prueva = 2;
document.querySelector('#siguiente-paso').onclick = function(event){
    const cantidadIntegrantes = document.querySelector('#cantidad');
    const grupoFamiliar = Number(cantidadIntegrantes.value);
    //const grupoFamiliar = prueva;

    borrarGrupoFamiliar ();
    crearGrupoFamiliar(grupoFamiliar);
    esconderIngreso()

    event.preventDefault();
    console.log ("hiciste click")
    console.log(cantidadIntegrantes.value)
}

// const siguientePaso = document.querySelector('#siguiente-paso')

// siguientePaso.onclick = function(event){
//     const cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
//     const grupoFamiliar = Number(cantidadIntegrantes.value);

//     borrarGrupoFamiliar ();
//     crearGrupoFamiliar(grupoFamiliar);
//     esconderIngreso()

//     event.preventDefault();
//     console.log ("hiciste click")
//     console.log(cantidadIntegrantes.value)
// }

document.querySelector('#calcular').onclick = function(event){
    const edadIntegrantes = edadesGrupoFamiliar();
    mostrarCalculos('mayor',mayorEdad(edadIntegrantes));
    mostrarCalculos('menor',menorEdad(edadIntegrantes));
    mostrarCalculos('promedio',promedio(edadIntegrantes));
    mostrarResultados();

    event.preventDefault();
}




document.querySelector('#reiniciar').onclick = reiniciar;

function crearGrupoFamiliar(grupoFamiliar){
    if (grupoFamiliar > 0){
        mostrarBotonCalculo ();
    } else {
       reiniciar (); 
    }

    for (let i = 0; i < grupoFamiliar; i++){
        crearIntegrante(i);
    }
}

function borrarGrupoFamiliar(){
    const $familiar = document.querySelectorAll('.familiar')
    for (let i = 0; i < $familiar.length; i++){
        $familiar[i].remove();
    }
}


function crearIntegrante(integrante){
    const $div = document.createElement('div');
    $div.className = 'familiar';

    const $label = document.createElement('label');
    $label.textContent = "edad del integrante " + (integrante + 1);
    const $input = document.createElement('input')
    $input.type = 'number'

    $div.appendChild($label);
    $div.appendChild($input);

    const $cajaIntegrantes = document.querySelector('#caja-integrantes');
    $cajaIntegrantes.appendChild($div);
}

function reiniciar(){
    borrarGrupoFamiliar();
    esconderBotonCalculo();
    esconderResultado();
    mostrarIngreso();
}

function mostrarBotonCalculo(){
    document.querySelector('#calcular').className = '';
}

function esconderBotonCalculo(){
    document.querySelector('#calcular').className = 'escondido'
}

function mostrarResultados(){
    document.querySelector('#calculos').className = '';
}

function esconderResultado(){
    document.querySelector('#calculos').className = 'escondido';
}

function esconderIngreso(){
    document.querySelector('#mostrar').className = 'escondido';
}

function mostrarIngreso(){
    document.querySelector('#mostrar').className = '';
}

function mostrarCalculos(tipo, dato){
    document.querySelector(`#${tipo}-edad`).textContent = dato;
}

function edadesGrupoFamiliar(){
    const $integrantes = document.querySelectorAll('.familiar input');
    const edades = [];
    for (let i =0; i < $integrantes.length; i++){
        edades.push(Number($integrantes[i].value));
    }

    return edades;

}


