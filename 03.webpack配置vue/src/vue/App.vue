<template>
  <div>
  <h2 class="childer">{{message}}</h2>  
  <button>按钮</button>  
  <h2>{{name}}</h2>  
  <Cpn></Cpn>  
  <div>
    <Input/>
  </div>
  </div>
</template>

<script>
import Cpn from './Cpn.vue'
import Input from './Input.vue'
export default {  
  components: {
    Cpn,  
    Input
  },
  data() {
    return {
      message: 'Hello Webpack',
      name: 'coderwhy'
    }
  }
}
</script>

<style>
.childer {
  color: green;
}
</style>
