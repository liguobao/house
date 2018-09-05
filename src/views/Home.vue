<template>
  <div class="home">
    <Header class="header"></Header>
    <div class="banner">
      
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .home{
    min-height: 120vh;
    position: relative;
  }
  .header{
    position: absolute;
    top: 45px;
    left: 0;
    padding: 0 22px;
    width: 100%;
  }
  .banner{
    background: url("./../images/banner1.jpg") no-repeat;
    background-position: center;
    background-size: cover;
    height: 680px;
  }
</style>
<script>
import Header from './../components/header'
export default {
  name: 'home',
  components: {
      Header
  }
}
</script>
