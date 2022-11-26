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
        async addTask(task) {
            const res = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
            });

            const data = await res.json();

            this.tasks = this.tasks.concat(data);
        },
        async deleteTask(id) {
            const res = await fetch(`/api/tasks/${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                this.tasks = this.tasks.filter((task) => task.id !== id);
            }
        },
        showAddForm(canShowAddForm) {
            this.canShowAddForm = canShowAddForm;
        },
        async toggleReminder(id) {
            const task = this.tasks.find((task) => task.id === id);

            const res = await fetch(`/api/tasks/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    reminder: !task.reminder,
                }),
            });
            const data = await res.json();

            this.tasks = this.tasks.map((task) => task.id === id ? data : task);
        },
        async getTasks() {
            const res = await fetch('/api/tasks');

            return res.json();
        },
        async getTask(id) {
            const res = await fetch(`/api/tasks/${id}`);

            return res.json();
        },
    },
    async created() {
        this.tasks = await this.getTasks();
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
