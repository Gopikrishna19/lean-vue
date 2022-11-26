<template>
    <Button variant="icon" v-bind="$attrs">
        <Icon :type="type"/>
    </Button>
</template>

<script>
import Button from '@/components/Button';
import Icon from '@/components/Icon';

export default {
    name: 'LV-IconButton',
    components: {
        Button,
        Icon,
    },
    props: {
        ...Icon.props
    }
};
</script>
