<script>
import CategoryPage from '../components/CategoryPage.vue';
export default {
  components :{
    CategoryPage
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
        oneCategory : {
            type: Array,
            required: true,
            validator(value) {
                return value.length <= 100;
            }
        },
    }
}
</script>

<template>
  <CategoryPage :listProduct="listProduct" :oneProduct="oneProduct" :oneCategory="oneCategory"></CategoryPage>
</template>