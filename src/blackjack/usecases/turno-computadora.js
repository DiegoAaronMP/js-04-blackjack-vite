import {crearCartaHTML, pedirCarta, valorCarta} from './'

/**
 * turno de la computadora
 * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar los puntos de la computadora
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostrar las cartas
 * @param {Array<String>} deck Arreglo con la baraja de cartas
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if (!puntosMinimos) {
        throw new Error('Puntos mínimos son necesarios');
    }
    if (!puntosHTML) {
        throw new Error('Argumento PuntosHTML es necesario');
    }

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        crearCartaHTML(carta, divCartasComputadora);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}