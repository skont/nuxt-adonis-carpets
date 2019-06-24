<template>
  <div>
    <div>
      <h1>You are about to delete Customer: {{id}}</h1>
      <button class="btn btn-primary" type="submit" v-on:Click="delteCustomer()">Delete Customer</button>
      <!-- <button class="btn btn-primary" type="submit"><nuxt-link to="{ name: 'index' }">Cancel</nuxt-link></button> -->
      <nuxt-link :to="{name: 'index'}" tag="button" class="btn btn-primary">Cancel</nuxt-link>
    </div>
    <div>
      {{link}}
      {{err.message}}
      {{message}}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: this.$route.params.id,
      link: "http://127.0.0.1:3333/customers/delete/" + this.$route.params.id,
      err: [],
      message: null
    };
  },
  methods: {
    deleteCustomer() {
       const url = `http://127.0.0.1:3333/customers/delete${this.$route.params.id}`;
      return axios
              .delete(url);
        //.delete("http://127.0.0.1:3333/customers/delete", {
        //  params: { id: this.$route.params.id }
        //})
        // .then(response => {})
        // .catch((err) => {
        // error({ statusCode: 404, message: err.message })
      //});
    }
  }
};
</script>