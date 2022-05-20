// import Mock from "mockjs";
let Mock = require("mockjs")

let arrs = ["王源", "王俊凯", "易烊千玺"]
let types = Mock.mock([{
        "text": "推荐",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "食品",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "女装",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "手机",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "男装",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "鞋包",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "电器",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "健康",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "百货",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "母婴",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "数码",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "内衣",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "生鲜",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "洗护",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "美妆",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "运动",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "家装",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "家纺",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "车品",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "图书",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "充值",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "海淘",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
    {
        "text": "品牌",
        "children|15": [{
            "image": "@image('50x50','@color','#fff','@increment')",
            "text": "@cword(4)"
        }]
    },
])
Mock.mock("/get", "get", arrs)

Mock.mock("/type", "get", types)

Mock.mock("/login","post",function(){
    return {
        message:"验证成功",
        token:"hello123"
    }
})