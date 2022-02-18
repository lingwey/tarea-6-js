
document.querySelector('#siguiente-paso').onclick = function(event){
     event.preventDefault();
    const cantidadIntegrantes = document.querySelector('#cantidad');
    const grupoFamiliar = Number(cantidadIntegrantes.value);
    const validarFamilia = validarIngresoFamiliares(grupoFamiliar);

    const error = {
       'cantidad-familiares': validarFamilia 
    }
    const siguiente = manejarErrores (error) === 0;

    if (siguiente){
        borrarGrupoFamiliar ();
        crearGrupoFamiliar(grupoFamiliar);
        esconderIngreso();
        limpiarMarcadorErrores();
    }
}

document.querySelector('#calcular').onclick = function(event){
    event.preventDefault();
    const validarEdades = validarEdadesFamilia()
    const error = {
        edades: validarEdades
    }
    const $calcular = manejarErrores(error) === 0;
    if ($calcular){
        const edadIntegrantes = obtenerEdadesGrupoFamiliar();
        mostrarCalculos('mayor',mayorEdad(edadIntegrantes));
        mostrarCalculos('menor',menorEdad(edadIntegrantes));
        mostrarCalculos('promedio',promedio(edadIntegrantes));
        mostrarResultados();
        limpiarMarcadorErrores();
    }
    
}




document.querySelector('#reiniciar').onclick = reiniciar;

function crearGrupoFamiliar(grupoFamiliar){
    if (grupoFamiliar > 0){
        mostrarBotonesResetCalcular();
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
    $label.className = 'input-group-text'
    $label.textContent = "edad del integrante " + (integrante + 1);
    const $input = document.createElement('input')
    $input.type = 'number'
    $input.className ='form-control'

    $div.appendChild($label);
    $div.appendChild($input);

    const $cajaIntegrantes = document.querySelector('#caja-integrantes');
    $cajaIntegrantes.appendChild($div);
}

function reiniciar(){
    borrarGrupoFamiliar();
    esconderBotonesResetCalcular();
    esconderResultado();
    mostrarIngreso();
    limpiarMarcadorErrores();
}

function esconderBotonesResetCalcular(){
    document.querySelector('#botones-calcular-resetear').className = 'escondido';
}
function mostrarBotonesResetCalcular(){
    document.querySelector('#botones-calcular-resetear').className = '';
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
    document.querySelector('#mostrar').className = 'visible';
}

function mostrarCalculos(tipo, dato){
    document.querySelector(`#${tipo}-edad`).textContent = dato;
}

function obtenerEdadesGrupoFamiliar(){
    const $integrantes = document.querySelectorAll('.familiar input');
    const edades = [];
    for (let i =0; i < $integrantes.length; i++){
        edades.push(Number($integrantes[i].value));
    }

    return edades;

}


function validarIngresoFamiliares (familia){
    if (familia === 0){
        return 'deves ingresar el numero de integrantes familiares';
    }
    if (familia < 0){
        return 'el numero de familiares no puede ser negativo'
    }
    if (!/^[0-9]+$/i.test(familia)){
        return 'solo puedes ingresar numeros enteros'
    }
    return ''
}

function validarEdadesFamilia (){
    let revisionEdades = obtenerEdadesGrupoFamiliar();
    for (let i = 0; i < revisionEdades.length; i++){
        if (revisionEdades[i] === 0){
            return 'deve ingresar una edad'
            break
        }
        if (revisionEdades[i] < 0){
            return 'la edad no puede ser menor a 0'
            break
        }
        if (!/^[0-9]+$/i.test(revisionEdades[i])){
            return 'solo se puede ingresar numeros enteros'
        }
    }
}

function manejarErrores(errores){
    const llave = Object.keys(errores);
    const mostrarError = document.querySelector('#mostrar-error')
    let cantidadErrores = 0;

    llave.forEach(function(llave){
        const error = errores[llave];

        if (error){
            cantidadErrores++;
            $error = document.createElement('li');
            $error.textContent = error;
            $error.className = 'error alert alert-danger';
            mostrarError.appendChild($error);
        }
    })
    return cantidadErrores;
}

function limpiarMarcadorErrores(){
    const $errores = document.querySelectorAll('.error')
    for (let i = 0; i < $errores.length; i++){
        $errores[i].remove()
    }
}
