<template>
  <div class="admin">
    <div class="admin-head" ref="head">
      <div class="banner">
        <img src="~assets/img/cdu.png" alt="成都大学" class="logo">
        <h1 class="title">信息科学与工程学院</h1>
      </div>
    </div>
    <div class="edit-title">日志抄送界面</div>
    <div class="infolist">
      <input type="text" placeholder="作者" v-model="author">
      <input type="text" placeholder="描述" v-model="des">
      <Button type="primary" @click="send">提交</Button>
      <Button type="primary" @click="exit">退出登录</Button>
      <Checkbox v-model="top"><span>置顶</span></Checkbox>
    </div>
    <div class="editor">
      <quill-editor ref="myTextEditor"
                  v-model="content"
                  :config="editorOption">
      </quill-editor>
    </div>
  </div>
</template>

<script>
  import { quillEditor } from 'vue-quill-editor';
  import { ajax } from 'common';
  export default {
    name: 'admin',
    data () {
      return {
        content: '',
        editorOption: {
          placeholder: '发表一篇文章吧...'
        },
        url: 'http://localhost:8080/data/send',
        author: '',
        des: '',
        backInfo: '发送成功',
        show: false,
        color: 'green',
        top: false
      }
    },
    components: {
      quillEditor
    },
    methods: {
      send () {
        let data = {
          des: this.des,
          author: this.author,
          content: this.content,
          top: this.top,
          date: new Date()
        };
        console.log(data);
        ajax.post(this.url, data)
        .then(res => {
          if (res === 'right') {
            this.$Notice.success({
              title: '发送成功'
            })
          } else {
            this.$Notice.error({
              title: '发送失败'
            })
          }
        });
      },
      exit () {
        sessionStorage.setItem('logged', false);
        this.$router.push({name: 'login'});
      }
    }
  }
</script>

<style lang="scss">
  .admin{
    width: 80%;
    margin: 2rem auto 0;
    background: #F4F4F4;
    .admin-head{
      background: #237FFF;
      border-radius: 5px 5px 0 0;
      padding: 2rem;
      .banner{
        margin: 0 auto;
        width: 80%;
        height: 20%;
        padding: 1rem;
        display: flex;
        .title{
          color: white;
          font-size: 3rem;
          flex: 1;
          line-height: 4rem;
          padding-left: 2rem;
        }
        .logo{
          flex:0 0 270px;
          width: 270px;
        }
      }
    }
    .edit-title{
      padding: 2rem;
      font-size: 2rem;
      position: relative;
    }
    .infolist{
      padding: 1rem;
      input[type="text"]{
        padding: 0 10px 0;
        outline: none;
        border: none;
        height: 2rem;
        width: 8rem;
        border-radius: 3px;
        margin-right: 1rem;
        &:focus{
          box-shadow: 0 0 2px #237FFF;
        }
      }
      .send{
        position: relative;
        top: 1px;
        right: 0;
        padding: 0 10px 0;
        outline: none;
        border: none;
        height: 2rem;
        width: 8rem;
        border-radius: 3px;
        background: #237FFF;
        color: white;
        &:hover{
          background: white;
          color: #237FFF;
          box-shadow: 0 0 2px #237FFF;
        }
      }
    }
    .editor{
      padding: 1rem;
      min-height: 20rem;
    }
  }
</style>
