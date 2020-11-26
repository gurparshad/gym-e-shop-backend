import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';
import Register from '../components/Register.vue';
import ProductDetails from '../components/ProductDetails.vue';
import Cart from '../components/Cart.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/productDetails',
            name: 'ProductDetails',
            component: ProductDetails
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
    ]
})