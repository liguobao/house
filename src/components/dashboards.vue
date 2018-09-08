<template>
  <div class="dashboards">
    <ul v-if="cities">
      <li v-for="item in cities">
        <a target="_blank" :href="`https://www.woyaozufang.live/Home/HouseList?cityname=${item.cityName}`"
           :title="item.cityName" class="title highlight">{{item.cityName}}</a>
        <div class="source-wrap">
          <a target="_blank"
             :href="`https://www.woyaozufang.live/Home/HouseList?cityname=${item.cityName}&source=${source.source}&intervalDay=14&houseCount=600`"
             class="highlight" v-for="source in item.sources" :title="source.displaySource">
            {{source.displaySource}}
            <template v-if="source.houseSum < 9999">
              ({{source.houseSum}})
            </template>
            <template v-else>
              (9999+)
            </template>
          </a>
        </div>
      </li>
    </ul>
    <div v-else class="is-empty text-center">暂无数据</div>
  </div>
</template>
<style lang="scss" scoped>
  .dashboards {
    max-height: 720px;
    overflow: auto;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 150px;
    text-align: center;
    margin-bottom: 20px;
  }

  .highlight {
    color: #409EFF;
    transition: all 0.3s;
    &:hover {
      color: #095f8a;
    }
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    display: block;
    margin-bottom: 10px;
  }

  .source-wrap {
    a {
      display: block;
      line-height: 1.8;
    }
  }
</style>
<script>
  export default {
    props: {
      type: {
        default: 'all'
      }
    },
    data() {
      return {
        cities: undefined
      }
    },
    methods: {
      async getData() {
        if(this.type === 'all') {
          const res = await this.$ajax.get('/houses/dashboard');
          const data = res.data;
          this.cities = data;
        }else {
          const userId = this.$store.state.userInfo.id;
          const res = await this.$ajax.get(`/users/${userId}/collections/dashboard`);
          const data = res.data;
          this.cities = data;
        }

      }
    },
    created() {
      this.getData()
    }
  }
</script>