<template>
  <div>
    <div class="mark"> 播放界面--id---- {{ id }}</div>
    <!-- 信息头像 -->
    <div class="info">
      <img :src="imgUrl" alt="">
      <div class="name">{{ name }}</div>
    </div>

    <!-- 歌曲列表 -->
    <div class="content">
      <div class="desc">歌曲列表</div>
    </div>
    <!-- 2. 热歌列表 -->
    <MusicList :list="list">
      <template #code="obj">
        <div class="code">{{ obj.index + 1 }}</div>
      </template>
    </MusicList>
    <!--  <div class='list' v-for="(item, index) in list" :key="item.id">-->
    <!--        <div class="code">{{ index+1 }}</div>-->
    <!--        <div class="list-item">-->
    <!--            <div class="left">-->
    <!--                <div class="subtitle">{{ item.name }} <span>{{ item.alia[0] }}</span> </div>-->
    <!--                <div class="author">-->
    <!--                    <span v-for="ele in item.ar" :key="ele.id" class="ele">-->
    <!--                        {{ ele.name }}-->
    <!--                    </span>-->
    <!--                    - {{ item.al.name }}-->
    <!--                </div>-->
    <!--            </div>-->
    <!--            <div class="right">-->
    <!--                <img src="@/assets/images/play.png" alt="" />-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
  </div>
</template>

<script>
import MusicList from '@/components/MusicList.vue'

export default {
  components: {
    MusicList
  },
  props: ['id'],
  data() {
    return {
      name: '',//名称
      imgUrl: '',//图片
      list: [],//歌曲列表
    }
  },
  created() {
    this.musicplaylist();
  },
  methods: {
    async musicplaylist() {
      let res = await this.$api.musicplaylist()
      console.log(res.data)
      this.name = res.data.playlist.name;
      this.imgUrl = res.data.playlist.coverImgUrl;
      this.list = res.data.playlist.tracks;
    },
  },
}
</script>

<style scoped lang="less">
.info {
  padding: .3rem;
  background: #eee;
  display: flex;

  img {
    width: 2.5rem;
  }

  .name {
    flex: 1;
    padding-left: .2rem;
  }
}

.content {
  .desc {
    color: #888;
    font-size: 12px;
    padding: .1rem;
    background: #ddd;
  }
}

//.list {
//  display: flex;
//
//  .code {
//    width: 1rem;
//    display: flex;
//    align-items: center;
//    text-align: center;
//    justify-content: center;
//    font-size: 16px;
//    color: #888;
//  }
//
//  .code-red {
//    color: #df3436;
//  }
//}
//
//.list-item {
//  border-bottom: 1px solid #eee;
//  // padding-left: 10px;
//  padding-top: 6px;
//  padding-bottom: 6px;
//  display: flex;
//  // flex: 1;
//  width: 6.5rem;
//
//  .left {
//    flex: 1;
//    overflow: hidden;
//    text-overflow: ellipsis;
//    white-space: nowrap;
//    word-break: normal;
//  }
//
//  .right {
//    width: .9rem;
//    display: flex;
//    align-items: center;
//    justify-content: center;
//
//    img {
//      width: .6rem;
//      height: .6rem;
//
//    }
//  }
//
//  .subtitle {
//    font-size: 17px;
//    color: #333;
//    overflow: hidden;
//    text-overflow: ellipsis;
//    white-space: nowrap;
//    word-break: normal;
//
//    span {
//      // font-size: 12px;
//      color: #888;
//    }
//  }
//
//  .author {
//    margin-top: 4px;
//    font-size: 12px;
//    color: #888;
//
//    .ele {
//      &::after {
//        content: "/";
//      }
//    }
//
//    .ele:last-child {
//      &::after {
//        content: "";
//      }
//    }
//  }
//}
</style>
