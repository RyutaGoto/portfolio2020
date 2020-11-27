<template lang="pug">
div
  div#modal
    div(@click="$emit('close')").modal-mask
      div.modal-wrapper
        div.modal-container
          img(:src="imgSrc" @click="$emit('close')")
</template>

<script>
export default{
  name: 'Modal',
  props: {
    imgSrc: String
  }
}

</script>

<style lang="sass" scoped>
@media screen and (max-width: 700px) //単列
  #modal
    display: none;

@media screen and (min-width: 701px) //複数列
  .modal-mask
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, .5);
      display: table;
      transition: opacity .3s ease;

  .modal-wrapper
    display: table-cell;
    vertical-align: middle;

  .modal-container
    width: 70%;
    margin: 0px auto;
    background-color: rgba(0, 0, 0, .2);
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    animation: modal1 .4s normal;
    img
      width: 100%;
      object-fit: cover;

  @keyframes modal1
    0%
      opacity: 0;
    
    100%
      opacity: 1;

  @keyframes modal2
    0%
      opacity: 1;

    100%
      opacity: 0;
    


</style>