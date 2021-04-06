<template>
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Added By</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id" class="tableRow" >
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.addedBy }}</td>
            <button class="btn btn-info ml-3" @click="getRecord(item.id)">Select</button>
            <button class="btn btn-danger ml-3" @click="deleteRecord(item.id)">Delete</button>
            <button class="btn btn-warning ml-3" @click="update(item)">Update</button>
            </tr>
            <InputModal  mode="update" :data="entryToUpdate" :toggle="modalToggler"/>
        </tbody>
    </table>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
    export default {
        data: function() {
            return {
                selectedEntry: {},
                modalToggler: false,
                entryToUpdate: {}
            }
        },
        props: {
            data: {
                type: Array,
                default: [],
                required: true
            }
        },
        computed: {
            ...mapGetters['getRecordById'],
        },
        methods: {
            ...mapActions(['deleteRecord', 'getRecord']),
            update: function (data) {
                this.entryToUpdate = data;
                this.modalToggler = !this.modalToggler;
            }
        }
    }
</script>

<style scoped>
    .tableRow {
        cursor: pointer;
    }
</style>