<template>
  <div class="news-detail">
    <location :navs="navs"></location>
    <div class="news-header">
      <h2 class="title">{{news.title}}</h2>
      <div class="tags">
        <span class="tag author">发布人:{{news.author}}</span>
        <span class="tag date">发布时间:{{news.date}}</span>
        <span class="tag click">点击次数:{{news.click}}</span>
        <span class="tag from">来源:{{news.from}}</span>
      </div>
    </div>
    <div class="news-content" v-html="news.content">
    </div>
  </div>
</template>

<script>
  import location from 'components/location';
  import { ajax } from 'common';
  export default {
    name: 'news-detail',
    data () {
      return {
        navs: [
          {
            name: '学院新闻',
            path: 'newsAll',
            click: true
          }
        ],
        url: 'http://localhost:8080/data/news',
        news: {}
      }
    },
    computed: {
      params () {
        let obj = {};
        obj.id = this.$route.params.id;
        return obj;
      }
    },
    components: {
      location
    },
    created () {
      this.getData();
    },
    methods: {
      getData () {
        console.log(this.params);
        ajax.get(`${this.url}/?id=${this.params.id}`)
        .then(res => {
          console.log(res);
          this.news = Object.assign({}, res);
        });
      }
    }
  }
</script>

<style lang="scss">
  .news-detail{
    width: 80%;
    margin: 0 auto;
    background: #F5F5F5;
    .news-header{
      padding: 0.5rem;
      border-bottom: 2px solid #DDDDDD;
      .title{
        font-size: 1.5rem;
        padding: 0.5rem;
      }
      .tags{
        .tag{
          display: inline-block;
          margin-right: 1.5rem;
          color: #777;
          padding: 0.5rem;
        }
      }
    }
    .news-content{
      padding: 1.5rem;
      line-height: 1rem;
      text-indent: 2rem;
      letter-spacing: 4px;
      white-space: pre-line;
    }
  }
</style>
