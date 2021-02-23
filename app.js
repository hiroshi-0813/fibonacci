'use strict';
const memo = new Map();   //memoマップの箱を作る
memo.set(0, 0);           //0番目をあらかじめ保存
memo.set(1, 1);           //1番目をあらかじめ保存
function fib(n) {
  if (memo.has(n)) {      //もしもnを持っていたら
    return memo.get(n);   //memoに保管されているnを取得して返す
  }
  const value = fib(n - 1) + fib(n - 2); //nでない場合、再帰関数を計算
  memo.set(n, value);                    //再帰関数を保管
  return value;                          //valueを返す
  }
const length = 40;                       //40番目まで繰り返す
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}
