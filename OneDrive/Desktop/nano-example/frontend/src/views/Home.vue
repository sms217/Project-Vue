<template>
<div>

    <v-card class="mx-auto my-12" sm="6" max-width="400" v-for="b in books" :key="b.id">
        <v-img
            class="white--text align-end"
            height="200px"
            v-bind:src='b.cover'
        >
            <v-card-title>{{b.title}}</v-card-title>
        </v-img>

        <v-card-text class="text--primary">
            <div>{{b.author}}</div>
        </v-card-text>

        <v-card-actions>
            <v-btn color="orange" text @click="showDetail(b.bookId)">
                Show Detail
            </v-btn>
        </v-card-actions>
    </v-card>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "Home",
    data() {
        return { books: [] };
    },
    methods:{
      showDetail(id){
        location.href=`http://localhost:8084/books/${id}`;
      }
    },
    mounted() {
        axios
            .get("/api/books")
            .then((response) => {
                console.log(response);
                console.log(response.data);
                this.books = response.data;
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>
