<template>
    <header>
        <h1>Task Manager</h1>
        <IconButton v-if="showAddForm" @click="handleAdd" type="close"/>
        <Button v-else @click="handleAdd" variant="primary">
            Add Task
        </Button>
    </header>
</template>

<script>
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';

export default {
    name: 'LV-Header',
    methods: {
        handleAdd() {
            this.showAddForm = !this.showAddForm;
            this.$emit('add-task', this.showAddForm);
        },
    },
    data() {
        return {
            showAddForm: false,
        };
    },
    components: {
        IconButton,
        Button,
    },
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
