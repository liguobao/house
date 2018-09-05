<template>
  <div class="header">
    <router-link to="/" class="title">房子是租来的,而生活不是。</router-link>
    <nav>
      <ul>
        <li>
          <router-link class="nav-item" to="/">网站首页</router-link>
        </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link nav-item">
              热门城市<i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item in cities" :key="item">
                <a :href="`https://www.woyaozufang.live/Home/HouseList?cityname=${item}`" target="_blank" class="link-to">{{item}}</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link nav-item">
              个人中心<i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item ><a href="javascript:" class="link-to">QQ登录</a></el-dropdown-item>
              <el-dropdown-item ><a href="javascript:" class="link-to">邮箱登录</a></el-dropdown-item>
              <el-dropdown-item ><a href="javascript:" class="link-to">注册账号</a></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <el-dropdown>
            <span class="el-dropdown-link nav-item">
              使用说明<i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-for="item in instructions" :key="item.url">
                <a :href="item.url" target="_blank" class="link-to">{{item.name}}</a>
              </el-dropdown-item>
              <el-dropdown-item ><a href="javascript:" class="link-to">联系我？</a></el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  nav {
    margin-right: 60px;
    > ul {
      display: flex;
      >li:not(:last-of-type){
        margin-right: 5px;
      }
      .nav-item{
        color: #fff;
        font-size: 16px;
        padding: 6px 16px;
        cursor: pointer;
        transition: all 0.3s;
        .el-icon-caret-bottom{
          transition: all 0.3s;
        }
        &:hover{
          background: #ba1f2e;
          border-radius: 2px;
        }
        &:hover .el-icon-caret-bottom{
          transform: rotate(180deg);
        }
      }
    }
  }
  .link-to{
    color: #333;
    display: block;
    &:hover{
      color: #409EFF;
    }
  }
  .title {
    color: #0e90d2;
    font-size: 21px;
    font-weight: 600;
    letter-spacing: 7px;
    transition: all 0.5s;
    &:hover{
      color: #095f8a;
    }
  }
  a {
    text-decoration: none;
  }
</style>
<script>
  export default {
    data() {
      return {
        cities: ['上海','北京','广州','深圳','杭州','南京','武汉','成都','厦门','苏州'],
        instructions:[
          {
            name: '使用教程',
            url: 'https://github.com/liguobao/58HouseSearch/blob/master/%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B.md'
          },
          {
            name: '一些技巧',
            url: 'https://github.com/liguobao/58HouseSearch/blob/master/%E4%B8%80%E4%BA%9B%E6%8A%80%E5%B7%A7.md'
          },
          {
            name: '更新日志',
            url: 'https://github.com/liguobao/58HouseSearch/blob/master/%E6%97%A5%E5%B8%B8%E6%9B%B4%E6%96%B0.md'
          }
        ]
      }
    }
  }
</script>