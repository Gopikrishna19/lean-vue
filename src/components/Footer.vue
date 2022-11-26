<template>
    <footer>
        <p>Copyright &copy; 2022</p>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </footer>
</template>

<script>
export default {
    name: 'LV-Footer'
};
</script>

<style scoped>
a,
a:visited,
a:focus,
a:link {
    color: #333333;
}

a:hover,
a:active {
    color: #000000;
}

footer {
    text-align: center;
}
</style>
