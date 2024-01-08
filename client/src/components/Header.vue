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
                <div class="header-link dropdown-link">
                    <!-- <router-link style="color: black; text-decoration: none;" to="/products">Shop</router-link> -->
                    <p>Shop</p>
                    <div class="dropdown-content">
                        <a>Link 1</a>
                        <a>Link 2</a>
                        <a>Link 2</a>
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
export default {
    name: "Header"
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

.dropdown-link {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: purple;
    min-width: 160px;
    z-index: 1;
}

.dropdown-link:hover .dropdown-content {
    display: flex;
    flex-direction: column;
}
</style>