<template>
  <div class="container">
    <h1 class="title">Contact</h1>
    <div class="content">
      <form @submit.prevent="addCustomer">
        <label class="form-label" for="name">Name:</label>
        <input class="form-field" name="name" id="name" v-model="Name">
        <label class="form-label" for="code">Code:</label>
        <input class="form-field" name="code" id="code" v-model="Code">
        <label class="form-label" for="street">Street:</label>
        <input class="form-field" name="street" id="street" v-model="Street">
        <label class="form-label" for="floor">Floor:</label>
        <input class="form-field" name="floor" id="floor" v-model="Floor">
        <label class="form-label" for="area">Area:</label>
        <input class="form-field" name="area" id="area" v-model="Area">
        <label class="form-label" for="zip">Zip:</label>
        <input class="form-field" name="zip" id="zip" v-model="ZipCode">
        <label class="form-label" for="phone">Phone:</label>
        <input class="form-field" name="phone" id="phone" v-model="Phone">
        <label class="form-label" for="mobile">Mobile:</label>
        <input class="form-field" name="mobile" id="mobile" v-model="Mobile">


        <button class="btn btn-primary" type="submit">Add Customer</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Name: null,
      Code: null,
      Street: null,
      Area: null,
      Floor: null,
      Phone: null,
      Mobile: null,
      ZipCode:null,
      errors: []
    };
  },

  methods: {
    addCustomer() {
      axios
        .post("http://127.0.0.1:3333/customers/add", {
          Name: this.Name,
          Code: this.Code,
          Street: this.Street,
          Area: this.Area,
          Floor: this.Floor,
          Phone: this.Phone,
          Mobile: this.Mobile,
          ZipCode: this.ZipCode
        })
        .then(response => {})
        .catch(e => {
          console.error(e);
        });
    }
  }
};
</script>

<style scoped>
</style>