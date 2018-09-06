<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  body{
    font-weight: 400;
    line-height: 1.6;
    font-family: "Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei",FreeSans,Arimo,"Droid Sans","wenquanyi micro hei","Hiragino Sans GB","Hiragino Sans GB W3",FontAwesome,sans-serif;
  }
  @font-face {
    font-family: 'iconfont';  /* project id 826486 */
    src: url('//at.alicdn.com/t/font_826486_ns6jc4zbuh.eot');
    src: url('//at.alicdn.com/t/font_826486_ns6jc4zbuh.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_826486_ns6jc4zbuh.woff') format('woff'),
    url('//at.alicdn.com/t/font_826486_ns6jc4zbuh.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_826486_ns6jc4zbuh.svg#iconfont') format('svg');
  }
</style>
