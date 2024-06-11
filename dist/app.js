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
var Game = /** @class */ (function () {
    function Game() {
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.initializeGame();
    }
    Game.prototype.initializeGame = function () {
        var _this = this;
        var btnAttack = document.querySelector('attack');
        var btnSpecialAttack = document.querySelector('SpecialAttack');
        var btnheal = document.querySelector('heal');
        var btnGiveUp = document.querySelector('GiveUp');
        btnAttack.addEventListener('click', function () { return _this.attack; });
        btnSpecialAttack.addEventListener('click', function () { return _this.SpecialAttack; });
        btnheal.addEventListener('click', function () { return _this.heal; });
        btnGiveUp.addEventListener('click', function () { return _this.GiveUp; });
    };
    Game.prototype.attack = function () {
        var playerDamage = Math.floor(Math.random() * 10 + 1);
        this.monsterHealth -= playerDamage;
        this.updateHealthBars();
        this.monsterAttack();
    };
    Game.prototype.SpecialAttack = function () {
        var playerDamage = Math.floor(Math.random() * 20) + 10;
        this.monsterHealth -= playerDamage;
        this.updateHealthBars();
        this.monsterAttack();
    };
    Game.prototype.heal = function () {
        var healAmount = Math.floor(Math.random() * 20) + 10;
        this.playerHealth += healAmount;
        if (this.playerHealth > 100) {
            this.playerHealth = 100;
        }
        this.updateHealthBars();
        this.monsterAttack();
    };
    Game.prototype.GiveUp = function () {
        alert('Vous avez abandoné le combat.');
        this.resetGame();
    };
    Game.prototype.monsterAttack = function () {
        var monsterDamage = Math.floor(Math.random() * 10) + 1;
        this.playerHealth -= monsterDamage;
        this.updateHealthBars();
        this.checkGamerOver();
    };
    Game.prototype.updateHealthBars = function () {
        var playerHealthBar = document.getElementById('playerHealthBar');
        var monsterHealthBar = document.getElementById('monsterHealthBar');
        playerHealthBar.style.width = "".concat(this.playerHealth, "%");
        monsterHealthBar.style.width = "".concat(this.monsterHealth, "%");
    };
    Game.prototype.checkGamerOver = function () {
        if (this.playerHealth <= 0) {
            alert('Vous avez perdu le combat!');
            this.resetGame();
        }
        else if (this.monsterHealth <= 0) {
            alert('Vous avez gagné le combat!');
            this.resetGame();
        }
    };
    Game.prototype.resetGame = function () {
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.updateHealthBars();
    };
    return Game;
}());
new Game();
