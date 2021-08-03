<template>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
        </template>

        <v-img
            height="250"
            v-bind:src='details.cover'
        ></v-img>

        <v-card-title>{{details.title}}</v-card-title>

        <v-card-text>
            <v-row align="center" class="mx-0">
                <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>

                <div class="grey--text ms-4">
                    4.5 (413)
                </div>
            </v-row>

            <div class="my-4 text-subtitle-1">
                {{details.subtitle}}
            </div>

            <div>
                {{details.info}}
            </div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-title>Information</v-card-title>

        <v-card-text>
            <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
            >
                <v-chip>page : {{details.page}}</v-chip>

                <v-chip>price : {{details.price}}￦</v-chip>

                <v-chip>ISBN : {{details.ISBN}}</v-chip>

            </v-chip-group>
        </v-card-text>

        <v-card-actions>
            <v-btn color="deep-purple lighten-2" text @click="goBack">
                BACK
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import axios from "axios";
export default {
    name: "Detail",
    data() {
        return { details: [] };
    },
    mounted() {
        const id = this.$route.params.bookId;
        axios
            .get(`/api/books/${id}`)
            .then((response) => {
                console.log(response);
                console.log(response.data);
                this.details = response.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
    }
};
</script>
