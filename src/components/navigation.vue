<template>
  <ul class="navigation">
    <li class="nav" v-for="(nav, index) in navList" @click="firstRoute(index)">
        <span class="name">{{nav.name}}</span>
      <ul class="child-nav">
        <li class="child-nav-item" v-for="item in nav.items" @clcik="secondRoute(item)">
          <a :href="item.url">{{item.title}}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      navList: [
        {
          name: '首页',
          url: '##',
          items: [
          ]
        },
        {
          name: '学院概况',
          url: 'home',
          items: [
            {
              title: '学院简介',
              url: 'Introduction'
            },
            {
              title: '机构设置',
              url: 'CduSet'
            },
            {
              title: '专业设置',
              url: 'CduMajor'
            }
          ]
        },
        {
          name: '师资队伍',
          items: [
            {
              title: '人才需求',
              url: '##'
            },
            {
              title: '教授介绍',
              url: 'CduTeachers'
            },
            {
              title: '特聘人才',
              url: '##'
            }
          ]
        },
        {
          name: '教学工作',
          items: [
            {
              title: '教务信息',
              url: '##'
            },
            {
              title: '教学文件',
              url: '##'
            },
            {
              title: '质量工程',
              url: '##'
            },
            {
              title: '人才培养',
              url: '##'
            }
          ]
        },
        {
          name: '科学研究',
          items: [
            {
              title: '科研动态',
              url: '##'
            },
            {
              title: '科研平台',
              url: '##'
            },
            {
              title: '科研团队',
              url: '##'
            }
          ]
        },
        {
          name: '对外交流',
          items: [
            {
              title: '合作办学',
              url: '##'
            },
            {
              title: '地方服务',
              url: '##'
            }
          ]
        },
        {
          name: '学生工作',
          items: [
            {
              title: '思政教育',
              url: '##'
            },
            {
              title: '评优评奖',
              url: '##'
            },
            {
              title: '学生资助',
              url: '##'
            },
            {
              title: '学生就业',
              url: '##'
            },
            {
              title: '团学活动',
              url: '##'
            },
            {
              title: '管理文件',
              url: '##'
            }
          ]
        },
        {
          name: '创新就业',
          items: [
            {
              title: '创业工作室',
              url: '##'
            },
            {
              title: '创业动态',
              url: '##'
            },
            {
              title: '学科竞赛',
              url: '##'
            }
          ]
        },
        {
          name: '学科建设',
          items: [
            {
              title: '研究生工作',
              url: '##'
            },
            {
              title: '学科动态',
              url: '##'
            }
          ]
        },
        {
          name: '实验室建设',
          items: [
            {
              title: '实验室建设',
              url: '##'
            },
            {
              title: '实习实训',
              url: '##'
            }
          ]
        },
        {
          name: '党群工作',
          items: [
            {
              title: '党组织结构',
              url: '##'
            },
            {
              title: '工会工作',
              url: '##'
            }
          ]
        },
        {
          name: '校友工作',
          items: [
            {
              title: '校友风采',
              url: '##'
            },
            {
              title: '毕业生风采',
              url: '##'
            }
          ]
        }
      ]
    }
  },
  methods: {
    firstRoute (index) {
      if (index === 0) {
        this.$router.push({name: 'begin'});
      }
    },
    secondRoute (item) {
      this.$router.push({name: item.url});
    }
  }
}
</script>

<style lang="scss">
// @import '~assets/scss/colors.scss';
.navigation{
  display: flex;
  background: #47A3DA;
  box-shadow: 1px 1px 1px 0 #eaeaea;
  .nav{
    display: inline-block;
    flex:1;
    height: 3rem;
    text-align: center;
    cursor: pointer;
    .name{
      margin-top: 0.25rem;
      display: inline-block;
      font-size: 1rem;
      line-height: 2.5rem;
      color: white;
      text-align: center;
      border-right: 1px solid #eaeaea;
      width: 100%;
      transition: all .2s;
    }
    &:hover{
      background: #00BFFF;

    }
    &:hover .name{
      // color: #47A3DA;
      color: white;
      border: none;
    }
    &:hover .child-nav{
      display: block;
    }
    .child-nav{
      display: none;
      .child-nav-item{
        // width: 100%;
        height: 2rem;
        text-align: center;
        background: #00BFFF;
        &:hover{
          background: white;
        }
        a{
          padding: 0.25rem;
          text-decoration: none;
          color: white;
          width: 100%;
          font-size: 0.8rem;
          line-height: 2rem;
          border-top: 1px solid #eaeaea;
          box-sizing: border-box;
          &:hover{
            // background: #47A3DA;
            color: #00BFFF;
            border-radius: 2px;
          }
          // &:hover a + a {
          //   border: none;
          // }
        }
        &:first-child a{
          border: none;
        }
      }
    }
  }
}
</style>
