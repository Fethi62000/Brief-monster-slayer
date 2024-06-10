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
var _this = this;
var Game = /** @class */ (function () {
    function Game() {
        this.playerHealth = 100;
        this.monsterHealth = 100;
    }
    return Game;
}());
let btnAttack = document.querySelector(".attack");
let btnSpecialAttack = document.querySelector(".SpecialAttack");
let btnheal = document.querySelector(".heal");
let btnGiveUp = document.querySelector(".GiveUp");
btnAttack.addEventListener('click', function () { return _this.attack; });
btnSpecialAttack.addEventListener('click', function () { return _this.SpecialAttack; });
btnheal.addEventListener('click', function () { return _this.heal; });
btnGiveUp.addEventListener('click', function () { return _this.GiveUp; });
let playerHealthBar = document.getElementById('playerHealthBar');
let monsterHealthBar = document.getElementById('monsterHealthBar');
