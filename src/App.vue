<template>
  <div>
    <h1>Resume</h1>
    <h2>{{ text }}</h2>
  </div>
</template>

<script>
  import Vue from 'vue';
  const component = Vue.extend({
    data: function() {
      return {
        text: 'Hello world'
      }
    }
  });

  export default component;
</script>

<style lang="less">
  
</style>