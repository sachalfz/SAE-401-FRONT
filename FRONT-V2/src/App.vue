<script >
import HeaderComponent from './components/HeaderComponent.vue';
import Banner from './components/Banner.vue';
import ProductList from './components/ProductList.vue';
import Homepage from './components/Homepage.vue';
import axios from 'axios';

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

      allProducts: [],

      basket: []
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
      this.basket.splice(this.basket.indexOf(item), 1);
    },

    putToBasket(item){
      console.log(item);
      //this.basket.push(item);
      this.basket.push(item);
      if (this.basket.indexOf(item) !== this.basket.lastIndexOf(item)) {
        alert('No Duplicates Allowed!');
      }
      this.basket = [...new Set(this.basket)]
    },

    placeOrder(array){
      console.log(array);
      let orderIds = [];
      for (const elt of array) {
        orderIds.push(elt.id);        
      }
      const data = {
      items: orderIds
      };
      axios.post(baseURL + 'baskets', data)
      .then(response => {
        console.log('item added to basket', response.data);
        alert("Your order is on the way. Thank you for your purchase!");
        this.basket.splice(0, this.basket.length);
      })
      .catch(error => {
        console.error('Failed to add to the basket', error);
      })
    },  
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
      <router-view :listProduct="allProducts" :basketProduct="basket" :oneProduct="oneProduct" :oneCategory="oneCat" :trash="true" @delete="deleteItem" @getOneProduct="getOneProduct" @putToBasket="putToBasket" @placeOrder="placeOrder"/> 
    </main> 
</template>

<style>

</style>
