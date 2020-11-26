<template>
  <div class="productDetails">
      <h1>Product Name</h1>
      <h3>$ Price</h3>
      <div>Rating</div>
      <img src="../assets/impact-whey-protein.jpg"/>
      <h3> - Quantity +</h3>
      <router-link to="/cart" >Add To Cart</router-link>
      <div>
          <h2>Product Description</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sed ipsam ab neque molestias, quae magnam maxime quasi natus illum officiis consequuntur eveniet dicta animi voluptate velit ducimus sequi laudantium!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta qui ullam quasi animi. Dolore facere sint nobis cupiditate tenetur, nulla quasi illo non qui accusantium. Neque atque fugiat iusto eligendi.
          </p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.productDetails{
    margin-bottom: 100px;
}
</style>