<script >
import HeaderComponent from './components/HeaderComponent.vue';
import Banner from './components/Banner.vue';
import ProductList from './components/ProductList.vue';
import Homepage from './components/Homepage.vue';

const baseURL = 'http://127.0.0.1:8000/api/';

export default {
  components :{
    HeaderComponent,
    Banner,
    Homepage,
    ProductList
  },
  data() {
    return {
      categories:  [],

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

      products: []
    }
  },
  
  methods: {
    async getAllProducts()
    {
    let res = await fetch (baseURL + 'products');
    let data = await res.json();
    this.products = data;
    },

    async getAllCategories()
    {
    let res = await fetch (baseURL + 'categories');
    let data = await res.json();
    this.categories = data;
    },
    setProducts(data) {
      this.products = data;
    }
  },
  created(){
    this.getAllProducts();
    this.getAllCategories();
  }
}
</script>

<template>
    <HeaderComponent v-bind:categories="categories"></HeaderComponent>
    <main class="main">
      <router-view :listProduct="products" :oneProduct="oneProduct" :oneCategory="oneCat"/> 
    </main> 
</template>

<style>

</style>
