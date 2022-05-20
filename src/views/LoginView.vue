<template>
  <div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true,validator:fn, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
            <!-- native-type提交事件 -->
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import instance from "@/api/api"
import debounce from "@/utils/debounce"
import { Toast } from 'vant';
export default {
  name: "Login",
  data(){
      return {
          username:"",//用户名
          password:"",//密码
          debounceloginfn:null,//新的业务函数
          nextTo:"",//登录成功之后往哪里去
      }
  },
  created(){
      this.debounceloginfn=debounce(this.loginfn,2000)

    //   如果 登录成功之后往哪里去
    console.log(this)
    this.nextTo=this.$router.currentRoute.params.id
  },
  methods:{
     async loginfn(){//单纯的登录验证业务
        //   登录验证业务
        let {data}=await instance.post("/login")
        console.log(data)
        let token =data.token
        // 需要把 token 存到 vuex中
        this.$store.commit("settoken",token)
        // 登录成功之后  跳转那里去
        let nextTo=this.nextTo
        console.log(nextTo)
        Toast({
            type:"success",
            message:"登录成功",
            onClose:()=>{
                this.$router.push({name:nextTo})
            }
        })
      },
      onSubmit(a){
        //   登录验证 用户行为事件
        console.log(a)
        this.debounceloginfn()
        
      },
      fn(value){
        console.log(value) //输入表单的值
      }
  },
  
};
</script>
