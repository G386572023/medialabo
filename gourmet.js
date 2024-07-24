

function print(data) {


let div1 = document.querySelector('div#result');

let zentai = document.createElement('div');
zentai.classList.add("zentai");
div1.insertAdjacentElement('beforeend',zentai);
let h3two = document.createElement('h3');
h3two.textContent = '(検索結果は' + data.results.shop.length + '件)';
zentai.insertAdjacentElement('beforeend',h3two);
let a = 0;
for(let n of data.results.shop){
  a = a + 1;

  let h3one = document.createElement('h3');
  h3one.classList.add("kekka");
  h3one.textContent = '検索結果' + a + '件目'; 
  zentai.insertAdjacentElement('beforeend',h3one); 

  let table1 = document.createElement('table');
  h3one.insertAdjacentElement('afterend',table1); 

  let tbody1 = document.createElement('tbody');
  tbody1.classList.add('ichi');
  table1.insertAdjacentElement('beforeend',tbody1);

  let tr1 = document.createElement('tr');
  tbody1.insertAdjacentElement('beforeend',tr1);
  let th1 = document.createElement('th');
  th1.setAttribute('scope','col');
  th1.textContent = '名前'; 
  tr1.insertAdjacentElement('beforeend',th1); 
  let td1 = document.createElement('td');
  td1.textContent = n.name;
  tr1.insertAdjacentElement('beforeend',td1);

  let tr2 = document.createElement('tr');
  tbody1.insertAdjacentElement('beforeend',tr2);
  let th2 = document.createElement('th');
  th2.setAttribute('scope','col');
  th2.textContent = 'アクセス'; 
  tr2.insertAdjacentElement('beforeend',th2); 
  let td2 = document.createElement('td');
  td2.textContent = n.access;
  tr2.insertAdjacentElement('beforeend',td2);

  let tr3 = document.createElement('tr');
  tbody1.insertAdjacentElement('beforeend',tr3);
  let th3 = document.createElement('th');
  th3.setAttribute('scope','col');
  th3.textContent = '住所'; 
  tr3.insertAdjacentElement('beforeend',th3); 
  let td3 = document.createElement('td');
  td3.textContent = n.address;
  tr3.insertAdjacentElement('beforeend',td3);

  let tr4 = document.createElement('tr');
  tbody1.insertAdjacentElement('beforeend',tr4);
  let th4 = document.createElement('th');
  th4.setAttribute('scope','col');
  th4.textContent = '予算'; 
  tr4.insertAdjacentElement('beforeend',th4); 
  let td4 = document.createElement('td');
  td4.textContent = n.budget.name;
  tr4.insertAdjacentElement('beforeend',td4);

  let tr5 = document.createElement('tr');
  tbody1.insertAdjacentElement('beforeend',tr5);
  let th5 = document.createElement('th');
  th5.setAttribute('scope','col');
  th5.textContent = 'キャッチコピー'; 
  tr5.insertAdjacentElement('beforeend',th5); 
  let td5 = document.createElement('td');
  td5.textContent = n.catch;
  tr5.insertAdjacentElement('beforeend',td5);

  let tr6 = document.createElement('tr');
  tbody1.insertAdjacentElement('beforeend',tr6);
  let th6 = document.createElement('th');
  th6.setAttribute('scope','col');
  th6.textContent = 'ジャンル'; 
  tr6.insertAdjacentElement('beforeend',th6); 
  let td6 = document.createElement('td');
  td6.textContent = n.genre.name;
  tr6.insertAdjacentElement('beforeend',td6);

  let tr7 = document.createElement('tr');
  tbody1.insertAdjacentElement('beforeend',tr7);
  let th7 = document.createElement('th');
  th7.setAttribute('scope','col');
  th7.textContent = '営業時間'; 
  tr7.insertAdjacentElement('beforeend',th7); 
  let td7 = document.createElement('td');
  td7.textContent = n.open;
  tr7.insertAdjacentElement('beforeend',td7);

  let tr8 = document.createElement('tr');
  tbody1.insertAdjacentElement('beforeend',tr8);
  let th8 = document.createElement('th');
  th8.setAttribute('scope','col');
  th8.textContent = '最寄駅'; 
  tr8.insertAdjacentElement('beforeend',th8); 
  let td8 = document.createElement('td');
  td8.textContent = n.station_name;
  tr8.insertAdjacentElement('beforeend',td8);

}
}

let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);

let k = 0;
// 通信を開始する処理
function sendRequest() {
  if(k > 0){
    kesu();
  }
  k = 1;
    // URL を設定
    let janru = document.querySelector('select[name="janru"]');
    let s = janru.value;
    console.log('ジャンル：' + s);

    let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' + s + '.json'

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    console.log(data);
    print(data);

    // data.x を出力
    console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('以上');
}

//消す作業
function kesu(){
  let kdiv = document.querySelector('div#result');

  let ch3one = kdiv.querySelectorAll('h3');
  for(let m of ch3one){
    m.remove();
  }

  let ctable1 = kdiv.querySelectorAll('table');
  for(let m of ctable1){
    m.remove();
  }

  let ctbody1 = kdiv.querySelectorAll('tbody');
  for(let m of ctbody1){
    m.remove();
  }
}