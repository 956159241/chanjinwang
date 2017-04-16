<template>
  <div class="ui vertical segment">
    <p class="product-benefit">固定收益产品</p>
    <p class="product-benefit-details">
      <span>阅读次数：604</span>
      <a v-link="'/service/fixedIncome'">阅读全文 >></a>
    </p>
  </div>
  <div class="ui vertical segment">
    <p class="product-benefit">权益投资产品</p>
    <p class="product-benefit-details">
      <span>阅读次数：604</span>
      <a v-link="'/service/equityInvestment'">阅读全文 >></a>
    </p>
  </div>
  <div class="ui vertical segment">
    <p class="product-benefit">股权并购产品类</p>
    <p class="product-benefit-details">
      <span>阅读次数：604</span>
      <a v-link="'/service/stockRight'">阅读全文 >></a>
    </p>
  </div>
  <div class="ui vertical segment">
    <p class="product-benefit">另类产品</p>
    <p class="product-benefit-details">
      <span>阅读次数：604</span>
      <a v-link="'/service/offBeat'">阅读全文 >></a>
    </p>
  </div>
  <div class="ui vertical segment">
    <p class="product-benefit">境外投资产品</p>
    <p class="product-benefit-details">
      <span>阅读次数：604</span>
      <a v-link="'/service/overseasInvestment'">阅读全文 >></a>
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
