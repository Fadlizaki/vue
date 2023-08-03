import { createWebHistory, createRouter } from "vue-router";
import Home from "/src/views/Home.vue";
import About from "/src/views/About.vue";
import Contact from "/src/views/Contact.vue";
import Produk from "/src/views/Produk.vue";
import Kategori from "/src/views/Kategori.vue";
import Detail from "/src/views/Detail.vue";
import Detailkategori from "/src/views/DetailKategori.vue";


const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/produk",
        name: "Produk",
        component: Produk,
    },
    {
        path: "/kategori",
        name: "Kategori",
        component: Kategori,
    },
    {
        path: "/detail/:id_produk",
        name: "Detail",
        component: Detail,
        props: true,
    },
    {
        path: "/detailkategori/:id_kategori",
        name: "Detailkategori",
        component: Detailkategori,
        props: true,
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;