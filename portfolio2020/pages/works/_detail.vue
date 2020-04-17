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
        img(:src="data.caravan.abstract.thum").background
      h1 works
    div.contents
      div.abstract
        h2 {{ data.caravan.abstract.title }}
        div.table
          div.row
            p.item category
            p.substance {{ data.caravan.abstract.category }}
          div.row
            p.item period
            p.substance {{ data.caravan.abstract.period }}
          div.row
            p.item tools
            p.substance {{ data.caravan.abstract.tools }}
        h3 {{ data.caravan.abstract.detail }}
      div.process
        h2 process
        div(v-for="(i, index) in data.caravan.process")
          ProcessItem(:title="i.subtitle", :imgSrc="i.img", :detail="i.detail", :number="index+1")
        
        //div.js-accordion
          button(type="button" :class="{'_state-open':isOpened}" @click="accordionToggle()").js-accordion--trigger アコーディオン
          div(:class="{'_state-open':isOpened}" v-if="isOpened").js-accordion--target
            div.js-according--body
              p アコーディオンの中身
              p アコーディオンの中身
              p アコーディオンの中身
        
     

  
</template>

<script>
import Logo from '~/components/Logo.vue'
import worksData from '~/assets/json/works.json'
import ProcessItem from '~/components/ProcessItem.vue'


export default {
  components: {
    Logo,
    ProcessItem
  },

  data(){
    return{
      data: worksData,
      isOpened: false
    };
  },

  methods:{
    accordionToggle: function(){
      this.isOpened = !this.isOpened;
    },
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
      object-fit: cover;
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
    padding: 48px 24px 0 24px;
    position: absolute;
    top: 32vh;
    left: 50%;
    transform : translate(-50%, 0);
    display: flex;
    flex-direction: column;
    //justify-content: center;
    //align-items: center;
    background-color: #fff;
    width: 100%;
    box-shadow: 0 -5px 6px #707070;
    //z-index: 200;

  .abstract
    h2
      font-size: 24px;
      color: #2d642f;
      font-weight: 700;
    h3
      font-size: 16px;
      color: #5a5a5a;
      font-weight: 400;

  .table
    margin: 16px 0 48px 0;

  .row
    display: flex;
    font-size: 14px;
    font-weight: 300;
    color: #848484;
    margin-bottom: 8px;

  .item
    flex-basis: 25%;

  .substance
    flex-basis: 75%;
  
  .process
    margin-top: 80px;
    h2
      text-align: center;
      margin-bottom: 24px;
      color: #2d642f;

  
  
    
  

  
    


//@media screen and (min-width: 701px); //複数列


</style>
