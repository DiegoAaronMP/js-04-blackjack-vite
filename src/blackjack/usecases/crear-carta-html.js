
/**
 * Función para crear un elemento imagen de una carta
 * @param {String} carta String con el número y el tipo Ejemplo: '2D'
 * @param {HTMLElement} divCartas Elemento HTML para mostrar las cartas
 */
export const crearCartaHTML = (carta, divCartas) => {
    if (!carta) {
        throw new Error('La carta es obligatoria');
    }

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartas.append(imgCarta);
}