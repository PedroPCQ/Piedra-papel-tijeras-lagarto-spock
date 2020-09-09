'use strict';

let userScore = 0;
let pcScore = 0;
const userScoreSpan = document.getElementById('user_score');
const pcScoreSpan = document.getElementById('pc_score');
const scoreBoard = document.querySelector('.score');
const result = document.querySelector('.message p');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const lizard = document.getElementById('lizard');
const spock = document.getElementById('spock');

function pcMoves() {
  const pcOptions = ['Piedra', 'Papel', 'Tijeras', 'Lagarto', 'Spock'];
  const random = Math.floor(Math.random()*5);
  const movePc = pcOptions[random];
  return movePc;
}

function userWin(userMove, pcMove) {
  userScore++;
  userScoreSpan.innerHTML = userScore;

  switch (userMove+pcMove) {
    case 'PiedraTijeras':
    case 'PiedraLagarto':
      result.innerHTML = userMove + " aplasta a " + pcMove +  ", tú ganas!!";
    break;
    case 'PapelPiedra':
      result.innerHTML = userMove + " envuelve a " + pcMove +  ", tú ganas!!";
    break;
    case 'PapelSpock':
      result.innerHTML = userMove + " desautoriza a " + pcMove +  ", tú ganas!!";
    break;
    case 'TijerasPapel':
      result.innerHTML = userMove + " corta a " + pcMove +  ", tú ganas!!";
    break;
    case 'TijerasLagarto':
      result.innerHTML = userMove + " decapita a " + pcMove +  ", tú ganas!!";
    break;
    case 'LagartoPapel':
      result.innerHTML = userMove + " se come a " + pcMove +  ", tú ganas!!";
    break;
    case 'LagartoSpock':
      result.innerHTML = userMove + " envenena a " + pcMove +  ", tú ganas!!";
    break;
    case 'SpockPiedra':
      result.innerHTML = userMove + " desintegra a " + pcMove +  ", tú ganas!!";
    break;
    case 'SpockTijeras':
      result.innerHTML = userMove + " rompe a " + pcMove +  ", tú ganas!!";
    break;
  }
}

function pcWin(userMove, pcMove) {
  pcScore++;
  pcScoreSpan.innerHTML = pcScore;

  switch (userMove+pcMove) {
    case 'TijerasPiedra':
    case 'LagartoPiedra':
      result.innerHTML = pcMove + " aplasta a " + userMove +  ", el PC gana!!";
    break;
    case 'PiedraPapel':
      result.innerHTML = pcMove + " envuelve a " + userMove +  ", el PC gana!!";
    break;
    case 'SpockPapel':
      result.innerHTML = pcMove + " desautoriza a " + userMove +  ", el PC gana!!";
    break;
    case 'PapelTijeras':
      result.innerHTML = pcMove + " corta a " + userMove +  ", el PC gana!!";
    break;
    case 'LagartoTijeras':
      result.innerHTML = pcMove + " decapita a " + userMove +  ", el PC gana!!";
    break;
    case 'PapelLagarto':
      result.innerHTML = pcMove + " se come a " + userMove +  ", el PC gana!!";
    break;
    case 'SpockLagarto':
      result.innerHTML = pcMove + " envenena a " + userMove +  ", el PC gana!!";
    break;
    case 'PiedraSpock':
      result.innerHTML = pcMove + " desintegra a " + userMove +  ", el PC gana!!";
    break;
    case 'TijerasSpock':
      result.innerHTML = pcMove + " rompe a " + userMove +  ", el PC gana!!";
    break;
  }
}

function sameMoves(userMove) {
  result.innerHTML = "Los dos habéis elegido " + userMove + ", es un empate!!";
}

function game(option) {
  const pcMove = pcMoves();
  const userMove = option;

  switch (userMove+pcMove) {
    case 'PiedraTijeras':
    case 'PiedraLagarto':
    case 'PapelPiedra':
    case 'PapelSpock':
    case 'TijerasPapel':
    case 'TijerasLagarto':
    case 'LagartoPapel':
    case 'LagartoSpock':
    case 'SpockPiedra':
    case 'SpockTijeras':
      userWin(userMove, pcMove);
    break;

    case 'TijerasPiedra':
    case 'LagartoPiedra':
    case 'PiedraPapel':
    case 'SpockPapel':
    case 'PapelTijeras':
    case 'LagartoTijeras':
    case 'PapelLagarto':
    case 'SpockLagarto':
    case 'PiedraSpock':
    case 'TijerasSpock':
      pcWin(userMove, pcMove);
    break;

    case 'PiedraPiedra':
    case 'PapelPapel':
    case 'TijerasTijeras':
    case 'LagartoLaarto':
    case 'SpockSpock':
      sameMoves(userMove);
    break;
  }
}

function main() {
  rock.addEventListener('click', ()=> game("Piedra"));
  paper.addEventListener('click', ()=> game("Papel"));
  scissors.addEventListener('click', ()=> game("Tijeras"));
  lizard.addEventListener('click', ()=> game("Lagarto"));
  spock.addEventListener('click', ()=> game("Spock"));
}

main();
