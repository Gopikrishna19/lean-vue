<template>
    <Header>
        <template v-slot:title>Task Manager</template>
        <IconButton v-if="showAddForm" @click="handleAdd" type="close"/>
        <Button v-else @click="handleAdd" variant="primary">
            Add Task
        </Button>
    </Header>
</template>

<script>
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import Header from '@/components/Header';

export default {
    name: 'LV-TaskHeader',
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
        Header,
        IconButton,
        Button,
    },
};
</script>
