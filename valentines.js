const yesButton = document.querySelector('.yes');
const noButton = document.querySelector('.no');
const answerReplace = document.querySelector('.container');
let answer = document.querySelector('.answer');
console.log(answer);
console.log(yesButton);

function replaceImg(x){
  if(x === 1)
  {
    const img = yesButton.querySelector('.happy-kitty');
    console.log(img);
    img.src = "/valentines/images/cute-cat-lol.gif"
    img.style.width = '200px';
    img.style.height = '125px';
    answerReplace.replaceChild(img, answer);
  }
  else if(x === 2)
  {
    const img = noButton.querySelector('.sad-kitty');
    console.log(img);
    img.src = "/valentines/images/sad-cat.gif"
    img.style.width = '200px';
    img.style.height = '150px';
    answerReplace.replaceChild(img, answer);
  }
}