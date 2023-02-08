<script>
import Homepage from '../components/Homepage.vue';
export default {
  components :{
    Homepage
  },
  props: {
        listProduct : {
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
  <Homepage v-bind:listProduct="listProduct"></Homepage>
</template>