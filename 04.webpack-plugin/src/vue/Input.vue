<template>
  <div>
    <input type="text">
    <button class="button-color">按钮</button>
    <h1>{{name}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '唐三',  

    }
  }

}
</script>

<style>
.button {
  background-color: red;
}
</style>