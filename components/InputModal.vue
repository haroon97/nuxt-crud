<template>
    <div>
        <b-modal ref="my-modal" hide-footer title="nuxt-crud">
            <div class="d-block text-center">
                <h3>{{ mode === 'add' ? 'Add Records' : 'Update Records' }}</h3>
            </div>
            <b-form-input v-model="title" :placeholder="mode === 'add' ? 'Enter title' : data.title"></b-form-input>
            <b-form-input  class="mt-3" v-model="description" :placeholder="mode === 'add' ? 'Enter Description' : data.description"></b-form-input>
            <b-form-input class="mt-3" v-model="addedBy" :placeholder="mode === 'add' ? 'Added By' : data.addedBy"></b-form-input>
            <b-button class="mt-3" variant="outline-success" block @click="hideModal">{{ mode === 'add' ? 'Add Record' : 'Update Record' }}</b-button>
        </b-modal>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
    export default {
        data: function() {
            if (this.mode === 'update') {
                return {
                    title: this.data.title,
                    description: this.data.description,
                    addedBy: this.data.addedBy
                }
            }
            return {
                title: '',
                description: '',
                addedBy: '',
            }
        },
        props: {
            mode: {
                type: String,
                default: 'add',
                required: true,
            },
            data: {
                type: Object,
                required: false,
            },
            toggle: {
                type: Boolean,
                default: false,
            }
        },
        watch: {
            toggle: function() {
                this.showModal();
            }
        },
        methods: {
            showModal() {
                this.$refs['my-modal'].show()
            },
            hideModal() {
                this.$refs['my-modal'].hide();
                if (this.mode === 'add') {
                    this.addRecord({
                        id: Math.floor((Math.random() * 1000) + 1),
                        title: this.title,
                        description: this.description,
                        addedBy: this.addedBy
                    })
                } else {
                    console.log(this.data.id);
                    this.updateRecord({
                        id: this.data.id,
                        title: this.title,
                        description: this.description,
                        addedBy: this.addedBy
                    })
                }

                this.clearInputs();
            },
            toggleModal() {
                this.$refs['my-modal'].toggle('#toggle-btn')
            },
            clearInputs() {
                this.title = '';
                this.description = '';
                this.addedBy = '';
            },
            ...mapActions(['addRecord', 'updateRecord'])
        },
    }
</script>

<style lang="scss" scoped>

</style>