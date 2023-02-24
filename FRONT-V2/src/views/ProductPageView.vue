<script>
import ProductPage from '../components/ProductPage.vue';
export default {
  components :{
    ProductPage
  },
  props: {
        listProduct : {
            type: Array,
            required: true,
            validator(value) {
                return value.length <= 100;
            }
        },
        oneProduct : {
            type: Array,
            required: true,
            validator(value) {
                return value.length <= 100;
            }
        },
        selectedProps : {
            type: Object,
            required: true,
            validator(value) {
                return value.length <= 100;
            }
        }
    },
    methods: {
            handler_getOneProduct(id){
               // console.log(id);
                this.$emit('getOneProduct', id);
            },
            handler_putToBasket(item){
                //console.log(item);
                this.$emit('putToBasket', item);
            },
            handler_placeOrder(array){
                //console.log(array);
                this.$emit('placeOrder', array);
            },
            handler_getColor(item){
                //console.log(item);
                this.$emit('getColor', item);
            },
            handler_getSize(item){
                //console.log(item);
                this.$emit('getSize', item);
            }
        }
}
</script>

<template>
  <ProductPage v-bind:selectedProps="selectedProps" :listProduct="listProduct" :oneProduct="oneProduct" :oneCategory="oneCategory" @getOneProduct="handler_getOneProduct" @putToBasket="handler_putToBasket" @placeOrder="handler_placeOrder" @getColor="handler_getColor" @getSize="handler_getSize"></ProductPage>
</template>