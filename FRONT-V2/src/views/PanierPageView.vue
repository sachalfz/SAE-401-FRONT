<script>
// import PanierPage from '../components/PanierPage.vue';
export default {
//   components :{
//     PanierPage
//   },
  props: {
        basketProduct : {
            type: Array,
            required: true,
            validator(value) {
                return value.length <= 100;
            }
        },

        trash: {
                type: Boolean,
                default: false
            }
    }
}
</script>

<template>
    <div class="panier__global">
        <ul class="card__list">
            <li class="panier__gauche__produits" v-for="item in basketProduct" :key="item.id">
                <div class="panier__gauche__produits__quote">
                    <div class="panier__gauche__produits__image">
                        <img class="panier__gauche__produits__img" v-bind:src="item.img">
                    </div>
                    <div class="panier__gauche__produits__text">
                        <div class="panier__gauche__produits__association">
                            <div class="panier__gauche__produits__caption">
                                {{item.name}}
                            </div>
                            <div class="panier__gauche__produits__svg">
                                <img  v-if="trash" @click="$emit('delete', item)" src="https://mmi.unilim.fr/~bennis1/bin.svg" alt="bin">
                            </div>
                        </div>

                        <div class="panier__gauche__produits__quantite">

                            <select id="quantity-select">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>

                        <div class="panier__gauche__produits__price">
                            {{item.price}}€
                        </div>

                    </div>
                </div>
            </li>
        </ul>

        <button class="panier__gauche__button" @click="$emit('placeOrder', basketProduct)">
            Valider
        </button>

    </div>

    <!-- <div class="panier__gauche__divbutton">
        <button class="panier__gauche__button">
            Valider
        </button>
    </div> -->

    <!-- <PanierPage v-bind:products="listProduct" :trash="true" @delete="$emit('delete', product)"></PanierPage>

    <div class="panier__gauche__produits">
        <ul class="card__list">
            <li class="panier__gauche__produits" v-for="item in products" :key="item.id"> <ProductPanier v-bind:product="item" :trash="true" @delete="$emit('delete', product)"></ProductPanier> </li>
        </ul>
    </div>
    
    <div class="panier__gauche__divbutton">
        <button class="panier__gauche__button">
            Valider
        </button>
    </div>

    <div class="panier__gauche__produits__quote">
            <div class="panier__gauche__produits__image">
                <img class="panier__gauche__produits__img" v-bind:src="product.img">
            </div>
            <div class="panier__gauche__produits__text">
                <div class="panier__gauche__produits__association">
                    <div class="panier__gauche__produits__caption">
                        {{product.name}}
                    </div>
                    <div class="panier__gauche__produits__svg">
                        <img  v-if="trash" @click="$emit('delete', product)" src="../assets/bin.svg" alt="bin">
                    </div>
                </div>

                <div class="panier__gauche__produits__quantite">

                    <select id="quantity-select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>

                <div class="panier__gauche__produits__price">
                    {{product.price}}
                </div>

            </div>
        </div> -->
</template>