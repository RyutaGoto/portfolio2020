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
        img(src="~/assets/asahi.jpg").background
      h1 works
    div.contents
      div.contents-list
        img(src="~/assets/dummy.jpg")
        p.title DesignCaravan Webサイト
        p.category Web制作
      div.contents-list
        img(src="~/assets/dummy.jpg")
        p.title 田淵
        p.category Web制作
      div.contents-list
        img(src="~/assets/dummy.jpg")
        p.title 田淵
        p.category Web制作
      div.contents-list
        img(src="~/assets/dummy.jpg")
        p.title 田淵
        p.category Web制作
      div.contents-list
        img(src="~/assets/dummy.jpg")
        p.title 田淵
        p.category Web制作
      div.contents-list
        img(src="~/assets/dummy.jpg")
        p.title 田淵
        p.category Web制作
      div.contents-list
        img(src="~/assets/dummy.jpg")
        p.title 田淵
        p.category Web制作
      div.contents-list
        img(src="~/assets/dummy.jpg")
        p.title 田淵
        p.category Web制作
      div.contents-list
        img(src="~/assets/dummy.jpg")
        p.title 田淵
        p.category Web制作
      div.contents-list
        img(src="~/assets/dummy.jpg")
        p.title 田淵
        p.category Web制作
      

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

export default {
  components: {
    Logo
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
    .background
      opacity: 0.8;
      width: 100%;
      height: 100%;
      object-fit: none;
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


//@media screen and (min-width: 701px); //複数列


</style>
