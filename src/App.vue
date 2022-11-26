<template>
    <div class="app">
        <Header @add-task="showAddForm"/>
        <TaskForm v-show="canShowAddForm" @create-task="addTask"/>
        <Tasks
            :tasks="tasks"
            @delete-task="deleteTask"
            @toggle-task-reminder="toggleReminder"
        />
    </div>
</template>

<script>
import Header from '@/components/Header';
import Tasks from '@/components/Tasks';
import TaskForm from '@/components/TaskForm';

export default {
    name: 'App',
    components: {
        TaskForm,
        Header,
        Tasks,
    },
    data() {
        return {
            tasks: [],
            canShowAddForm: false,
        };
    },
    methods: {
        addTask(task) {
            this.tasks = this.tasks.concat({
                ...task,
                id: this.tasks.at(-1).id + 1,
            });
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter((task) => task.id !== id);
        },
        showAddForm(canShowAddForm) {
            this.canShowAddForm = canShowAddForm;
        },
        toggleReminder(id) {
            this.tasks = this.tasks.map((task) => task.id === id ? {
                ...task,
                reminder: !task.reminder,
            } : task);
        },
    },
    created() {
        this.tasks = [
            {
                id: 1,
                text: 'Buy Milk',
                day: '2022-03-01T14:30',
                reminder: true,
            },
            {
                id: 2,
                text: 'Buy Bread',
                day: '2022-03-02T13:00',
                reminder: true,
            },
            {
                id: 3,
                text: 'Eat bread and milk',
                day: '2022-03-03T11:45',
                reminder: false,
            },
        ];
    },
};
</script>

<style scoped>
.app {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
