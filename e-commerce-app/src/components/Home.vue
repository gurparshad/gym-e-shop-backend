<template>
  <div class="home">
    <div>
        <img class="bannerImage" src="../assets/banner.png"/>
    </div>
    <div>
        <h1>Best Sellers</h1>
        <div class="products">
          <Product/>
          <Product/>
          <Product/>
        </div>
    </div>
  </div>
</template>

<script>
import Product from './Product.vue';

export default {
  name: 'Home',
  components: {
    Product,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home{
  margin-bottom: 100px;
}

.bannerImage{
  object-fit: contain;
  width: 100%;
}

</style>
