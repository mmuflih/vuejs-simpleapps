/*
* @Author: Muhammad Muflikh Kholidin
* @Date:   2016-09-15 07:56:42
* @Last Modified by:   Muflih Kholidin
* @Last Modified time: 2016-09-17 08:46:06
*/
<template>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      routes: []
    }
  },
  ready() {
    this.load()
  },
  methods: {
    load() {
    }
  },  
}
</script>
<style>
  html: {
    background-color: #000;
  }
</style>