<template>
  <div class="title">
    <h2>我是cpn组件的标题</h2>  
    <p>我是cpn组件的内容，哈哈哈</p>  
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'cpn组件的name'
    }
  }
}
</script>

<style>
.title{
  color: darkslategray
}
</style>