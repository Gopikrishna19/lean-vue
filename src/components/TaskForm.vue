<template>
    <form @submit.prevent="handleSubmit">
        <label>
            <span class="label-text">Task</span>
            <input class="text-input" type="text" placeholder="Add Task" v-model="text">
        </label>
        <label>
            <span class="label-text">Date</span>
            <input class="text-input" type="datetime-local" placeholder="Add Day & Time" v-model="day">
        </label>
        <label>
            <input type="checkbox" v-model="reminder">
            <span>Set Reminder</span>
        </label>

        <Button type="submit">
            Save Task
        </Button>
    </form>
</template>

<script>
import Button from '@/components/Button';
import {serializeDate} from '@/utils/date';

export default {
    name: 'LV-TaskForm',
    components: {
        Button
    },
    data() {
        return {
            text: '',
            day: null,
            reminder: false,
        };
    },
    methods: {
        handleSubmit() {
            const {text, day, reminder} = this;

            serializeDate(day);

            this.$emit('create-task', {
                text,
                day,
                reminder
            })
        }
    }
};
</script>

<style scoped>
form {
    margin-bottom: 1em;
}

label {
    display: block;
    margin-bottom: .5em;
}

.label-text {
    font-weight: bold;
    margin-bottom: .25em;
    display: block;
}

.text-input {
    padding: .5em;
    width: 100%;
    box-sizing: border-box;
}
</style>
