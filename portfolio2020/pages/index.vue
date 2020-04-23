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
    p.background-filter
      img(src="/img/moss_03.jpg").background
    div.symbol
      img(src="~/assets/logo_clear(500×500).png").logo
      h1.title RyutaGoto's Portfolio
    div.link
      nuxt-link(to="/works") view works
      //h2 view works
</template>

<script>
//import Logo from '~/components/Logo.vue'

export default {
  components: {
    //Logo
  }
}
</script>

<style lang="sass" scoped>
@media screen and (max-width: 700px) //単列
  .container
    display: flex;
    justify-content: center;
    position: relative;
    width: 100vw;
    height: 100vh;
    .background-filter
      background-color: #222;
    .background
      opacity: 0.8;
      width: 100%;
      height: 100%;
      object-fit: cover;
  .symbol
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 30%;
    //left: 0%;
    width: 80%;
    height: auto;
    .logo
      margin-bottom: 16px;
      width: 50%;
      height: auto;
      object-fit: cover;
    .title
      text-align: center;
      font-weight: 400;
      font-size: 28px;
      color: #fff;
      text-shadow: 0 3px 4px #222;
  .link
    position: absolute;
    top: 80%;
    //left: 0%;
    a
      color: #fff;
      font-weight: 400;
      font-size: 24px;
      text-shadow: 0 3px 4px #222;
      padding-bottom: 0.1px;
      text-decoration: none;
      border-bottom: 3px solid #fff;
      box-shadow: 0 6px 6px -2px #999;
</style>
