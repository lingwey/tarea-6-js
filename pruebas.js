function provarValidacionIngresoFamiliares(){
    console.assert(
        validarIngresoFamiliares(0) === 'deves ingresar el numero de integrantes familiares',
        'fallo la validacion de familiares, si ingreso un numero o si ingreso 0'
    );
    console.assert(
        validarIngresoFamiliares(-1) === 'el numero de familiares no puede ser negativo',
        'fallo la validacion de numero negativo en la validacion de ingreso  familiares'
    )
    console.assert(
        validarIngresoFamiliares(',.,.,.,.,.,') === 'solo puedes ingresar numeros enteros',
        'fallo la validacion de numeros enteros y caracteres en la validacion de ingreso familiares'
    )
    console.assert(
        validarIngresoFamiliares(4) === '',
        'fallo la validacion con un numero valido en la validacion de ingreso  familiares'
    )
}

function provarValidacionEdadesFamilia(){
    console.assert(
        validarEdadesFamilia(0) === 'deve ingresar una edad',
        'fallo la validacion de edades, si ingreso un numero o ingreso 0'
    )
    console.assert(
        validarEdadesFamilia(-1) === 'la edad no puede ser menor a 0',
        'fallo la validacion de numero negativo en la validacion de edades'
    )
    console.assert(
        validarEdadesFamilia('.,.....,.,,.,..,,.') === 'solo se puede ingresar numeros enteros',
        'fallo la validacion de numeros enteros y caracteres de la validacion de edades'
    )
    console.assert(
        validarEdadesFamilia(45) === '',
        'fallo la validacion de edades con un numero valido'
    )
}
