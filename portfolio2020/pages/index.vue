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
    div#app
      p.background-filter
        img(src="/img/moss_01.jpg").background.slideshow
        img(src="/img/moss_02.jpg").background.slideshow.fadeout
        img(src="/img/moss_03.jpg").background.slideshow.fadeout
        img(src="/img/moss_04.jpg").background.slideshow.fadeout

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
  },

  data(){
    return{
      index: 0
    }
  },

  mounted(){
    const images = document.getElementsByClassName('slideshow');
    this.slideshow(images);
    setInterval(() => {
      this.index = this.index < images.length - 1 ? this.index + 1 : 0;
      this.slideshow(images);
    }, 3000);
  },

  methods: {
    slideshow(images){
      const current = images[this.index];
      const prev = images[this.index - 1] ? images[this.index - 1] : images[images.length - 1];
      current.classList.add('fadein');
      current.classList.remove('fadeout');
      prev.classList.remove('fadein');
      prev.classList.add('fadeout');
    }
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
    //.background
      //opacity: 0.8;
      width: 100%;
      height: 100%;
      object-fit: none;

  .fadein
    opacity: 1;
    transition: opacity 1.0s;
    width: 100%;
    height: 100%;
    object-fit: cover;


  .fadeout
    opacity: 0;
    transition: opacity 1.0s;
    width: 100%;
    height: 100%;
    object-fit: cover;


  .slideshow
    position: absolute;
    left: 0;
    

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

@media screen and (min-width: 701px) //複数列
  .container
    display: flex;
    justify-content: center;
    position: relative;
    width: 100vw;
    height: 100vh;
    .background-filter
      background-color: #222;
  
  .fadein
    opacity: 1;
    transition: opacity 1.0s;
    width: 100%;
    height: 100%;
    object-fit: cover;


  .fadeout
    opacity: 0;
    transition: opacity 1.0s;
    width: 100%;
    height: 100%;
    object-fit: cover;


  .slideshow
    position: absolute;
    left: 0;

  .symbol
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 25%;
    width: 80%;
    height: auto;
    .logo
      margin-bottom: 32px;
      width: 250px;
      height: auto;
      object-fit: cover;
    .title
      text-align: center;
      font-weight: 500;
      font-size: 32px;
      color: #fff;
      text-shadow: 0 3px 4px #222;
  
  .link
    position: absolute;
    top: 80%;
    //left: 0%;
    a
      padding: 0 16px;
      color: #fff;
      font-weight: 400;
      font-size: 40px;
      text-shadow: 0 3px 4px #222;
      padding-bottom: 0.1px;
      text-decoration: none;
      border-bottom: 3px solid #fff;
      box-shadow: 0 6px 6px -3px #999;
      -webkit-transition: all .3s;
      transition: all .3s;
      &:hover
        color: #fff;
        text-shadow: 0 4px 4px #317033;
        box-shadow: 0 7px 6px -3px #317033;
        border-bottom: 3px solid #fff;

</style>
