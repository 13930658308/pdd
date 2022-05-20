<template>
    <div>
        <h3>我的页面</h3>
        <button @click="fn">验证token</button>
        <TabBer> </TabBer>
    </div>
</template>

<script>
import TabBer from "../components/TabBer.vue"
export default {
    name:"Mine",
    components:{
        TabBer
    },
    methods:{
        fn(){
            console.log(this.$store)
        }
    }
}
</script>

<style lang="less" scoped>
    
</style>