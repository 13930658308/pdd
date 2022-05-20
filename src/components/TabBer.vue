<template>
    <div class="tabBer">
        <van-tabbar v-model="active" active-color="#ee0a24" route>
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="video-o" to="/video">直播</van-tabbar-item>
            <van-tabbar-item icon="bars" to="/type">分类</van-tabbar-item>
            <van-tabbar-item icon="chat-o" to="/talk">聊天</van-tabbar-item>
            <van-tabbar-item icon="smile-o" to="/mine">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name:"tabBer",
    data(){
        return {
            active:0
        }
    }
}
</script>

<style lang="less" scoped>

</style>