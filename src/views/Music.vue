<template>
  <div>
    <!--  编辑推荐-->
    <div class="wrap">
      <div class="title">编辑推荐</div>
      <div class="content">
        <van-row gutter="4">
          <van-col span="8" v-for="item in list" :key="item.id">
            <div class="item">
              <router-link :to="'/playlist/'+item.id">
                <img :src="item.coverImgUrl" alt="">
                <div class="total">{{ num(item.playCount) }}</div>
                <div class="info">{{ item.description }}</div>
              </router-link>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
    <!--  最新音乐-->
    <div class="main">
      <div class="title">最新音乐</div>
      <div class="list">
        <div v-for="item in newsong" :key="item.id">
          <router-link :to="{name:'songpage',params:{id:item.id,name:item.name}}" class="item">
            <div class="left">
              <div class="subtitle">{{ item.name }} <span>xxx</span></div>
              <div class="author">
                <span v-for="ele in item.song.artists" :key="ele.id" class="ele">{{ ele.name }}</span> -
                {{ item.song.album.name }}
              </div>
            </div>
            <div class="right">
              <img src="@/assets/images/play.png" alt=""/>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [], // 推荐音乐数据
      newsong: [] // 最新音乐数据
    }
  },
  //进入页面获取网络请求---生命周期函数
  created() {
    this.getMusic()
    this.getNewSong()
  },
  methods: {
    //获取推荐音乐数据
    async getMusic() {
      let res = await this.$api.getMusic()
      if (res.data.code == 200) {
        this.list = res.data.list.slice(0, 6)
      } else {
        alert('推荐音乐接口错误无数据')
      }
      // console.log('推荐音乐', res.data.list)

    },

    //获取最新音乐
    async getNewSong() {
      let res = await this.$api.getNewSong()
      if (res.data.code == 200) {
        this.newsong = res.data.result
      } else {
        alert('最新音乐接口错误无数据')
      }
      // console.log('最新音乐', res.data.result)
    },
    //处理播放量的数据格式
    num(val) {
      val = val > 9999 ? (val / 10000).toFixed(1) + '万' : val
      return val
    }
  }
}
</script>

<style scoped lang="less">
.title {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  font-size: 0.34rem;
  position: relative;
  padding-left: 0.2rem;

  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 20px;
    top: 2px;
    background: #ff5555;
    left: 0;
  }
}

a {
  color: #2a2828;
}

.content {
  .item {
    position: relative;

    img {
      width: 100%;
    }

    .total {
      color: #fff;
      position: absolute;
      right: 2px;
      top: 2px;
    }

    .info {
      margin: 0.14rem;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; /* 这里是超出几行省略 */
    }
  }

  .van-col {
    height: 3.56rem;
  }
}

//最新音乐的样式
.main {
  .item {
    border-bottom: 1px solid #eee;
    padding-left: 10px;
    padding-top: 6px;
    padding-bottom: 6px;
    display: flex;

    .left {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: normal;
    }

    .right {
      width: .9rem;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: .6rem;
        height: .6rem;

      }
    }

    .subtitle {
      font-size: 17px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: normal;
      color: #333;

      span {
        color: #888;
      }
    }

    .author {
      margin-top: 4px;
      font-size: 12px;
      color: #888;


      .ele {
        &::after {
          content: "/";
        }

        &:last-child {
          &::after {
            content: "";
          }
        }
      }
    }
  }
}
</style>
