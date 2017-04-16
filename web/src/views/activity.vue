<template>
  <div class="ui vertical segment">
    <p class="product-benefit">“和瑾﹒家族财富”2016二季度投资策略分享会</p>
    <p class="product-benefit-details">
      <span>阅读次数：687</span>
      <a v-link="'/service/share'">阅读全文 >></a>
    </p>
  </div>
  <div class="ui vertical segment">
    <p class="product-benefit">“和瑾﹒家族财富”2016春季投资策略报告会</p>
    <p class="product-benefit-details">
      <span>阅读次数：524</span>
      <a v-link="'/service/talk'">阅读全文 >></a>
    </p>
  </div>
  <div class="ui vertical segment">
    <p class="product-benefit">“家族办公室”超高端客户移民税务规划香港行</p>
    <p class="product-benefit-details">
      <span>阅读次数：630</span>
      <a v-link="'/service/plan'">阅读全文 >></a>
    </p>
  </div>
</template>
<script>
  import menuComponent from './../components/menu.vue'
  export default {
    replace: false,
    data () {
      return {
        subpage: '123'
      }
    },
    components: {menuComponent},
    methods: {}
  }
</script>
<style>
  .product-benefit {
    padding: 15px;
    font-size: 19px;
    font-weight: 600;
  }

  .product-benefit-details {
    padding: 15px;
  }

  .product-benefit-details > a {
    padding-left: 15px;
    color: #ca4341;
  }
</style>
