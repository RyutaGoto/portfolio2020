<template lang="pug">
  div
    //div.nav
      div#nav-drawer
        input(type="checkbox")#nav-input.nav-unshown
        label(for="nav-input")#nav-open
          span
        label(for="nav-input")#nav-close.nav-unshown
        div#nav-content
          nuxt-link(to="/")#nav-item top
          nuxt-link(to="/works")#nav-item works
          nuxt-link(to="/member")#nav-item member
    div.body
      nuxt
      

</template>

<style lang="sass">
html
  font-family: 'Noto Sans Japanese', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;


*, *:before, *:after 
  box-sizing: border-box;
  margin: 0;


.button--green
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;


.button--green:hover
  color: #fff;
  background-color: #3b8070;


.button--grey
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;


.button--grey:hover
  color: #fff;
  background-color: #35495e;













.nav
  position: fixed;
  z-index: 100;
  top: 5%;
  right: 10%;

#nav-drawer
  position: relative;


/*チェックボックス等は非表示に*/
.nav-unshown
  display: none;


/*アイコンのスペース*/
#nav-open
  display: inline-block;
  width: 30px;
  height: 22px;
  vertical-align: middle;


/*ハンバーガーアイコンをCSSだけで表現*/
#nav-open
  span, span:before, span:after
    position: absolute;
    height: 4px;/*線の太さ*/
    width: 35px;/*長さ*/
    border-radius: 3px;
    background: #ddd;
    display: block;
    content: '';
    cursor: pointer;

#nav-open
  span:before
    bottom: -11px;

#nav-open
  span:after
    bottom: -22px;


/*閉じる用の薄黒カバー*/
#nav-close
  display: none;/*はじめは隠しておく*/
  position: fixed;
  z-index: 99;
  top: 0;/*全体に広がるように*/
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0;
  transition: .3s ease-in-out;


/*中身*/
#nav-content
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 100%;
  z-index: 9999;/*最前面に*/
  width: 70%;/*右側に隙間を作る*/
  max-width: 330px;/*最大幅*/
  height: 100%;
  background: #fff;/*背景色*/
  opacity: 0.9;
  transition: .3s ease-in-out;/*滑らかに表示*/
  //-webkit-transform: translateX(-105%);
  //transform: translateX(-105%);/*左に隠しておく*/


/*チェックが入ったらもろもろ表示*/
#nav-input:checked ~ #nav-close
  display: block;/*カバーを表示*/
  opacity: .5;


#nav-input:checked ~ #nav-content
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);/*中身を表示*/
  box-shadow: 6px 0 25px rgba(0,0,0,.15);


#nav-item
  text-align: right;
  margin: 16px 20% 16px 0;
  font-size: 40px;
  font-weight: 900;
  color: #333;
  text-decoration: none;
  
@media screen and (min-width: 701px) //複数列
  #nav-open
    span, span:before, span:after
      position: absolute;
      height: 5px;/*線の太さ*/
      width: 48px;/*長さ*/
      border-radius: 3px;
      background: #ddd;
      display: block;
      content: '';
      cursor: pointer;
      box-shadow: 0 6px 6px 0 #000;

#nav-open
  span:before
    bottom: -15px;

#nav-open
  span:after
    bottom: -30px;


</style>
