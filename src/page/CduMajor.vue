<template>
  <div class="cdu-major">
    <location :navs="navs"></location>
    <div class="content">
      <div class="major" v-for="item in majorList">
        <div class="major-header">
          <span class="title">{{item.name}}</span><span class="time">{{item.time}}</span>
        </div>
        <div class="main" v-html="item.content">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import location from 'components/location';
  import { ajax } from 'common';
  export default {
    name: 'cdu-major',
    data () {
      return {
        navs: [
          {
            name: '学院概况',
            click: false
          },
          {
            name: '专业设置',
            click: false
          }
        ],
        url: 'http://localhost:8080/data/info?name=profession',
        majorList: []
      }
    },
    components: {
      location
    },
    created () {
      this.getData();
      document.title = '专业设置';
    },
    methods: {
      getData () {
        ajax.get(this.url)
        .then(res => {
          this.majorList = res;
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cdu-major{
    width: 80%;
    margin: 0 auto;
    background: #F4F4F4;
    // opacity: 0.8;
    .content{
      .major{
        padding: 3rem;
        background: #EEEEEE;
        margin-bottom: 3rem;
        border-radius: 10px;
        &:last-child{
          margin-bottom: 0;
        }
        .major-header{
          padding: 2rem;
          .title{
            font-size: 1.5rem;
          }
          .time{
            margin-left: 1rem;
            color: #777;
          }
        }
        .main{
          font-size: 1.2rem;
          letter-spacing: 2px;
          line-height: 1.4rem;
        }
      }
    }
  }
</style>
