// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;
let n = 0;

let b1 = document.querySelector('button#print');
b1.addEventListener('click', hantei);

function hantei() {

  let kazu = document.querySelector('input[name="suji"]');
  let s = kazu.value;
  let yoso = Number(s);

  kaisu = kaisu+1;

  let span1 = document.querySelector('span#kaisu');
  span1.textContent = kaisu;
  let span2 = document.querySelector('span#answer');
  span2.textContent = yoso;


  let result = document.querySelector('p#result');
  if(yoso!==kotae && kaisu === 3){
    result.textContent='まちがい。答えは　' + kotae + '　でした。';
  }else if (kaisu > 3 || n === 1){
    result.textContent='答えは　' + kotae + '　でした。すでにゲームは終わっています。';
  }else if(yoso===kotae){
    result.textContent='正解です。おめでとう！';
    n = 1;
  }else if(yoso<kotae && kaisu < 4){
   result.textContent ='まちがい。答えはもっと大きいですよ。';
  }else if(yoso>kotae && kaisu < 4){
    result.textContent ='まちがい。答えはもっと小さいですよ。';
  }
}