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
            }
        }
}
</script>

<template>
  <ProductPage :listProduct="listProduct" :oneProduct="oneProduct" :oneCategory="oneCategory" @getOneProduct="handler_getOneProduct"></ProductPage>
</template>