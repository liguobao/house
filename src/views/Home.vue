<template>
  <div class="home">
    <Header class="header"></Header>
    <div class="banner">
      <h2 class="slogan">满大街找租房心力交瘁？试试换个方式直接在地图上搜租房吧。</h2>
      <p class="sub-slogan">房源爬虫 + 高德地图强力驱动,帮助你迅速找到合适房源</p>
      <el-button type="danger" class="start">马上开始！</el-button>
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
    left: 50%;
    padding: 0 22px;
    width: 1200px;
    transform: translateX(-50%);
  }
  .banner{
    background: url("./../images/banner1.jpg") no-repeat;
    background-position: center;
    background-size: cover;
    height: 680px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    font-weight: 400;
    .slogan{
      font-size: 40px;
      font-weight: inherit;
    }
    .sub-slogan{
      font-weight: inherit;
      font-size: 30px;
    }
    .start{
      margin-top: 20px;
      background: #d22e3e;
      border-color: #d22e3e;
      transition: all 0.3s;
      &:hover{
        background: #ba1f2e;
        border-color: #ba1f2e;
      }
    }
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
