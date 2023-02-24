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
            }
        }
}
</script>

<template>
  <ProductPage :listProduct="listProduct" :oneProduct="oneProduct" :oneCategory="oneCategory" @getOneProduct="handler_getOneProduct" @putToBasket="handler_putToBasket"></ProductPage>
</template>