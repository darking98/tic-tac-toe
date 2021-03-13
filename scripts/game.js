/* ARRAYS*/
const fichas = document.querySelectorAll(".cell");
const board = Array.from(fichas);

const winningCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/* VARIABLES */

let winningX = [];
let winningO = [];
let playerTurn = true;
let chip;
let currentPlayer = document.querySelector("#jugadorActivo");

/*FUNCIONES*/

const addChip = () => {
    //El primer jugador siempre va a ser X...
    currentPlayer.innerHTML = 'X is your TURN!'
    board.forEach((cell) => {
        cell.addEventListener("click", () => {
            //Pregunta si la celda no esta ocupada
            if (cell.textContent != chip) {
                //Asigna las fichas a cada jugador
                chip = playerTurn ? "X" : "O";

                //Cambia los turnos de los jugadores
                playerTurn = playerTurn || !playerTurn ? !playerTurn : playerTurn;
                
                //Muesta el nombre del jugador que tiene turno en pantalla
                currentPlayer.innerHTML = playerTurn ? 'X is your TURN!' : 'O is your TURN!';
                // Agrega la ficha al tablero
                cell.textContent = chip;

                // Dependiendo a que jugador le toque, pushea el indice de la celda marcada por el jugador a su correspondiente array
                playerTurn ? winningX.push(board.indexOf(cell)) : winningO.push(board.indexOf(cell));
            }

            //Pregunta quien gano o si empataron
            if (isWinning(winningX) || isWinning(winningO)) {
                displayWinner(chip);
            } else if (board.every(isDraw)) {
                displayWinner();
            }

        });
    });
};

//Determina un empate si las celdas estan vacias
const isDraw = (cell) => cell.textContent != "";

//Pregunta si los arrays de cada jugador son iguales con alguna jugada ganadora
function isWinning(playerMoves) {
    //Esta será tu callback para llamar en every.
    function isValidWinningCombo(comboElement) {
        return playerMoves.includes(comboElement);
    }
    //iteramos en todos los combos ganadores posibles
    for (combo of winningCombo) {
        /* si todos los elementos de un combo se encuentran en los movimientos
        del jugador, lo podemos declarar ganador. */
    if (combo.every(isValidWinningCombo)) {
      return true;
    }
  }
  //de lo contrario decimos que no es un ganador
  return false;
}


addChip();
