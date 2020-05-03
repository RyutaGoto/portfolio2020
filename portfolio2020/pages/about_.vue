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
      img(src="/img/profile.jpg").profile
      div.name
        p 後藤隆太 | RyutaGoto
      div.category
        p designer
        p 1997
      div.introduction
        p 1997年宮城県生まれ。幼少期をアメリカで過ごす。帰国後、小中学校を経て地元の仙台高等専門学校に入学。在学中に抱いたデザイン領域に対する興味から卒業後は公立はこだて未来大学に編入。現在は同大学の4年生として在籍。
      div.subtitle.affiliation
        h2 所属
        p 公立はこだて未来大学　情報デザインコース4年生
        p PCN函館　代表
      div.subtitle.ability
        h2 私ができること
        p Adobe Illustrator
        p Adobe Photoshop
        p Adobe Xd
        p HTML/CSS
        p Vue.js
        p Arduino
      div.subtitle.idea
        h2 思想みたいなもの
        p 私はものごとに対して「なぜ」「どうして」を何よりも重要視します。「なぜこれはこの形でなくてはならないのか」「これはどうしてこの配置なのか」ものごとには必ず理由があり、形や色や機能はそれに従っているにすぎない。常に本質を見極める努力を行い、ものづくりをする上での自分の指針としています。
      div.subtitle.hobby
        h2 好きなモノ
        p 苔盆栽、食に関すること全般、アイドルマスター、電子工作、フォント、インク
      div.contact
        a(href="mailto:b1016230@fun.ac.jp" target="_blank" rel="noopener")
          img(src="/img/contact_mail.png").mail
        a(href="https://www.facebook.com/gThunderbird" target="_blank" rel="noopener")
          img(src="/img/contact_fb.png").fb
        a(href="https://suzuri.jp/RickGoto" target="_blank" rel="noopener")
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

  .profile
    width: 256px;
    height: 256px;
    object-fit: cover;
    margin-bottom: 24px;

  .name
    font-size: 28px;
    font-weight: 500;
    color: #317033;
  
  .category
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #747474;
    margin: 16px 0;
    p
      margin: -2px;

  .introduction
    margin: 0 10% 24px 10%;

  .subtitle
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2
      padding: 0 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      font-size: 22px;
      color: #317033;
      font-weight: 400;
      align-text: center;
      margin-bottom: 16px;
      background-color: #fff;
      &:before
        z-index: -10;
        position: absolute;
        //top: 50%;
        display: block;
        content: "";
        width: 300px;
        height: 2px;
        background-color: #707070;
    p
      color: #5A5A5A;
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

  .profile
    width: 320px;
    height: 320px;
    object-fit: cover;
    margin-bottom: 24px;

  .name
    font-size: 32px;
    font-weight: 500;
    color: #317033;
  
  .category
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #747474;
    margin: 16px 0;
    p
      margin: -2px;
      font-size: 18px;

  .introduction
    margin: 40px 10% 40px 10%;
    max-width: 700px;
    p
      font-size: 20px;

  .subtitle
    margin: 64px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2
      padding: 0 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      font-size: 24px;
      color: #317033;
      font-weight: 400;
      align-text: center;
      margin-bottom: 16px;
      background-color: #fff;
      &:before
        z-index: -10;
        position: absolute;
        //top: 50%;
        display: block;
        content: "";
        width: 300px;
        height: 2px;
        background-color: #707070;
    p
      max-width: 700px;
      color: #5A5A5A;
      font-size: 20px;
    
  .idea, .hobby
    p
      margin: 0 10%;

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
