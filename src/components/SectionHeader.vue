<template>
<v-container>
    <div class="pt-12"></div>
    <v-row justify="center" class="pt-12">
        <span class="text-center text-h3 text-sm-h2 ma-4">{{text}}</span>
    </v-row>
</v-container>
</template>

<script>
export default {
    props: ['text'],
}
</script>

<style lang="scss" scoped>

</style>