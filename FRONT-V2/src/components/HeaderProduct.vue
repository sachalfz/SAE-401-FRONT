<script>
    export default {
        props: {
            oneProduct : {
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
    <div class="product">
        <img class="product--img" :src="oneProduct.img" :alt="oneProduct.name">
        <div class="article">
            <p class="article--title">{{oneProduct.name}}</p>
            <div class="article__evaluation">
                <p class="article__evaluation--price">{{oneProduct.price}}€</p>
                <div class="article__evaluation__rating">
                    <img class="article__evaluation__rating--star" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/star.svg" alt="#">
                    <img class="article__evaluation__rating--star" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/star.svg" alt="#">
                    <img class="article__evaluation__rating--star" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/star.svg" alt="#">
                    <img class="article__evaluation__rating--star" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/star.svg" alt="#">
                    <img class="article__evaluation__rating--star" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/star.svg" alt="#">
                </div>
            </div>
            <div class="article__options">
                <p class="article__options--title">Colors</p>
                <div class="article__options__choice" v-for="item in oneProduct.color">
                    <button class="article__options__choice--btn btncolors"></button>
                    <button class="article__options__choice--btn btncolors"></button>
                    <button class="article__options__choice--btn btncolors"></button>
                    <button class="article__options__choice--btn btncolors"></button>
                    <button class="article__options__choice--btn btncolors"></button>
                    <button class="article__options__choice--btn btncolors"></button>
                </div>
            </div>
            <div class="article__options">
                <p class="article__options--title">Sizes</p>
                <div class="article__options__choice">
                    <button class="article__options__choice--btn btnsizes">S</button>
                    <button class="article__options__choice--btn btnsizes">M</button>
                    <button class="article__options__choice--btn btnsizes">L</button>
                    <button class="article__options__choice--btn btnsizes">XL</button>
                </div>
            </div>
            <div class="article__options">
                <p class="article__options--title">Description</p>
                <p class="article__options--txt">{{oneProduct.description}}</p>
            </div>
            <button class="article--cart">Click & Collect (Retrait en Magasin)</button>

        </div>

    </div>
</template>