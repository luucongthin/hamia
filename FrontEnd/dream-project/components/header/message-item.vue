<template>
    <li class="box message-item">
        <span>{{data.message}}</span>
    </li>
</template>

<script>
export default {
    name: "message-item",
    props: ["data"]
};
</script>

<style lang="scss" scoped>
.message-item {
    margin: 10px 0 0 0;
    padding: 10px;
    min-height: 100px;
}
</style>