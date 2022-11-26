<template>
    <div v-for="task in tasks" :key="task.id">
        <Task
            :task="task"
            @delete="$emit('delete-task', task.id)"
            @toggle-reminder="$emit('toggle-task-reminder', task.id)"
        />
    </div>
</template>

<script>
import Task from '@/components/Task';

export default {
    name: 'LV-Tasks',
    emits: [
        'delete-task',
        'toggle-task-reminder',
    ],
    components: {
        Task,
    },
    props: {
        tasks: Array,
    },
};
</script>
