<template>
    <li class="box noti-item">
        <span>{{data.message}}</span>
    </li>
</template>

<script>
export default {
    name: "notification-item",
    props: ["data"]
};
</script>

<style lang="scss" scoped>
.noti-item {
    margin: 10px 0 0 0;
    padding: 10px;
    min-height: 100px;
}
</style>