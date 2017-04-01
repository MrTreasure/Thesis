<template>
  <div class="news">
    <div class="head">
      <span class="title">{{news.name}}</span><a class="more" @click="more">更多</a>
    </div>
    <div class="content">
      <div class="new-item" v-for="item in news.newList" :title="`来源：${item.from}`">
        <span class="title" :class="{vip: item.vip}">{{item.title}}</span>
        <span class="time">{{item.date}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'news',
    props: {
      news: {
        type: Object,
        default: {
          name: '学院新闻',
          url: 'news',
          newList: [
            {
              title: '罗波书记到我院进行调研工作',
              from: '教师组 洪雪维',
              date: '2017-03-31',
              vip: true,
              url: ''
            },
            {
              title: '四川民族学院计算机科学系到我院学习考察',
              from: '教师组 洪雪维',
              date: '2017-03-31',
              vip: false,
              url: ''
            },
            {
              title: '我院信息处理与工程教学中心获批省级立项建设',
              from: '教师组 洪雪维',
              date: '2017-03-31',
              vip: true,
              url: ''
            },
            {
              title: '图书馆到我院调研',
              from: '教师组 洪雪维',
              date: '2017-03-31',
              vip: true,
              url: ''
            },
            {
              title: '信息科学与工程学院岗位选聘考核答辩顺利结束',
              from: '教师组 洪雪维',
              date: '2017-03-31',
              vip: true,
              url: ''
            }
          ]
        }
      }
    },
    methods: {
      more () {
        this.$router.push(this.news.url);
      }
    }
  }
</script>

<style lang="scss" scoped>
 .news{
   margin-top: 1rem;
   background: rgba(255,255,255,0.9);
   width: 47%;
   min-height: 200px;
   padding: 0.5rem;
   border-radius: 5px;
   &:nth-child(2n-1){
     margin-right: 1rem;
   }
   .head{
     .title{
       padding-left: 1rem;
       font-size: 1.5rem;
       color: #23527C;
       border-left: 4px solid #23527C;
       line-height: 2rem;
       text-align: center;
     }
     .more{
       display: inline-block;
       margin-left: 0.5rem;
       color: #47A3DA;
       cursor: pointer;
       &:hover{
         color: black;
       }
     }
   }
   .content{
     margin-top: 1rem;
     cursor: pointer;
     .new-item{
       display: flex;
       justify-content: space-between;
       line-height: 2rem;
       padding-left: 0.5rem;
       & .vip{
         color: red;
       }
       &:hover{
         border-left: 4px solid #23527C;
       }
     }
   }
 }
</style>
