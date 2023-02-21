<script>
    export default {
        props : {
            products : {
                type: Array,
                required: true,
                validator(value){
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
    <ul class="card__list">
        <li>
            <div class="panier__gauche__produits">
                <div class="panier__gauche__produits__quote" v-for="produit in products" :key="produit.id">
                    <div class="panier__gauche__produits__image">
                        <img class="panier__gauche__produits__img" v-bind:src="produit.img">
                    </div>
                    <div class="panier__gauche__produits__text">
                        <div class="panier__gauche__produits__association">
                            <div class="panier__gauche__produits__caption">
                                {{produit.name}}
                            </div>
                            <div class="panier__gauche__produits__svg">
                                <img  v-if="trash" @click="$emit('delete', produit)" src="../assets/bin.svg" alt="bin">
                            </div>
                        </div>

                        <!-- <div class="panier__gauche__produits__text2">
                            <span class="panier__gauche__produits__text2__span">{{produit.taille}}</span>
                        </div> -->

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
                            {{produit.price}}
                        </div>

                    </div>
                </div>
            </div>

            <div class="panier__gauche__divbutton">
                <button class="panier__gauche__button">
                    Valider
                </button>
            </div>
            

        </li>
    </ul>
</template>

