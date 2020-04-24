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
        img(src="/img/moss_01.jpg").background
      h1 works
    div.contents
      div.content-list-wrap
        div(v-for="i in data").contents-list
          nuxt-link(:to="i.abstract.link")
            img(:src="i.abstract.thum")
          p.title {{ i.abstract.title }}
          p.category {{ i.abstract.category }}
      div.footer
        p ©2020 RyutaGoto
      
      
  //div.container
    div
      logo
      h1.title portfolioWeb制作 yeah
      h2.subtitle My divine Nuxt.js project
      div.links
        a(href="https://nuxtjs.org/" target="_blank").button--green Documentation
        a(href="https://github.com/nuxt/nuxt.js" target="_blank").button--grey GitHub
</template>

<script>
import Logo from '~/components/Logo.vue'
import worksData from '~/assets/json/works.json'

export default {
  components: {
    Logo
  },

  data(){
    return{
      data: worksData
    }
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

  .contents-list
    position: relative
    margin-bottom: 64px;
    img
      width: 248px;
      height: 248px;
      object-fit: cover;
    .title
      font-size: 18px;
      font-weight: 700;
      color: #555;
    .category
      font-size: 14px;
      font-weight: 500;
      color: #777;
      position: absolute;
      top: 15%;
      right: -16%;
      transform: rotate(90deg);
  
  .footer
    height: 64px;
    width: 100%;
    background-color: #a5926f;
    //background-color: #e6dbc7;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;


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
      top: 50%;
      left: 50%;
      font-weight: 500;
      font-size: 32px;
      color: #fff;
      text-shadow: 0 3px 4px #222;
  
  .contents
    position: absolute;
    top: 50vh;
    left: 50%;
    transform : translate(-50%, 0);
    background-color: #fff;
    width: 100%;
    box-shadow: 0 -5px 6px #707070;

  .content-list-wrap
    padding: 96px 10% 72px 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

  .contents-list
    position: relative
    margin: 0 24px 64px 24px;
    img
      width: 248px;
      height: 248px;
      object-fit: cover;
    .title
      font-size: 18px;
      font-weight: 700;
      color: #555;
    .category
      font-size: 14px;
      font-weight: 500;
      color: #777;
      position: absolute;
      top: 15%;
      right: -16%;
      transform: rotate(90deg);
  
  .footer
    height: 64px;
    width: 100%;
    background-color: #a5926f;
    //background-color: #e6dbc7;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;

</style>
