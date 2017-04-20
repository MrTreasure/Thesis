<template>
  <div class="cdu-news">
    <location :navs="navs"></location>
    <div class="content">
      <div class="left">
        <ul class="articals">
          <li class="artical" v-for="(item, index) in newsList" @click="go(item)">
            <div class="title" :class="{red: item.vip}">
              {{item.title}}<span class="new" v-if="item.fresh"></span><span class="top" v-if="item.top"></span>
            </div>
            <div class="date">
              时间：{{item.date | formatDate }}
            </div>
            <div class="des">
              简要内容：{{item.des}}
            </div>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="img" v-for="pic in picList">
          <img :src="pic.url" alt="" height="100%" width="100%">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import location from 'components/location';
  import { ajax } from 'common';
  export default {
    name: 'cdu-news',
    data () {
      return {
        navs: [
          {
            name: '学院新闻',
            path: 'CduNews',
            click: false
          }
        ],
        url: 'http://localhost:8080/data/newsAll',
        newsList: [],
        picList: [
          {
            url: 'http://computer.cdu.edu.cn/portal/upload/tp/1473382931122.jpg'
          },
          {
            url: 'http://computer.cdu.edu.cn/portal/upload/tp/1473382783781.jpg'
          },
          {
            url: 'http://computer.cdu.edu.cn/portal/upload/tp/1448608803431.jpg'
          },
          {
            url: 'http://computer.cdu.edu.cn/portal/upload/tp/1448608929093.jpg'
          },
          {
            url: 'http://computer.cdu.edu.cn/portal/upload/tp/1448608179581.jpg'
          }
        ]
      }
    },
    components: {
      location
    },
    created () {
      document.title = '学院新闻';
      this.getData();
    },
    methods: {
      getData () {
        ajax.get(this.url)
        .then(data => {
          this.newsList = Object.assign([], data);
        });
      },
      go (item) {
        this.$router.push({name: 'newsDetail', params: {id: item.id}});
      }
    },
    filters: {
      formatDate (str) {
        if (str) {
          str = str.slice(0, 10);
          return str;
        } else return '';
      }
    }
  }
</script>

<style lang="scss">
  .cdu-news{
    width: 80%;
    margin: 0 auto;
    background: #F4F4F4;
    .content{
      display: flex;
      .left{
        flex:3;
        margin-right: 1rem;
        .articals{
          .artical{
            padding: 1rem;
            color: black;
            border-bottom: 4px dotted #3B80B7;
            min-height: 6rem;
            .title{
              font-size: 1rem;
              line-height: 1.2rem;
              cursor: pointer;
              &.red{
                color: red;
              }
            }
            .date{
              padding: 5px 0;
            }
            .des{
              padding: 5px 0;
            }
            .new{
              display: inline-block;
              margin-left: 5px;
              height: 11px;
              width: 28px;
              background: url(~assets/img/new.gif);
              background-size: 100% 100%;
            }
            .top{
              display: inline-block;
              margin-left: 5px;
              height: 13px;
              width: 15px;
              background: url(~assets/img/top-2.gif);
              background-size: cover;
            }
          }
        }
      }
      .right{
        flex:1;
        .img{
          margin-top: 1rem;
        }
      }
    }
  }
</style>
