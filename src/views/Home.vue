<template>
  <div>
    <!--    1. 公共的顶部logo区域-->
    <div class="header">网易云音乐</div>
    <!--    2. 选项卡-->
    <van-tabs v-model="active">
      <van-tab title="推荐音乐" name="1"><Music></Music></van-tab>
      <van-tab title="热歌榜" name="2"><HotMusic></HotMusic></van-tab>
      <van-tab title="搜索" name="3" ><Search></Search></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Music from "@/views/Music.vue";
import HotMusic from "@/views/HotMusic.vue";
import Search from "@/views/Search.vue";

export default {
  name: "Home",
  components: {
    Music, HotMusic, Search
  },
  data() {
    return {
      active: 2,
    };
  },
}
</script>

<style scoped lang="less">
.header {
  background: #d43c33;
  height: 1.68rem;
}

//vant库 里面 tab样式
/deep/ .van-tabs--line .van-tabs__wrap {
  border-bottom: 1px solid #dbdbdb;

  .van-tab {
    font-size: 16px;
  }
}
</style>
