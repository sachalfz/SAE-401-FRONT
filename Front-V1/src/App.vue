<script >
import HeaderComponent from './components/HeaderComponent.vue';
import OneProduct from './components/OneProduct.vue';

export default {
  components :{
    HeaderComponent,
    OneProduct
  },
  data() {
    return {
      cat:  [
              {id: 1, name: "Polos"}, 
              {id: 2, name: "Sneakers"}, 
              {id: 3, name: "Pants"}
      ],

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

      <div class="trending">
        <p class="trending--title">Articles à la une / Notre sélection</p>
        <ul class="trending__list">
          <li class="trending__items" v-for="item in products"><OneProduct v-bind:oneProduct="item"></OneProduct></li>
        </ul>
      </div>

    </main>
    
</template>

<style>

</style>
