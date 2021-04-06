<template>
    <div class="container mt-5">
        <DataTable :data="data" class="mt-4" v-on:selected-entry="showSelectedEntry" />
        <InputModal ref="modal" :mode="add" />
        <b-button class="btn btn-success" id="show-btn" @click="addRecord">Add</b-button>
        <div class="container pt-4" v-if="selectedEntry">
            <h4>{{ selectedEntry.id }}</h4>
            <h4>{{ selectedEntry.title }}</h4>
            <h4>{{ selectedEntry.description }}</h4>
        </div>
        <h4>{{ selectedRecord.title }}</h4>
        <h4>{{ selectedRecord.description }}</h4>
        <h4>{{ selectedRecord.addedBy }}</h4>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['data', 'selectedRecord'])
    },
    methods: {
        showSelectedEntry: function (data) {
            this.selectedEntry = {
                ...data.item
            }
        },
        addRecord: function() {
            this.$refs.modal.showModal();
        }
    },
    data() {
        return {
            selectedEntry: {}
        }
    }
}
</script>

<style scoped>
</style>
