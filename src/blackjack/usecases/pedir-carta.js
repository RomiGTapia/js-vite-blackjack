// Esta función me permite tomar una carta
/**
 * 
 * @param {Array<String>} deck Ejemplo['AS','QD','2H']
 * @returns {<String>} retorna una carta del deck Ejemplo : AS
 */


export const pedirCarta = (deck) => {
    
    console.log(deck);
    if ( !deck||deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
