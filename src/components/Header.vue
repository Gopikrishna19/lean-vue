<template>
    <header>
        <h1>
            <slot name="title"/>
        </h1>
        <slot/>
    </header>
</template>

<script>

export default {
    name: 'LV-Header',
};
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

h1 {
    margin: 0;
}
</style>
