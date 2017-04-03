<template>
  <div class="begin">
    <div class="swiper-wrapper">
      <my-swiper></my-swiper>
    </div>
    <div class="content-wrapper">
      <news :news="newsList[0]"></news>
      <news :news="newsList[0]"></news>
      <news :news="newsList[0]"></news>
      <news :news="newsList[0]"></news>
      <news :news="newsList[0]"></news>
      <news :news="newsList[0]"></news>
      <news :news="newsList[0]"></news>
      <news :news="newsList[0]"></news>
    </div>
  </div>
</template>

<script>
  import mySwiper from 'components/mySwiper';
  import news from 'components/news';
  import { ajax } from 'common';
  export default {
    name: 'begin',
    data () {
      return {
        urlList: [
          {
            name: '学院新闻',
            url: 'http://localhost:8080/data/newsAll',
            items: []
          }
        ]
      }
    },
    computed: {
      newsList () {
        let arr = [];
        // 数据结构存在问题
        if (this.urlList[0].items.length !== 0) {
          for (let item of this.urlList) {
            let obj = {};
            obj.name = item.name;
            obj.url = 'news';
            obj.newList = [];
            for (let item2 of this.urlList.items) {
              let obj2 = {};
              obj2.title = item2.title;
              obj2.from = `${item2.from} ${item2.author}`;
              obj2.date = item2.date.splice(0, 5);
              obj2.vip = item2.vip;
              obj2.url = item2.id;
              obj.newList.push(obj2);
            }
            arr.push(obj);
          }
          return arr;
        } else {
          arr = [{
            name: '学院新闻',
            url: 'news',
            newList: [
              {
                title: '罗波书记到我院进行调研工作',
                from: '教师组 洪雪维',
                date: '2017-03-31',
                vip: true,
                url: Number
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
          }];
          return arr;
        }
      }
    },
    components: {
      mySwiper,
      news
    },
    created () {
      this.getData();
    },
    methods: {
      getData () {
        ajax.get(this.urlList[0].url)
        .then(res => {
          this.urlList[0].items = Object.assign([], res);
        });
      }
    }
  }
</script>

<style lang="scss">
.begin{
  width: 80%;
  margin: 0 auto;
  .content-wrapper{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
