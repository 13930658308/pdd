<template>
    <div class="search">
        <van-search class="s" left-icon="search" v-model="value" shape=true :placeholder="mess" input-align="left"/>
        <!-- 搜索图标 -->
        <!-- <span class="s-icon"><van-icon name="search" size="16px" /></span> -->
    </div>
</template>

<script>
export default {
    name:"Search",
    props:['mess'],

    data(){
        return {
            value:""
        }
    }
}
</script>

<style lang="less" scoped>
    .search {
        // position: relative;
        .s {
            padding-left:10px 20px;
            
        }
        .van-cell--borderless {
            padding-left: 130px;
        }
    }
</style>