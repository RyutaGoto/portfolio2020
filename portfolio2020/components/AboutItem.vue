<template lang="pug">
div.footer
  div.footer
    div.pc-menu
      nuxt-link(to="/") top
      p /
      nuxt-link(to="/works") works
      p /
      nuxt-link(to="/about") about
    p ©2020 RyutaGoto
</template>

<script>


</script>

<style lang="sass" scoped>
@media screen and (max-width: 700px) //単列
  .footer
    .pc-menu
      display: none;

@media screen and (min-width: 701px) //複数列
  .footer
    height: 152px;
    width: 100%;
    background-color: #a5926f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .pc-menu
      margin: 8px 0 16px 0;
      display: flex
      flex-direction: row;
      align-items: center;
      a
        margin: 0 16px;
        text-decoration: none;
        font-size: 24px;
        font-weight: 500;
        color: #fff;

    p
      font-size: 16px;
      font-weight: 500;
      color: #eee;

</style>