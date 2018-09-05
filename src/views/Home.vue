<template>
  <div class="home">
    <Header class="header"></Header>
    <div class="banner">
      <h2 class="slogan">满大街找租房心力交瘁？试试换个方式直接在地图上搜租房吧。</h2>
      <p class="sub-slogan">房源爬虫 + 高德地图强力驱动,帮助你迅速找到合适房源</p>
      <el-button type="danger" class="start">马上开始！</el-button>
    </div>
    <div class="introduction">
      <div>
        <h3 class="sub-title">这是什么？</h3>
        <p class="text">
          通过实时爬虫获取公开租房信息，直接在高德地图上直观展示房源位置+基础信息，同时提供住址到公司的路线计算（公交+地图 or 步行导航），已实现【豆瓣租房小组】、【Zuber合租平台】、【蘑菇租房】、【CCB建融家园】、【58同城品牌公寓】、【58同城诚信租房】、【上海互助租房】数据展示，部分房源价格支持筛选功能。
        </p>
        <div class="cities">
          <div class="city-item" v-for="item in cities" :key="item.name">
            <a target="_blank" :href="mapUrl + `?cityname=${item.cityname}`" class="highlight-name">{{item.name}}</a>
            <div class="form" v-if="item.form && item.form.length">
              <a target="_blank" :href="mapUrl + `?cityname=${item.cityname}&source=${where.source}`" class="highlight-name" v-for="(where,index) in item.form" :key="where.name">
                {{where.name}}
                <template v-if="index < item.form.length - 1">、</template>
              </a>
            </div>
          </div>
          <div class="city-item">
            <a target="_blank" href="javascript:;" class="highlight-name">更多城市</a>
            <div class="form">
              <a target="_blank" :href="mapUrl + `?cityname=成都`" class="highlight-name">
                成都、
              </a>
              <a target="_blank" :href="mapUrl + `?cityname=杭州`" class="highlight-name">
                杭州、
              </a>
              <a target="_blank" :href="mapUrl + `?cityname=厦门`" class="highlight-name">
                厦门...
              </a>
            </div>
          </div>
          <div class="city-item search">
            <a target="_blank" href="javascript:;" class="highlight-name">高级搜索</a>
            <p>支持关键字 + 信息来源 + 发布日期组合搜索</p>
          </div>
        </div>
        <div class="new-douban">
          <a href="" class="highlight-name">新增豆瓣租房小组</a>
          <p>你在的城市没有数据？没有对应的租房小组数据？试试手动添加爬虫任务吧！（如：厦门租房小组 https://www.douban.com/group/XMhouse/）</p>
        </div>
      </div>
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
  .introduction{
    padding: 40px 20px;
    background: #1a1f2a;
    color: #fff;
    >div{
     max-width: 1200px;
     margin: auto;
    }
    .sub-title{
      margin-top: 40px;
      font-size: 20px;
      font-weight: 600;
    }
    .text{
      margin-bottom: 20px;
      color: #737b8a;
      font-size: 14px;
    }
    .cities{
      display: flex;
      margin-bottom: 32px;
      .city-item{
        flex: auto;
        &.search{
          width: 184px;
        }
        p{
          font-size: 14px;
          color: #737b8a;
        }
      }
      .form{
        .highlight-name{
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
    .new-douban{
      p{
        font-size: 14px;
        color: #737b8a;
      }
      margin-bottom: 20px;
    }
  }
  .highlight-name{
    color: #0e90d2;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.3s;
    &:hover{
      color: #095f8a;
    }
  }
</style>
<script>
import Header from './../components/header'
export default {
  name: 'home',
  components: {
      Header
  },
  data() {
    return {
      cities: [
        {
          name: '上海地区',
          url: '',
          cityname: '上海',
          form: [
            {
              name: '互助租房',
              url: '',
              source:'huzhuzufang'
            },
            {
              name: '豆瓣',
              url: '',
              source:'douban'
            },
            {
              name: 'Zuber',
              url: '',
              source:'zuber'
            },
          ]
        },
        {
          name: '北京地区',
          url: '',
          cityname: '北京',
          form: [
            {
              name: '豆瓣',
              url: '',
              source:'douban'
            },
            {
              name: 'Zuber',
              url: '',
              source:'zuber'
            },
            {
              name: '蘑菇',
              url: '',
              source:'mogu'
            },
          ]
        },
        {
          name: '广州地区',
          url: '',
          cityname: '广州',
          form: [
            {
              name: '豆瓣',
              url: '',
              source:'douban'
            },
            {
              name: 'Zuber',
              url: '',
              source:'zuber'
            },
            {
              name: '蘑菇',
              url: '',
              source:'mogu'
            },
          ]
        },
        {
          name: '深圳地区',
          url: '',
          cityname: '深圳',
          form: [
            {
              name: '豆瓣',
              url: 'douban'
            },
            {
              name: 'Zuber',
              url: 'zuber'
            },
          ]
        }
      ],
      mapUrl: `https://www.woyaozufang.live/Home/HouseList`
    }
  }
}
</script>
