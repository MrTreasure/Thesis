<template>
  <div class="foot">
    <div class="line"></div>
    <div class="main">
      <div class="left">
        <h1 class="title">{{CDU.name}}</h1>
        <p class="address">{{CDU.address}}</p>
        <p class="copyright">{{CDU.copyright}}</p>
      </div>
      <div class="right">
        <h3 class="title">友情链接</h3>
        <div class="content">
          <a :href="item.url" target="_blank" v-for="item in urlList">{{item.name}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'foot',
    data () {
      return {
        CDU: {
          name: '信息科学与工程学院',
          address: '四川省成都市龙泉驿区十陵镇成都大学 邮编：610100',
          copyright: '©成都大学信息科学与工程学院'
        },
        urlList: [
          {
            name: '成都学院(成都大学首页)',
            url: 'http://www.cdu.edu.cn/'
          },
          {
            name: '毕业设计管理系统',
            url: 'http://computer.cdu.edu.cn/lydoa'
          },
          {
            name: '在线学习平台',
            url: 'http://computer.cdu.edu.cn/zxjy/login.do'
          },
          {
            name: '成都学院（成都大学）计算机教学示范中心',
            url: 'http://computer.cdu.edu.cn/computerLab/'
          },
          {
            name: '实习实训管理系统',
            url: 'http://202.115.80.17:2401/loginUnit.jsp'
          },
          {
            name: '管理登录',
            url: 'http://202.115.80.17:2402/'
          },
          {
            name: '成都学院(成都大学)信息处理与控制工程实验教学示范中心',
            url: 'http://202.115.80.17:2402/'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  .foot{
    .line{
      width: 100%;
      height: 2rem;
      background: #333333;
      border-bottom: 1px solid #555555;
    }
    .main{
      background: #333333;
      display: flex;
      .left{
        flex: 2;
        padding: 1rem;
        .title{
        font-size: 2rem;
        color: white;
        }
        p{
          color: ghostwhite;
          line-height: 2rem;
          font-size: 0.8rem
        }
      }
      .right{
        flex:3;
        padding: 1rem;
        .title{
          font-size: 1.2rem;
          color: white;
        }
        .content{
          margin-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          a{
            width: 30%;
            display: inline-block;
            text-decoration: none;
            color:ghostwhite;
            text-align: center;
            line-height: 2rem;
            text-overflow: ellipsis;
            &:hover{
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
</style>
