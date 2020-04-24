<template lang="pug">
div.wrapper
  div.num {{ number }}
  div.js-accordion
    button(type="button" :class="{'_state-open': isOpened}" @click="accordionToggle()").js-accordion--trigger {{ title }}
    transition(name="js-accordion" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave")
      div(:class="{'_state-open': isOpened}" v-if="isOpened").js-accordion--target
        div.js-accordion--body
          img(:src="imgSrc")
          p {{ detail }}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    imgSrc: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    }
  },

  data(){
    return{
      isOpened: false
    };
  },

  methods:{
    accordionToggle: function(){
      this.isOpened = !this.isOpened;
    },
    beforeEnter: function(el) {
    el.style.height = '0';
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    leave: function(el) {
      el.style.height = '0';
    }
  }
  
}
</script>

<style lang="sass" scoped>
@media screen and (max-width: 700px) //単列
  .wrapper
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    //height: auto;

  .num
    margin: 22px 16px 0 0;
    flex-basis: 10%;
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #eee;
    font-weight: 700;
    //&:before
      z-index: -2;
      position: absolute;
      display: block;
      height: 60px;
      width: 4px;
      background: red;
      margin-right: 6px;
    //&:before
      z-index: -10;
      position: absolute;
      top: 0;
      content: "";
      display: block;
      width: 4px;
      height: 400px;
      background: red;
    &:after
      z-index: -1;
      position: absolute;
      content: "";
      display: block;
      width: 36px;
      height: 36px;
      border-radius: 18px;
      background: gray;
    
  .js-accordion
    margin-bottom: 8px;
    flex-basis: 90%;
    background-color: #eee;
    border-color: #666;
    border-style: solid;
    border-width: 1px 1px 0 1px;
    //border-radius: 5px;

    button
      font-size: 16px;

    &:last-child
      border-bottom-width: 1px;

    &--trigger
      //border-radius: 4px;
      background-color: #2d642f;
      position: relative;
      display: block;
      width: 100%;
      transition: all 0.2s ease-in;
      color: #eee;
      display: block;
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      padding: 16px;
      outline: none;
      border: none;
      cursor: pointer;
      &:after
        display: inline-block;
        width: 0;
        height: 0;
        border: solid transparent;
        content: "";
        border-top-color: #eee;
        border-width: 7px;
        position: absolute;
        top: 50%;
        right: 1em;
        margin-top: -5px;
        transition: all 0.2s ease-in;
      
      &._state-open
        //border-radius: 4px 4px 0 0;
        background-color: #2d642f;
        text-decoration: none;
        &:after
          transform: rotateX(180deg);
          margin-top: -10px;
      
      &:hover
        background-color: #2d642f;
        text-decoration: none;
      
    
    &--target
      overflow: hidden;
      transition: 0.4s ease-in-out;
      //display: flex;
      //position: relative;
      //&:before
          z-index: -10;
          position: absolute;
          top: 0;
          left: 0%;
          content: "";
          display: block;
          width: 4px;
          height: 60px;
          background: red;
    
    &--body
      position: relative;
      p
        color: #5a5a5a;
        font-size: 14px;      
        padding: 0 16px 24px 16px;
      img
        width: 100%;
        height: auto;
        padding: 16px 16px 0 16px;
      //&:after
        z-index: -10;
        position: absolute;
        top: 0;
        left: -10%;
        content: "";
        display: block;
        width: 4px;
        height: 60px;
        background: red;

    &-enter-active
      animation-duration: 0.5s;
      animation-fill-mode: both;
      animation-name: js-accordion--anime__opend;
    
    &-leave-active
      animation-duration: 0.5s;
      animation-fill-mode: both;
      animation-name: js-accordion--anime__closed;
    
  

  @keyframes js-accordion--anime__opend 
    0% 
      opacity: 0;    
    100% 
      opacity: 1;
    
  
  @keyframes js-accordion--anime__closed 
    0% 
    opacity: 1;

    100% 
      opacity: 0;

@media screen and (min-width: 701px) //複数列
  .wrapper
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    //height: auto;

  .num
    margin: 22px 16px 0 0;
    flex-basis: 10%;
    position: relative;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #eee;
    font-weight: 700;
    //&:before
      z-index: -2;
      position: absolute;
      display: block;
      height: 60px;
      width: 4px;
      background: red;
      margin-right: 6px;
    //&:before
      z-index: -10;
      position: absolute;
      top: 0;
      content: "";
      display: block;
      width: 4px;
      height: 400px;
      background: red;
    &:after
      z-index: -1;
      position: absolute;
      content: "";
      display: block;
      width: 36px;
      height: 36px;
      border-radius: 18px;
      background: gray;
    
  .js-accordion
    margin-bottom: 8px;
    flex-basis: 90%;
    background-color: #eee;
    border-color: #666;
    border-style: solid;
    border-width: 1px 1px 0 1px;
    //border-radius: 5px;

    button
      font-size: 20px;

    &:last-child
      border-bottom-width: 1px;

    &--trigger
      //border-radius: 4px;
      background-color: #2d642f;
      position: relative;
      display: block;
      width: 100%;
      transition: all 0.2s ease-in;
      color: #eee;
      display: block;
      font-size: 20px;
      font-weight: bold;
      text-align: left;
      padding: 16px;
      outline: none;
      border: none;
      cursor: pointer;
      &:after
        display: inline-block;
        width: 0;
        height: 0;
        border: solid transparent;
        content: "";
        border-top-color: #eee;
        border-width: 7px;
        position: absolute;
        top: 50%;
        right: 1em;
        margin-top: -5px;
        transition: all 0.2s ease-in;
      
      &._state-open
        //border-radius: 4px 4px 0 0;
        background-color: #2d642f;
        text-decoration: none;
        &:after
          transform: rotateX(180deg);
          margin-top: -10px;
      
      &:hover
        background-color: #2d642f;
        text-decoration: none;
      
    
    &--target
      overflow: hidden;
      transition: 0.4s ease-in-out;
      //display: flex;
      //position: relative;
      //&:before
          z-index: -10;
          position: absolute;
          top: 0;
          left: 0%;
          content: "";
          display: block;
          width: 4px;
          height: 60px;
          background: red;
    
    &--body
      position: relative;
      p
        color: #5a5a5a;
        font-size: 18px;      
        padding: 0 16px 24px 16px;
      img
        width: 100%;
        height: auto;
        padding: 16px 16px 0 16px;
      //&:after
        z-index: -10;
        position: absolute;
        top: 0;
        left: -10%;
        content: "";
        display: block;
        width: 4px;
        height: 60px;
        background: red;

    &-enter-active
      animation-duration: 0.5s;
      animation-fill-mode: both;
      animation-name: js-accordion--anime__opend;
    
    &-leave-active
      animation-duration: 0.5s;
      animation-fill-mode: both;
      animation-name: js-accordion--anime__closed;
    
  

  @keyframes js-accordion--anime__opend 
    0% 
      opacity: 0;    
    100% 
      opacity: 1;
    
  
  @keyframes js-accordion--anime__closed 
    0% 
    opacity: 1;

    100% 
      opacity: 0;

</style>