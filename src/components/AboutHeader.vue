<template>
    <Header>
        <template v-slot:title>
            About
        </template>
    </Header>
</template>

<script>

import Header from '@/components/Header';

export default {
    name: 'LV-AboutHeader',
    components: {
        Header,
    },
};
</script>

