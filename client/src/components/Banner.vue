<template>
    <div id="banner" :style="{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'hover'
        }">
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
}
</style>