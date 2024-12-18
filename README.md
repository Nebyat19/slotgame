

# 🎰 Slot Machine Simulator

A fun and interactive **Slot Machine Simulator** implemented in JavaScript! Test your luck, place your bets, and see if you can win big. 🍒🍋🍊🍇

## 🚀 Features

- **Deposit & Bet**: Start the game by depositing money and choosing your bet per line.
- **Spin the Reels**: Watch the slot machine spin and land on random symbols.
- **Winning Combinations**: Earn rewards for matching symbols on selected lines.
- **Dynamic Gameplay**: Play until you run out of money or decide to cash out.

## 🛠️ How It Works

1. Deposit an initial balance.
2. Choose the number of lines (1-3) to play.
3. Place a bet amount for each line.
4. Spin the slot machine and see the results.
5. Match symbols on a line to win rewards.
6. Continue playing or cash out your remaining balance.

## 🎮 Gameplay Symbols

| Symbol | Count | Value |
|--------|-------|-------|
| 🍒     | 2     | 5     |
| 🍋     | 4     | 4     |
| 🍊     | 6     | 3     |
| 🍇     | 8     | 2     |

## 💻 Code Example with Copy Button


```html
<div>
  <pre>
    <code id="slotMachineCode">
      const prompt = require("prompt-sync")();

      const MAX_LINES = 3;
      const MIN_LINES = 1;
      const ROWS = 3;
      const COLS = 3;

      const SYMBOLS = [
          { symbol: '🍒', count: 2, value: 5 },
          { symbol: '🍋', count: 4, value: 4 },
          { symbol: '🍊', count: 6, value: 3 },
          { symbol: '🍇', count: 8, value: 2 },
      ];

      const deposit = () => { /* Your code */ };
      const getNumberOfLines = () => { /* Your code */ };
      const getBet = (balance, numberOfLines) => { /* Your code */ };
      const spine = () => { /* Your code */ };
      const trasnpose = (reels) => { /* Your code */ };
      const printRows = (rows) => { /* Your code */ };
      const getWinnings = (rows, bet, lines) => { /* Your code */ };
      const game = () => { /* Your code */ };

      game();
    </code>
  </pre>
  <button onclick="copyCode()">Copy Code</button>
</div>

<script>
  function copyCode() {
    const code = document.getElementById("slotMachineCode").innerText;
    navigator.clipboard.writeText(code).then(() => {
      alert("Code copied to clipboard!");
    });
  }
</script>
```

## 🎉 Example Gameplay

```plaintext
Deposit Amount: 50
Your Balance: $50
Lines [1-3]: 3
Bet Per Line: 5
🍒 | 🍋 | 🍊
🍊 | 🍊 | 🍇
🍋 | 🍇 | 🍒
You lost
Balance: $35
play again? [y/n]: y
```

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for suggestions or bug fixes.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🎯 Future Enhancements

- Add a graphical interface for improved gameplay.
- Introduce additional symbols and higher payouts.
- Track player statistics and game history.

