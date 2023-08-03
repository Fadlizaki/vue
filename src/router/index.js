import { createWebHistory, createRouter } from "vue-router";
import Home from "/src/views/Home.vue";
import About from "/src/views/About.vue";
import Contact from "/src/views/Contact.vue";
import Produk from "/src/views/Produk.vue";
import Kategori from "/src/views/Kategori.vue";
import Detail from "/src/views/Detail.vue";
import Detailkategori from "/src/views/DetailKategori.vue";
import PageNotfound from "/src/views/PageNotFound.vue";
import Login from "/src/views/Login.vue";
import {users} from "/src/assets/user.js"


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
        path: "/kategori",
        name: "Kategori",
        component: Kategori,
    },
    {
        path: "/detailkategori/:id_kategori",
        name: "Detailkategori",
        component: Detailkategori,

        props: true,
    },
    {
        path: "/login", 
        name: "Login",
        component: Login, 
        props: true,
    },
    { 
        path: "/produk",
        name: "Produk",
        component: Produk,
        beforeEnter: (to, from, next) => {
        const loggedInUser = true;
        if (loggedInUser) {
        next (); // Lanjutkan navigasi ke halaman produk jika sudah login
        } 
        else {
        next("/login"); // Alihkan ke halaman login jika belum login
        }
        },
        },
    {
        path: "/detail/:id_produk",
        name: "Detail",
        component: Detail,
        props: true,
    },

        { path: "/:pathMatch(.*)*", component: PageNotfound },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;