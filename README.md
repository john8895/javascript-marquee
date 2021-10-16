## Javascript 跑馬燈(由右往左、一或多組)

1. 跑馬燈的原理很簡單，最基本由右往左的跑馬燈，就是透過 CSS 設成絕對定位，設定 `left` 以 `setInterval` 以定量減少，之所以是減少而不是增加，是因為我希望物件向左移動，所以是 left 為負數。
2. 接著是到了特定的情況就用 `clearIntervel` 停止定時器，到了什麼情況要停止定時器呢？我希望是當全部的文字都已顯露但尚未全部跑到最左邊，這時候就停止定時器，為什麼不跑到最左邊呢，因為這樣畫面上會出現一片空白，可能會令使用者覺得怪怪的。
3. 要注意的是，`clearInterval` 要能作用，`setInterval` 必須設定給一個變數(time Id)，接著再用 `clearIntervel` 去停止這個 time Id ，這很重要，不然你的定時器會停不下來。
4. 單組的跑馬燈與同時多組的跑馬燈代碼是一樣的，只差在給予 DOM 元素 left 值的時候，要設定一個或多個元素。
5. 如果要跑完一組文字之後再做其他效果如上移或下移，就只要在這基礎上再加點料就可以了！

Demo 單組：[https://codepen.io/john8895/pen/yLoYwVa](https://codepen.io/john8895/pen/yLoYwVa)

Demo 多組：[https://codepen.io/john8895/pen/RwZWOZr](https://codepen.io/john8895/pen/RwZWOZr)

Github 位置：[https://github.com/john8895/javascript-marquee](https://github.com/john8895/javascript-marquee)