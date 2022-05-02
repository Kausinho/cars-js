<template>
  <HeaderCarros />
  <FooterCarros />
  <router-view/>
</template>

<script>
import HeaderCarros from './components/HeaderCarros.vue';
import FooterCarros from './components/FooterCarros.vue';

export default {
  components:{
    HeaderCarros,
    FooterCarros
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Poppins:wght@300;400;700&display=swap');
  *{
    font-family: 'Open Sans';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container{
    margin: 0 auto;
    padding: 0 2%;
    max-width: 1280px;
  }
</style>
