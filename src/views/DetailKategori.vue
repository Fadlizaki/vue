<!-- <template>

    <h1>Detail {{ detailk.nama }}</h1>
    <h4>Harga : {{ detailk.harga }}</h4>
</template>

<script>
    import { kategori } from '/src/assets/Kategori'

    export default {
        props: [
            "id_kategori"
        ],
        setup(props){
            const detailk = kategori["kategori"].find(function(item) {
                return item.id == props.id_kategori
            });
            return{
                detailk
            }
        }
    }
</script> -->


<template>
    <h1>Produk</h1>
    <div class="flex-container">
        <div v-for="produk in Detail" :key="produk.id" class="card">
            <img :src="getImgSrc(produk.img)" alt="Category Image" />
            <router-link class="container" :to="{name: 'Detail', params: { id_produk: produk.id }}">
                <h4>{{ produk.nama }}</h4>
            </router-link>
        </div>
    </div>
</template>

<script>
    import { kategori } from "../assets/Kategori"
    import { produk } from "../assets/Produk"

    export default {
        props:[
            "id_kategori",
        ],
        setup(props) {
            const Detailkategori = kategori ["kategori"].find(function(item) {
                return item.id == props.id_kategori;
            });
            const getImgSrc = (imgFileName) =>{
            return '../src/assets/img/' + imgFileName + '';
        }
            const Detail = produk ["produk"].filter(function(item) {
                return item.id_kategori == props.id_kategori;
            })

            return {
                Detailkategori,
                Detail,
                getImgSrc
            }
        }
    }
</script>
<style>

.flex-container {
    display: flex;
    flex-wrap: wrap;
    
}

.card {
    box-shadow: 0 4px 8px 0 rgb(0,0, 0, 0.2);
    transition: 0.3s;
    margin: 10px;
    min-width: 200px;
    cursor: pointer;
}
.card:hover{
    box-shadow: 0 8px 16px 0 rgb(0,0, 0, 0.2);
}
/* .container {
    padding: 2px 16px;
} */

img{
    height: 150px;
    widows: 100%;
}

</style>