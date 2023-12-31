import {createRouter, createWebHistory} from "vue-router"
import Home from "@/views/Home.vue"
import Products from "@/views/Products.vue"
import Product from "@/views/Product.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/:category",
        name: "Products",
        component: Products
    },
    {
        path: "/product",
        name: "Product",
        component: Product
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router