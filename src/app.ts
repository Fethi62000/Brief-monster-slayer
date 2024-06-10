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


class Game {
    private playerHealth: number = 100;
    private monsterHealth: number = 100;

}

const btnAttack = document.querySelector(".attack") as HTMLButtonElement;
const btnSpecialAttack = document.querySelector(".SpecialAttack") as HTMLButtonElement
const btnheal = document.querySelector(".heal") as HTMLButtonElement
const btnGiveUp = document.querySelector(".GiveUp") as HTMLButtonElement


btnAttack.addEventListener('click', () => this.attack)
btnSpecialAttack.addEventListener('click', () => this.SpecialAttack)
btnheal.addEventListener('click', () => this.heal)
btnGiveUp.addEventListener('click', () => this.GiveUp)



const playerHealthBar = document.getElementById('playerHealthBar')
const monsterHealthBar = document.getElementById('monsterHealthBar')
















