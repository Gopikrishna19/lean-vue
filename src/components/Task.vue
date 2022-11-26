<template>
    <div class="task" :class="{reminder: task.reminder}" @dblclick="$emit('toggle-reminder', task.id)">
        <h3>
            {{ task.text }}
            <IconButton
                @click="$emit('delete', task.id)"
                type="delete"
            />
        </h3>
        <p>{{ serializeDate(task.day) }}</p>
    </div>
</template>

<script>
import IconButton from '@/components/IconButton';
import {serializeDate} from '@/utils/date';

export default {
    name: 'LV-Task',
    components: {
        IconButton,
    },
    methods: {
        serializeDate
    },
    props: {
        task: Object,
    },
};
</script>

<style scoped>
.task {
    background-color: #f4f4f4;
    padding: 1em;
    margin: 5px;
    cursor: pointer;
    border-left: 5px solid transparent;
    user-select: none;
}

.task.reminder {
    border-left-color: green;
}

.task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 .5rem;
}

.task p {
    margin: 0;
}

</style>
