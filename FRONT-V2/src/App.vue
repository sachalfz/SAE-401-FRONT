<script >
import HeaderComponent from './components/HeaderComponent.vue';
import Banner from './components/Banner.vue';
import ProductList from './components/ProductList.vue';
import Homepage from './components/Homepage.vue';

const baseURL = 'https://mmi.unilim.fr/~maury92/SAE-401-Back%20-%20RedoEasyAdmin/public/index.php/api/';

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

      oneCat:  {},

      oneProduct:  {},

      allProducts: []
    }
  },
  
  methods: {
    async getAllProducts()
    {
    let res = await fetch (baseURL + 'products');
    let data = await res.json();
    this.allProducts = data;
    },

    async getAllCategories()
    {
    let res = await fetch (baseURL + 'categories');
    let data = await res.json();
    this.categories = data;
    },

    async getOneProduct(id)
    {
      let res = await fetch (baseURL + 'products/' + id);
      let data = await res.json();
      this.oneProduct = data;
    },

    async getOneProductForCategory(category)
    {
      let res = await fetch (baseURL + category + '/');
      let data = await res.json();
      this.oneProduct = data[0];
    },

    async getOneCategory(item)
    {
    let res = await fetch (baseURL + 'categories/' + item.id);
    let data = await res.json();
    this.oneCat = data;
    this.oneProduct = data.products[0];
    this.allProducts = data.products;
    },

    deleteItem(item) {
      this.products.splice(this.products.indexOf(item), 1);
    }

  },
  created(){
    this.getAllProducts();
    this.getAllCategories();
  }
}
</script>

<template>
    <HeaderComponent v-bind:categories="categories" @getOneCategory="getOneCategory" @getAllProducts="getAllProducts"></HeaderComponent>
    <main class="main">
      <router-view :listProduct="allProducts" :oneProduct="oneProduct" :oneCategory="oneCat" :trash="true" @delete="deleteItem" @getOneProduct="getOneProduct" /> 
    </main> 
</template>

<style>

</style>
