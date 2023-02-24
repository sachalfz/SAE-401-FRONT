<script >
import HeaderComponent from './components/HeaderComponent.vue';
import Banner from './components/Banner.vue';
import ProductList from './components/ProductList.vue';
import Homepage from './components/Homepage.vue';
import axios from 'axios';

const baseURL = 'https://mmi.unilim.fr/~maury92/SAE-401-Back/public/index.php/api/';

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
      basket: [],
      selectedProps: {color:'aucun choix', size:'aucun choix'},
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
      this.selectedProps.color = "";
      this.selectedProps.size = "";
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

    getColor(item) {
      //console.log(item);
      this.selectedProps.color = item
    },

    getSize(item) {
      //console.log(item);
      this.selectedProps.size = item
    },

    putToBasket(item){
      //console.log(item);
      item.selectedColor = this.selectedProps.color;
      item.selectedSize = this.selectedProps.size;
      this.basket.push(item);
      if (this.basket.indexOf(item) !== this.basket.lastIndexOf(item)) {
        alert('No Duplicates Allowed!');
      }
      this.basket = [...new Set(this.basket)]
    },

    placeOrder(array){
      let idBasket = '';
      // let newBasket = {};
      // axios.post(baseURL + 'baskets' , newBasket)
      // .catch(error => {
      //     console.error('Failed to add basket to the BDD', error);
      //   }) 

      for (const elt of array) {
        let properties = {
          name: elt.name,
          color: elt.selectedColor,
          size: elt.selectedSize,
          basket_id: idBasket,
          product_id: elt.id
        };
        axios.post(baseURL + 'basket_items', properties) 
        .then(response => {
          console.log('item added to BDD', response.data);
        })
        .catch(error => {
          console.error('Failed to add basketItem to the BDD', error);
        })    
      }
      alert('Thanks for your purchase!');
      this.basket.splice(0, this.basket.length);

    },  
  },
  created(){
      this.getAllProducts();
      this.getAllCategories();
      this.getColor();
      this.getSize();
    }
}
</script>

<template>
    <HeaderComponent v-bind:categories="categories" @getOneCategory="getOneCategory" @getAllProducts="getAllProducts"></HeaderComponent>
    <main class="main">
      <router-view v-bind:selectedProps="selectedProps" :listProduct="allProducts" :basketProduct="basket" :oneProduct="oneProduct" :oneCategory="oneCat" :trash="true" @delete="deleteItem" @getOneProduct="getOneProduct" @putToBasket="putToBasket" @placeOrder="placeOrder" @getColor="getColor" @getSize="getSize"/> 
    </main> 
</template>

<style>

</style>
