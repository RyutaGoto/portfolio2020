<template lang="pug">
div
  div.nav
    div#nav-drawer
        input(type="checkbox")#nav-input.nav-unshown
        label(for="nav-input")#nav-open
          span
        label(for="nav-input")#nav-close.nav-unshown
        div#nav-content
          nuxt-link(to="/")#nav-item top
          nuxt-link(to="/works")#nav-item works
          nuxt-link(to="/about")#nav-item about
  div.container
    div.thumnail
      p.background-filter
        img(src="/img/moss_02.jpg").background
      h1 about
    div.contents
      div.profile-wrap
        img(src="/img/profile.jpg").profile
        div.name
          p 後藤隆太 | RyutaGoto
        div.category
          p 公立はこだて未来大学　学部4年生
          p 1997年生まれ
      div.introduction
        p 1997年宮城県生まれ。幼少期をアメリカで過ごす。帰国後、小中学校を経て地元の仙台高等専門学校に入学。在学中に抱いたデザイン領域に対する興味から卒業後は公立はこだて未来大学に編入。現在は同大学の4年生として在籍。
      div.biography
        div.top
          div.subtitle
            h2 思想みたいなもの
            p 私はものごとに対して「なぜ」「どうして」を何よりも重要視します。「なぜこれはこの形でなくてはならないのか」「これはどうしてこの配置なのか」ものごとには必ず理由があり、形や色や機能はそれに従っているにすぎない。常に本質を見極める努力を行い、ものづくりをする上での自分の指針としています。
        div.bottom
          div.subtitle
            h2 デザイナーを目指した理由
            p きっかけとなったのは2016年の夏、高専に在学していた頃初めて参加したインターンシップでの体験でした。それまで私は技術分野の事を学び続けていましたが、このインターンシップでのチーム開発においてUIを担当しました。初めは色や配置のことばかり気にしていましたがテストを繰り返す中で、ユーザの体験のデザインに気づきました。ユーザが次のアクションを違和感なく気持ちよく進めさせるにはどうすべきか、その奥深さに魅了されてデザイン領域へ足を踏み入れました。
          div.subtitle
            h2 5年後どうありたいか
            p 「後藤になら任せられる」「この分野だったら後藤に聞けばどうにかなるな」、って言ってもらえるような人材になっていたい。投げやり的、盲信的ではなく、そう思われるバックグラウンドを積み上げていきたい。  自分の頭の中で起こっている出来事をアウトプットする癖が付いているような人間になりたい。自己表現のための言語化や作品に落とし込んだり、作品制作を通して自分の頭の中の整理を行えるような人間になっていたい。
          div.subtitle
            h2 私ができること
            p ・UIやロゴなどのグラフィックデザイン
            p ・Webのview関連の設計から実装まで
            p ・電子工作を用いた作品制作
            p (ツール：Illustrator、Photoshop、Xd、HTML / CSS、Vue.js、Arduino)
          div.subtitle
            h2 好きなモノ
            p ・苔盆栽
            p ・食に関すること全般
            p ・アイドルマスター
            p ・電子工作
            p ・文字(主にフォント)
            p ・インク
      div.contact
        a(href="mailto:b1016230@fun.ac.jp" target="_blank")
          img(src="/img/contact_mail.png").mail
        a(href="https://www.facebook.com/gThunderbird" target="_blank")
          img(src="/img/contact_fb.png").fb
        a(href="https://suzuri.jp/RickGoto" target="_blank")
          img(src="/img/contact_suzuri.png").suzuri
      Footer
      

</template>

<script>
import Logo from '~/components/Logo.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Logo,
    Footer
  }
}
</script>

<style lang="sass" scoped>

@media screen and (max-width: 700px) //単列
  .container
    width: 100%;
    height: auto;
    position: relative;

  .thumnail
    position: fixed;
    width: 100%;
    height: 35vh;
    .background-filter
      margin-block-start: 0;
      margin-block-end: 0;
      background-color: #222;
      height: 100%;
    .background
      opacity: 0.8;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
      margin-bottom: -2px;
    h1
      position: absolute;
      top: 50%;
      left: 40%;
      font-weight: 500;
      font-size: 32px;
      color: #fff;
      text-shadow: 0 3px 4px #222;

  .contents
    padding-top: 32px;
    position: absolute;
    top: 32vh;
    left: 50%;
    transform : translate(-50%, 0);
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 100%;
    box-shadow: 0 -5px 6px #707070;
    //z-index: 200;

  .profile-wrap
    display: flex;
    flex-direction: column;

  .profile
    width: 256px;
    height: 256px;
    object-fit: cover;
    margin-bottom: 24px;

  .name
    font-size: 23px;
    font-weight: 700;
    color: #317033;
  
  .category
    display: flex;
    flex-direction: column;
    color: #747474;
    margin: 4px 0 16px 0;
    p
      margin: -2px;

  .introduction
    margin: 56px 10% 24px 10%;
    line-height: 1.7em;
    letter-spacing: 0.05em;
  
  .biography
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-bottom: 40px;

  .subtitle
    margin: 40px 0 0 0;
    display: flex;
    flex-direction: column;
    h2
      font-size: 20px;
      color: #317033;
      font-weight: 700;
      //align-text: center;
      margin-bottom: 8px;
      background-color: #fff;
    p
      line-height: 1.8em;
      letter-spacing: 0.05em;
      color: #4a4a4a;
      font-size: 15px;
    
  .idea, .hobby
    p
      margin: 0 10%;

  .contact
    margin: 40px 0;
    width: 80%;
    max-width: 350px;
    display: flex;
    justify-content: space-evenly;
    .mail
      height: 28px;
      width: auto;
      object-fit: cover;
    .fb
      height: 30px;
      width: auto;
      object-fit: cover;      
    .suzuri
      height: 32px;
      width: auto;
      object-fit: cover;
      


@media screen and (min-width: 701px) //複数列
  .container
    width: 100%;
    height: auto;
    position: relative;

  .thumnail
    position: fixed;
    width: 100%;
    height: 50vh;
    .background-filter
      margin-block-start: 0;
      margin-block-end: 0;
      background-color: #222;
      height: 100%;
    .background
      opacity: 0.8;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
      margin-bottom: -2px;
    h1
      position: absolute;
      top: 60%;
      left: 50%;
      font-weight: 500;
      font-size: 32px;
      color: #fff;
      text-shadow: 0 3px 4px #222;

  .contents
    padding-top: 32px;
    position: absolute;
    top: 50vh;
    left: 50%;
    transform : translate(-50%, 0);
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    background-color: #fff;
    width: 100%;
    box-shadow: 0 -5px 6px #707070;
    //z-index: 200;

  .profile-wrap
    display: flex;
    flex-direction: column;

  .profile
    width: 320px;
    height: 320px;
    object-fit: cover;
    margin-bottom: 24px;

  .name
    font-size: 28px;
    font-weight: 700;
    color: #317033;
    margin-left: -2px;
  
  .category
    display: flex;
    flex-direction: column;
    //justify-content: center;
    //text-align: center;
    color: #747474;
    margin: 0;
    p
      margin: -2px;
      font-size: 18px;

  .introduction
    margin: 80px 10% 40px 10%;
    width: 50%;
    min-width: 650px;
    p
      line-height: 1.5em;
      letter-spacing: 0.1em;
      font-size: 18px;

  .biography
    display: flex;
    flex-direction: column;
    width: 50%;
    min-width: 650px;

  .top
    .subtitle
      margin: 64px 0 0 0;
      display: flex;
      flex-direction: column;
      h2
        display: flex;
        align-items: center;
        font-size: 20px;
        color: #317033;
        font-weight: 700;
        margin-bottom: 8px;
        background-color: #fff;
      p
        line-height: 1.7em;
        letter-spacing: 0.1em;
        color: #4a4a4a;
        font-size: 15px;

  .bottom
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 32px 0;
    .subtitle
      width: 47%;
      margin: 24px 0;
      display: flex;
      flex-direction: column;
      h2
        display: flex;
        position: relative;
        font-size: 20px;
        color: #317033;
        font-weight: 700;
        margin-bottom: 8px;
        background-color: #fff;
      p
        line-height: 1.7em;
        letter-spacing: 0.1em;
        color: #4a4a4a;
        font-size: 15px;


  .contact
    margin: 80px 0 40px 0;
    width: 80%;
    max-width: 350px;
    display: flex;
    justify-content: space-evenly;
    .mail
      height: 28px;
      width: auto;
      object-fit: cover;
    .fb
      height: 30px;
      width: auto;
      object-fit: cover;      
    .suzuri
      height: 32px;
      width: auto;
      object-fit: cover;
      


</style>
