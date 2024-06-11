/*
- créer 4 variables, btnAttack, btnSpecialAttack, btnheal, btnGiveUp,
- j'assigne à chaque variable une fonction :
- btnAttack = fonction (diminuer le chiffre qui est à l'intérieur de healthmonster, mais diminue aussi le nombre qui est à l'intérieur de healthplayer);
- btnSpecialAttack = fonction (diminuer le chiffre qui est à l'intérieur de healthmonster, mais diminue aussi le nombre qui est à l'intérieur de healthplayer);
- btnHeal = fonction (augmente le nombre qui est à l'intérieur de healthplayer s'il est inférieur à 100)
- btnGiveUp = fonction (envoie une alerte nous indiquant que nous avons abandonné la partie)

- Les outils:

if, else if, else,: mettre des condition
Math.floor/ Math.random: calculer un nombre aléatoire
this: appeler des objet dans des fonctions
*/
var Game = /** @class */ (function () {
    function Game() {
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.initialiseGame();
    }
    Game.prototype.initialiseGame = function () {
        var _this = this;
        var btnAttack = document.querySelector(".attack");
        var btnSpecialAttack = document.querySelector(".SpecialAttack");
        var btnheal = document.querySelector(".heal");
        var btnGiveUp = document.querySelector(".GiveUp");
        btnAttack.addEventListener('click', function () { return _this.attack; });
        btnSpecialAttack.addEventListener('click', function () { return _this.SpecialAttack; });
        btnheal.addEventListener('click', function () { return _this.heal; });
        var playerHealthBar = document.getElementById('playerHealthBar');
        var monsterHealthBar = document.getElementById('monsterHealthBar');
    };
    Game.prototype.attack = function () {
        var playerDamage = Math.floor(Math.random() * 10 + 1);
        this.monsterHealth -= playerDamage;
        this.monsterAttack();
    };
    Game.prototype.SpecialAttack = function () {
        var playerDamage = Math.floor(Math.random() * 20) + 10;
        this.monsterHealth -= playerDamage;
        this.monsterAttack();
    };
    Game.prototype.heal = function () {
        var healAMount = Math.floor(Math.random() * 20) + 10;
        this.playerHealth += healAMount;
        if (this.playerHealth > 100) {
            this.playerHealth = 100;
        }
        this.monsterAttack();
    };
    Game.prototype.giveUp = function () {
        alert('Vous avez abandoné le combat.');
        this.resetGame();
    };
    Game.prototype.monsterAttack = function () {
        var monsterDamage = Math.floor(Math.random() * 10) + 1;
        this.playerHealth -= monsterDamage;
        this.checkGamerOver();
    };
    Game.prototype.checkGamerOver = function () {
        if (this.playerHealth <= 0) {
            alert('Vous avez perdu le combat');
        }
        else if (this.monsterHealth <= 0) {
            alert('Vous avez gagné le combat');
        }
    };
    Game.prototype.resetGame = function () {
        this.playerHealth = 100;
        this.monsterHealth = 100;
    };
    return Game;
}());
