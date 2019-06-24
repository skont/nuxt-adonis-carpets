<template>
  <div>
    <h1>Customers</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Code</th>
          <th>Address</th>
          <th>Phone / Mobile</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in customers" v-bind:key="c.id">
          <td>{{c.Name }}</td>
          <td>{{c.Code}}</td>
          <td>{{c.Street}}, {{c.Zip}}, {{c.Area}}</td>
          <td>{{c.Phone}} / {{c.Mobile}}</td>
          <!-- <td><a href=""><font-awesome-icon icon="plus"/></a> <a href="http://127.0.0.1:3333/customers/delete/"{{c.Id}}><font-awesome-icon icon="minus"/></a></td> -->
          <!-- <td><nuxt-link :to="{ path: 'customers/addCustomer' }"><font-awesome-icon icon="plus"/></nuxt-link> <nuxt-link :to="{path: 'http://127.0.0.1:3333/customers/delete/{{c.Id}}'}"><font-awesome-icon icon="minus"/></nuxt-link></td> -->
          <td><nuxt-link :to="{ name: 'customers-edit-id', params: { id: c.Id } }"><font-awesome-icon icon="edit"/></nuxt-link> <nuxt-link :to="{name: 'customers-delete-id', params: { id: c.Id }}"><font-awesome-icon icon="minus"/></nuxt-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  asyncData() {
    return axios
      .get(`http://127.0.0.1:3333/customers`)
      .then(res => {
        return { customers: res.data };
      });
  }
};
</script>
