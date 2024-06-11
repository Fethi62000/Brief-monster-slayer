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


    private playerHealth: number = 100;
    private monsterHealth: number = 100;

    constructor() {
        this.initializeGame();
    }

    private initializeGame() {

        const btnAttack = document.querySelector('#attackbtn') as HTMLButtonElement;
        const btnSpecialAttack = document.querySelector('#specialAttackbtn') as HTMLButtonElement;
        const btnheal = document.querySelector('#healbtn') as HTMLButtonElement;
        const btnGiveUp = document.querySelector('#giveUpbtn') as HTMLButtonElement;


        btnAttack.addEventListener('click', () => this.attack());
        btnSpecialAttack.addEventListener('click', () => this.SpecialAttack());
        btnheal.addEventListener('click', () => this.heal());
        btnGiveUp.addEventListener('click', () => this.GiveUp());
    }

    private attack() {
        let playerDamage = Math.floor(Math.random() * 10 + 1);
        this.monsterHealth -= playerDamage;
        this.updateHealthBars();
        this.monsterAttack();
    }

    private SpecialAttack() {
        let playerDamage = Math.floor(Math.random() * 20) + 10;
        this.monsterHealth -= playerDamage;
        this.updateHealthBars();
        this.monsterAttack();
    }

    private heal() {
        let healAmount = Math.floor(Math.random() * 20) + 10;
        this.playerHealth += healAmount;
        if (this.playerHealth > 100) {
            this.playerHealth = 100;
        }
        this.updateHealthBars();
        this.monsterAttack();
    }

    private GiveUp() {
        alert('Vous avez abandoné le combat.')
        this.resetGame();
    }

    private monsterAttack() {
        let monsterDamage = Math.floor(Math.random() * 10) + 1;
        this.playerHealth -= monsterDamage;
        this.updateHealthBars();
        this.checkGameOver();
    }

    private updateHealthBars() {
        const playerHealthBar = document.getElementById('playerHealthBar') as HTMLDivElement;
        const monsterHealthBar = document.getElementById('monsterHealthBar') as HTMLDivElement;
        const logsElement = document.getElementById('logs') as HTMLDivElement;
        playerHealthBar.style.width = `${this.playerHealth}%`;
        monsterHealthBar.style.width = `${this.monsterHealth}%`;
    }

    private checkGameOver() {
        if (this.playerHealth <= 0) {
            alert('Vous avez perdu le combat!');
            this.resetGame();
        } else if (this.monsterHealth <= 0) {
            alert('Vous avez gagné le combat!');
            this.resetGame();
        }
    }

    private resetGame() {
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.updateHealthBars();
    }

}

new Game();
