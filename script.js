const firstRandomNum = Math.floor(Math.random() * 6) + 1;
const firstDiceImage = 'assets/dice' + firstRandomNum + '.png';
const firstRandomNum2 = Math.floor(Math.random() * 6) + 1;
const firstDiceImage2 = 'assets/dice' + firstRandomNum2 + '.png';
const firstRandomNum3 = Math.floor(Math.random() * 6) + 1;
const firstDiceImage3 = 'assets/dice' + firstRandomNum3 + '.png';
document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);
document.querySelectorAll('img')[1].setAttribute('src', firstDiceImage2);
document.querySelectorAll('img')[2].setAttribute('src', firstDiceImage3);