<template>
  <div>
    <!--  1.搜索-->
    <div class="search">
      <input type="text" class="inp" placeholder="搜索歌曲、歌手、专辑" autofocus="autofocus" v-model="inpVal">
    </div>
    <!--  2.热门搜索-->
    <div class="hot-search" v-if="isShow">
      <div class="title">热门搜索</div>
      <div class="wrapper">
        <div class="item" v-for="(item,index) in hots" :key="index">{{ item.first }}</div>
      </div>
    </div>
    <!--    3.搜索的数据列表展示-->
    <div class="search-list" v-else>
      <div class="name">搜索 "{{ inpVal }}"</div>
      <div class="info" v-for="item in list" :key="item.keyword">{{ item.keyword }}</div>
    </div>
    <div>{{ info }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hots: [],
      isShow: true,//控制是否显示热门搜索内容
      inpVal: '',//输入搜索的内容
      list: [],
      info: ''
    }
  },

  created() {
    this.hotSearch()
  },
  methods: {
    //获取热搜信息
    async hotSearch() {
      let res = await this.$api.getHotSearch()
      this.hots = res.data.result.hots
    },
    //搜索数据
    async getSearch(val) {
      let res = await this.$api.search({
        keywords: val,
        type: "mobile"
      })
      if (res.data.result.allMatch) {
        this.list = res.data.result.allMatch
        this.info = ''
      } else {
        this.list = []
        this.info = '查无数据'
      }

    }
  },
  //侦听器
  watch: {
    inpVal(val) {
      //隐藏热门搜索词语
      if (val) {
        this.isShow = false
        //搜索数据查询
        this.getSearch(val)
      } else {
        this.isShow = true
      }
      //查询功能
    }
  },
}
</script>

<style scoped lang="less">
.search {
  margin: .3rem;
  border-bottom: 1px solid #eee;

  .inp {
    border: 0;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    background: #eee;
    height: .6rem;
    line-height: .6rem;
    border-radius: .2rem;
    padding-left: .2rem;
  }
}

.hot-search {
  padding: 15px 10px 0;

  .title {
    font-size: 12px;
    line-height: 12px;
    color: #666;
  }

  .wrapper {
    margin: 10px 0 7px;

    .item {
      display: inline-block;
      height: 32px;
      margin-right: 8px;
      margin-bottom: 8px;
      padding: 0 14px;
      font-size: 14px;
      line-height: 32px;
      color: #333;
      border: 1px solid #d3d4da;
      border-radius: 32px;
    }
  }
}

.search-list {
  .name {
    color: red;
    padding-left: .2rem;
    line-height: .9rem;
    border-bottom: 1px solid #eee;
  }

  .info {
    line-height: .9rem;
    height: .9rem;
    padding-left: .2rem;
    border-bottom: 1px solid #eee;
  }
}
</style>
