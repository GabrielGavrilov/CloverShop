<template>
    <div id="banner" :style="{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'hover'
        }">
        <p id="banner-title">Lorem Ipsum</p>
    </div>
</template>

<script>
export default {
    name: "Banner",
    props: ["backgroundImage"]
}
</script>

<style>
#banner {
    height: 300px;
    background-color: purple;
    display: flex;
    justify-content: center;
    align-items: center;
}

#banner-title {
    font-size: 4rem;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
}
</style>