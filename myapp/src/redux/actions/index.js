// const GET_TARJETAS = "GET_TARJETAS";

// export function getTarjetas

/*  con esto llevamos el id de la 1ra tarjeta clickeada al state global    */ 
export function getTarjeta1 () {
    return {
        type: 'GET_TARJETA1'
    }
};

/*  con esto llevamos el id de la 2da tarjeta clickeada al state global    */ 
export function getTarjeta2 () {
    return {
        type: 'GET_TARJETA1'
    }
};

/*  con esto comparamos ambas tarjetas clickeadas y si son iguales, devolvemos un "match!" oAlgoNose   */ 
export function compararTarjetas () {
    return {
        type: 'COMPARAR_TARJETAS'
    }
};