<template>
    <div class="app">
        <main class="content">
            <router-view/>
        </main>
        <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer';

export default {
    name: 'LV-App',
    components: {
        Footer,
    },
};
</script>

<style>
body {
    margin: 0;
    padding: 0;
}
</style>

<style scoped>
.app {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 1em;
    box-sizing: border-box;
}

.content {
    flex-grow: 1;
}
</style>
