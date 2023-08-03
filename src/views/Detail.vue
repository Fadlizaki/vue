<template>
    <div v-if="detail == undefined">
        id tidak ada
    </div>
    <div v-else>
        <br>
        <center><img style="height:40%; width: 40%;" :src="getImgSrc(detail.img)" alt="Category Image" />
    <h1>Detail {{ detail.nama }}</h1>
    <h4>Harga : {{ detail.harga }}</h4>
    </center>
    </div>
</template>

<script>
    import { produk } from '/src/assets/Produk'

    export default {
        props: [
            "id_produk"
        ],
        setup(props){
            const detail = produk["produk"].find(function(item) {
                return item.id == props.id_produk
            });
            const getImgSrc = (imgFileName) =>{
            return '../src/assets/img/' + imgFileName + '';
        }
            return{
                detail,
                getImgSrc
            }
        }
    }
</script>