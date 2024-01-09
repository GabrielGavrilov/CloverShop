<template>
    <header>
        <div id="header-content">
            <div id="header-left">
                <img v-bind:src="require('@/assets/clover.png')">
            </div>
            <div id="header-center">
                <div class="header-link">
                    <router-link style="color: black; text-decoration: none;" to="/">Home</router-link>
                </div>
                <div class="header-link dropdown">
                    <!-- <router-link style="color: black; text-decoration: none;" to="/products">Shop</router-link> -->
                    <p>Shop</p>
                    <div class="dropdown-content">
                        <router-link v-for="category in categories" v-bind:key="category.categoryName" :to="category.categoryName">
                            <button class="dropdown-link">{{ category.categoryName }}</button>
                        </router-link>
                    </div>
                </div>
                <div class="header-link">
                    <router-link style="color: black; text-decoration: none;" to="/about">About Us</router-link>
                </div>
                <div class="header-link">
                    <router-link style="color: black; text-decoration: none;" to="/faq">FAQ</router-link>
                </div>
                <div class="header-link">
                    <router-link style="color: black; text-decoration: none;" to="/contact">Contact Us</router-link>
                </div>
            </div>
            <div id="header-right">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" width="37" height="37"><path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </div>
        </div>
    </header>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
    name: "Header",
    setup() {
        let categories = ref([])
        
        onMounted(async function() {
            const response = await fetch("http://localhost:3000/api/categories", {
                headers: {"Content-Type": "application/json"}
            })

            const content = await response.json()
            console.log(content)
            categories.value = content
        })
        
        return {
            categories
        }
    }
}
</script>

<style scoped>
header {
    height: 100px;
    background-color: #FFF9F9;
    display: flex;
    justify-content: center;
}

#header-content {
    width: 90%;
    height: 100%;
    display: flex;
}

#header-left {
    height: 100%;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

#header-left > img {
    height: 75px;
}

#header-center {
    height: 100%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#header-right {
    height: 100%;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.header-link {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    font-size: 1.15rem;
}

.header-link:hover {
    cursor: pointer;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    z-index: 1;
}

.dropdown:hover {
    cursor: default;
}

.dropdown:hover .dropdown-content {
    display: flex;
    flex-direction: column;
}

.dropdown-link {
    padding: .75rem 1rem;
    border-radius: none;
    background-color: white;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    font-size: 1.10rem;
    width: 175px;
}

.dropdown-link:hover {
    background-color: rgb(44, 44, 44);
    color: white;
    cursor: pointer;
}

</style>