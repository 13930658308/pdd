<template>
  <div>
    <Search :mess="mess"> </Search>

    <!-- 分类页面 -->
    <van-tree-select
      :items="types"
      height="100vh"
      :main-active-index="activeindex"
      :active-id="rightid"
      @click-nav="leftfn"
    >
      <template slot="content">
        <div ref="right" class="item">
          <div v-for="(item, index) in contentright" :key="index">
            <img :src="item.image" alt="" />
            <h3>{{ item.text }}</h3>
          </div>
        </div>
      </template>
    </van-tree-select>
    <TabBer> </TabBer>
  </div>
</template>

<script>
import TabBer from "../components/TabBer.vue";
import Search from "../components/Search.vue";
import instance from "@/api/api";
export default {
  name: "Type",
  data() {
    return {
      mess: "分类通信",
      types: [], //分类请求的数据
      contentright: [], //右侧数据
      activeindex: 0,//当前点击的下标
      rightid: "", //
    };
  },
  components: {
    TabBer,
    Search,
  },
  methods: {
    leftfn(item) {
      //点击左侧导航触发的
      console.log(item); //点击当前元素的索引
      this.activeindex = item;
      // 获取右侧元素
      var xx = document.getElementsByClassName("van-tree-select__content");
      console.log(xx);
      xx[0].scrollTop = 0;
      console.log(xx[0].scrollTop);
      this.contentright = this.types[this.activeindex].children;
    },
    async gettypes() {
      // 分类
      let { data } = await instance.get("/type");
      console.log(data);
      this.types = data;
      this.contentright = this.types[this.activeindex].children;
    },
  },
  created() {
    this.gettypes();
  },
};
</script>

<style lang="less" scoped>
.van-sidebar::-webkit-scrollbar {
  display: none;
}
.van-tree-select__content::-webkit-scrollbar {
  display: none;
}
.item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;

  div {
    margin-top: 10px;
    h3 {
      font-size: 13px;
    }
  }
}
</style>
