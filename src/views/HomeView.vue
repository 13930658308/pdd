<template>
  <div class="home">
    <TabBer></TabBer>
    <Search :mess="mess"> </Search>
    <van-tabs title-active-color="#e02e24">
      <van-tab v-for="item in tab" :title="item" ref="scroll">
          <!-- 动态组件切换 -->
          <div :is="currentView">

          </div>
        <!-- 内容 {{ item }}
        <div class="horizontal-container">
          <div class="scroll-wrapper">
            <div class="scroll-content">
              <div
                class="scroll-item"
                v-for="(item, index) in emojis"
                :key="index"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div> -->
      </van-tab>
    </van-tabs>

    <!-- <div class="horizontal-container">
          <div class="scroll-wrapper" ref="scroll">
            <div class="scroll-content">
              <div
                class="scroll-item"
                v-for="(item, index) in emojis"
                :key="index"
              >
                {{ item }}
              </div>
            </div>
          </div>
        </div> -->

  </div>
</template>

<script>
import instance from "@/api/api";
import TabBer from "../components/TabBer.vue";
import Search from "../components/Search.vue";
import BScroll from "@better-scroll/core";

// 导入子组件
import HomeTuijian from '../components/Home/HomeTuijian.vue'
import HomeType from '../components/Home/HomeType.vue'
export default {
  name: "HomeView",
  data() {
    return {
      mess: "首页通信",
      tab: [
        "推荐",
        "女装",
        "鞋包",
        "手机",
        "食品",
        "母婴",
        "男装",
        "百货",
        "内衣",
        "电器",
        "家纺",
        "水果",
        "家具",
        "美妆",
        "家装",
        "运动",
        "车品",
        "医药",
        "电脑",
        "海淘",
        "饰品",
        "玩乐",
      ],
      emojis: [
        "👉🏼 😁 😂 🤣 👈🏼",
        "😄 😅 😆 😉 😊",
        "😫 😴 😌 😛 😜",
        "👆🏻 😒 😓 😔 👇🏻",
        "😑 😶 🙄 😏 😣",
        "😞 😟 😤 😢 😭",
        "🤑 😲 ☹️ 🙁 😖",
        "👍 👎 👊 ✊ 🤛",
        "☝️ ✋ 🤚 🖐 🖖",
        "👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼",
        "☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽",
        "🌖 🌗 🌘 🌑 🌒",
      ],
      currentView:'basecardSet'//动态组件
    };
  },
  components: {
    TabBer,
    Search,
    HomeTuijian,
    HomeType
  },

  mounted() {
    this.init();
    let qq=document.querySelector(".scroll-wrapper")
    console.log(qq)
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    // getfn() {
    //   instance.get("/get").then((res) => {
    //     console.log(res);
    //   });
    // },
    init() {
      console.log(this.$refs)
      this.bs = new BScroll(this.$refs.scroll, {
        scrollX: true,
        probeType: 3, // listening scroll event
      });
      // this.bs.on("scrollStart", () => {
      //   console.log("scrollStart-");
      // });
      // this.bs.on("scroll", ({ y }) => {
      //   console.log("scrolling-");
      // });
      // this.bs.on("scrollEnd", () => {
      //   console.log("scrollingEnd");
      // });
    },
  },
};
</script>

<style lang="less" scoped>
// .wrapper {
//   width: 375px;
//   background: red;
//   overflow: hidden;
// }
.horizontal-container .scroll-wrapper {
  position: relative;
  width: 90%;
  margin: 80px auto;
  white-space: nowrap;
  border: 3px solid #42b983;
  border-radius: 5px;
  overflow: hidden;
}
.scroll-content {
  display: inline-block;
}
.scroll-item {
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  display: inline-block;
  text-align: center;
  padding: 0 10px;
}
</style>

