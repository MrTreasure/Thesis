<template>
  <div class="news">
    <div class="head">
      <span class="title">{{news.name}}</span><a class="more" @click="more">更多</a>
    </div>
    <div class="content">
      <div class="new-item" v-for="item in newList" :title="`来源：${item.from}`" @click="go(item)">
        <span class="title" :class="{vip: item.vip}">{{item.title}}</span>
        <span class="time">{{item.date | formdate}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { ajax } from 'common';
  export default {
    name: 'news',
    props: {
      news: {
        type: Object,
        default: {
          name: '学院新闻',
          path: 'newsAll',
          url: 'http://localhost:8080/data/newsAll'
        }
      }
    },
    data () {
      return {
        newList: []
      }
    },
    created () {
      this.getData();
    },
    methods: {
      more () {
        this.$router.push(this.news.path);
      },
      getData () {
        ajax.get(this.news.url)
        .then(res => {
          this.newList = Object.assign([], res);
        })
      },
      go (item) {
        this.$router.push({name: 'newsDetail', params: {id: item.id}})
      }
    },
    filters: {
      formdate (date) {
        return date.slice(0, 10);
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
