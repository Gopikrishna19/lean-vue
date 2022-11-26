<template>
    <button
        :class="classes"
        v-bind="$attrs"
    >
        <slot/>
    </button>
</template>

<script>
export default {
    computed: {
        classes() {
            return {
                [this.$props.variant]: true
            };
        },
    },
    name: 'LV-Button',
    props: {
        variant: {
            type: String,
            default: 'secondary',
            validator(value) {
                return [
                    'primary',
                    'secondary',
                    'icon',
                ].indexOf(value) >= 0;
            },
        },
    },
};
</script>

<style scoped>
button {
    border: none;
    border-radius: 4px;
}
button.primary {
    padding: 10px 20px;
    background-color: green;
    color: white;
}
button.secondary {
    padding: 10px 20px;
    background-color: gray;
    color: white;
}
button.icon {
    padding: 0;
}
</style>
