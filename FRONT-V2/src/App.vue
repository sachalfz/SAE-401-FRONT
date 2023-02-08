<script >
import HeaderComponent from './components/HeaderComponent.vue';
import Banner from './components/Banner.vue';
import ProductList from './components/ProductList.vue';
import Homepage from './components/Homepage.vue';

export default {
  components :{
    HeaderComponent,
    Banner,
    Homepage,
    ProductList
  },
  data() {
    return {
      cat:  [
              {id: 1, name: "Polos"}, 
              {id: 2, name: "Sneakers"}, 
              {id: 3, name: "Pants"}
      ],

      oneCat:  {
        description: "Pantalons de très bonne qualité", 
        name: "Pants",
        img: "https://picsum.photos/1500/1500"
      },

      oneProduct:  {
        id: 1,
        name: "Un beau polo",
        description: "edqnjgbipb",
        price: 160,
        img: "https://picsum.photos/400"
      },

      products: [
      {
        id: 1,
        name: "Un beau polo",
        description: "edqnjgbipb",
        price: 160,
        img: "https://picsum.photos/400"
      },
      {
        id: 1,
        name: "Un beau polo",
        description: "edqnjgbipb",
        price: 160,
        img: "https://picsum.photos/400"
      },
      {
        id: 1,
        name: "Un beau polo",
        description: "edqnjgbipb",
        price: 160,
        img: "https://picsum.photos/400"
      },
      {
        id: 1,
        name: "Un beau polo",
        description: "edqnjgbipb",
        price: 160,
        img: "https://picsum.photos/400"
      }
      ]
    }
  }
}
</script>

<template>
    <HeaderComponent v-bind:categories="cat"></HeaderComponent>
    <main class="main">
      <router-view :listProduct="products" :oneProduct="oneProduct" :oneCategory="oneCat"/> 
    </main> 
</template>

<style>

</style>
