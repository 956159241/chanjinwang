<template>
  <div class="ui container navigation">
    <div class="ui two column stackable grid">
      <menu-Component></menu-Component>
      <router-view class="eleven wide column test" transition="fade" transition-mode="out-in"></router-view>
    </div>
  </div>
</template>
<script>
  import menuComponent from './../components/menu.vue'
  export default {
    replace: false,
    data () {
      return {}
    },
    components: {menuComponent},
    methods: {}
  }
</script>
<style>
</style>
