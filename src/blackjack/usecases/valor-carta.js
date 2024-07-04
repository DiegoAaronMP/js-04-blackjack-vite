
/**
 * Esta función permite retornar el valor numérico de una carta
 * @param {String} carta String con el número y el tipo Ejemplo: '2D'
 * @returns {Number} El valor numérico de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}