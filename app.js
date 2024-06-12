/*
- créer 4 variables, btnAttack, btnSpecialAttack, btnheal, btnGiveUp,
- j'assigne à chaque variable une fonction :
- btnAttack = fonction (diminuer le chiffre qui est à l'intérieur de healthmonster, mais diminue aussi le nombre qui est à l'intérieur de healthplayer);
- btnSpecialAttack = fonction (diminuer le chiffre qui est à l'intérieur de healthmonster, mais diminue aussi le nombre qui est à l'intérieur de healthplayer);
- btnHeal = fonction (augmente le nombre qui est à l'intérieur de healthplayer s'il est inférieur à 100)
- btnGiveUp = fonction (envoie une alerte nous indiquant que nous avons abandonné la partie)

- Les outils:

if, else if, else,: mettre des conditions
Math.floor/ Math.random: calculer un nombre aléatoire
this: appeler des objet dans des fonctions
*/
class Game {
    constructor() {
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.initializeGame();
    }
    initializeGame() {
        const btnAttack = document.getElementById('attackbtn');
        const btnSpecialAttack = document.getElementById('specialAttackbtn');
        const btnheal = document.getElementById('healbtn');
        const btnGiveUp = document.getElementById('giveUpbtn');
        btnAttack.addEventListener('click', () => this.attack());
        btnSpecialAttack.addEventListener('click', () => this.SpecialAttack());
        btnheal.addEventListener('click', () => this.heal());
        btnGiveUp.addEventListener('click', () => this.GiveUp());
    }
    attack() {
        let playerDamage = Math.floor(Math.random() * 10 + 1);
        this.monsterHealth -= playerDamage;
        this.updateHealthBars();
        this.monsterAttack();
    }
    SpecialAttack() {
        let playerDamage = Math.floor(Math.random() * 20) + 10;
        this.monsterHealth -= playerDamage;
        this.updateHealthBars();
        this.monsterAttack();
    }
    heal() {
        let healAmount = Math.floor(Math.random() * 20) + 10;
        this.playerHealth += healAmount;
        if (this.playerHealth > 100) {
            this.playerHealth = 100;
        }
        this.updateHealthBars();
        this.monsterAttack();
    }
    GiveUp() {
        alert('You have given up the fight.');
        this.resetGame();
    }
    monsterAttack() {
        let monsterDamage = Math.floor(Math.random() * 10) + 1;
        this.playerHealth -= monsterDamage;
        this.updateHealthBars();
        this.checkGameOver();
    }
    updateHealthBars() {
        const playerHealthBar = document.getElementById('playerHealthBar');
        const monsterHealthBar = document.getElementById('monsterHealthBar');
        const logsElement = document.getElementById('logs');
        playerHealthBar.style.width = `${this.playerHealth}%`;
        monsterHealthBar.style.width = `${this.monsterHealth}%`;
    }
    checkGameOver() {
        if (this.playerHealth <= 0) {
            alert('You have lost the fight!');
            this.resetGame();
        }
        else if (this.monsterHealth <= 0) {
            alert('You have won the fight!');
            this.resetGame();
        }
    }
    resetGame() {
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.updateHealthBars();
    }
}
new Game();
