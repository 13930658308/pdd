// 防抖
let debounce =(fn,delay)=>{//fn是业务函数
    let timer=null;

    return function(){
        clearTimeout(timer)
        timer =setTimeout(()=>{
            fn()
        },delay)
    }
    
    
}

export default debounce