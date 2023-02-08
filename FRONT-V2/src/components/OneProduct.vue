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
    <div class="card">
        <router-link to="/product"><img class="card--img" :src=" oneProduct.img " :alt=" oneProduct.name "></router-link>
        <p class="card--title">{{ oneProduct.name }}</p>
        <div class="card__avis">
            <img class="card__avis--star" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/star.svg" alt="#">
            <img class="card__avis--star" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/star.svg" alt="#">
            <img class="card__avis--star" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/star.svg" alt="#">
            <img class="card__avis--star" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/star.svg" alt="#">
            <img class="card__avis--star" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/star.svg" alt="#">
        </div>
        <p class="card--price">{{ oneProduct.price }}€</p>
        <img class="card--favori" src="https://mmi.unilim.fr/~maury92/SA%c3%a9301/assets/icons/favorite.svg" alt="fav">
    </div>
</template>

