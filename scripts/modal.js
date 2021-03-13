const displayWinner = (player) =>{
    const modalWinner = document.querySelector('#modalWinner');
    const playerWinner = document.querySelector('#winner');
    const restartGame = document.querySelector('#rematch');
    modalWinner.style.display = "block";

    restartGame.addEventListener('click', () =>{
        board.forEach(cell =>{
            cell.innerHTML = '';
        });
        currentPlayer.innerHTML = '';
        playerTurn = true;
        winningO.length = 0;
        winningX.length = 0;
        modalWinner.style.display = 'none'
        addChip();
    });

    return player ? playerWinner.innerHTML = player + " Wins!" : playerWinner.innerHTML = "Draw!";

}