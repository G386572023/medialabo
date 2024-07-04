// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b1 = document.querySelector('button#print');
b1.addEventListener('click', hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let kazu = document.querySelector('input[name="suji"]');
  let s = kazu.value;
  let yoso = Number(s);

  kaisu = kaisu+1;
  // 課題3-1: 正解判定する
  let span1 = document.querySelector('span#kaisu');
  span1.textContent = kaisu;
  let span2 = document.querySelector('span#answer');
  span2.textContent = yoso;

  // kotae と yoso が一致するかどうか調べて結果を出力
  let result = document.querySelector('p#result');
  if(yoso!==kotae && kaisu === 3){
    result.textContent='まちがい。答えは　' + kotae + '　でした。';
  }else if (kaisu > 3){
    result.textContent='答えは　' + kotae + '　でした。すでにゲームは終わっています。';
  }else if(yoso===kotae){
    result.textContent='正解です。おめでとう！';
  }else if(yoso<kotae && kaisu < 4){
   result.textContent ='まちがい。答えはもっと大きいですよ。';
  }else if(yoso>kotae && kaisu < 4){
    result.textContent ='まちがい。答えはもっと小さいですよ。';
  }
}
//題3-1における出力先はコンソール