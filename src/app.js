prompt = require("prompt-sync")();

const MAX_LINES = 3;
const MIN_LINES = 1;
const ROWS = 3;
const COLS = 3;



const SYMBOLS = [
    {
        symbol: '🍒',
        count: 2,
        value: 5,
    },
    {
        symbol: '🍋',
        count: 4,
        value: 4,
    },
    {
        symbol: '🍊',
        count: 6,
        value: 3,
    },
    {
        symbol: '🍇',
        count: 8,
        value: 2,
    },

]

const mappedSymbols = SYMBOLS.reduce((acc, curr) => { acc[curr.symbol] = curr.value; return acc }, {})

const deposit = () => {
    while (true) {
        let deposit_amount = prompt("Deposit Amount: ");

        if (validateNumber(deposit_amount)) {
            return deposit_amount;
        }
        console.log("Invalid amount");
    }
};

function getNumberOfLines() {
    while (true) {
        let lines = prompt("Lines [1-3]: ");
        if (validateNumber(lines) && lines >= MIN_LINES && lines <= MAX_LINES) {
            return lines;
        }
        console.log("Invalid number of lines");
    }
}

function validateNumber(amount) {
    amount = parseInt(amount);
    return isNaN(amount) || amount <= 0 ? false : true;
}

const getBet = (balance, numberOfLines) => {
    while (true) {
        let bet = prompt("Bet Per Line: ");
        if (
            validateNumber(bet) &&
            bet <= balance &&
            bet * numberOfLines <= balance
        ) {
            return bet;
        }
        console.log("Invalid bet amount");
    }
};

const spine = () => {
    const symbols = [];
    SYMBOLS.forEach(({ symbol, count }) => {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    );

    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++) {

        let reelsSymbol = [...symbols]

        for (let j = 0; j < ROWS; j++) {
            let randomIndex = Math.floor(Math.random() * reelsSymbol.length)
            let selectedSymbols = reelsSymbol[randomIndex];

            reels[i].push(selectedSymbols);
            reelsSymbol.splice(randomIndex, 1);
        }
    }

    return reels
};

const trasnpose = (reels) => {
    let transposedReel = [[], [], []];

    for (let i = 0; i < reels.length; i++) {
        for (let j = 0; j < reels[i].length; j++) {
            transposedReel[j].push(reels[i][j])

        }

    }

    return transposedReel
}

function printRows(rows) {

    for (const row of rows) {
        rowString = ""
        for (const [i, symbol] of row.entries()) {
            rowString += symbol
            if (i < row.length - 1) rowString += " | "
        }
        console.log(rowString)
    }

}

const getWinnings = (rows, betamount, lines) => {
    let winning = 0;
    for (let i = 0; i < lines; i++) {
        let line = rows[i];
        let symbol = line[0];
        let win = true;
        for (let j = 1; j < line.length; j++) {
            if (line[j] !== symbol) {
                win = false;
                break;
            }
        }
        if (win) {
            winning += mappedSymbols[symbol] * betamount;
        }
    }
    return winning
}
const game = () => {
    let balance = deposit();

    while (true) {
        console.log("Your Balance: $" + balance)
        const numberOfLines = getNumberOfLines();
        const bet = getBet(balance, numberOfLines);
        balance -= bet * numberOfLines
        const reels = spine()
        transposedReel = trasnpose(reels)
        printRows(transposedReel)

        const winnigs = getWinnings(transposedReel, bet, numberOfLines)
        balance += winnigs

        if (winnigs === 0) { console.log("You lost") } else console.log("You won $" + winnigs)
        if (balance === 0) {
            console.log("You are out of money")
            break
        }
        console.log("Balance: $" + balance)
        let playAgain = prompt("play again? [y/n]: ")
        if (playAgain !== 'y') {
            break
        }

    }

}

game()