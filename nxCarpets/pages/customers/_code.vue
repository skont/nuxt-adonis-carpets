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
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in customers">
          <td>{{ c.Name }}</td>
          <td>{{c.Code}}</td>
          <td>{{c.Street}}, {{c.Zip}}, {{c.Area}}</td>
          <td>{{c.Phone}} / {{c.Mobile}}</td>
          </tr>
      </tbody>
    </table>
<!-- 
    <ul>
      <li v-for="c in customers">{{ c.Name }} - {{c.Code}}</li>
    </ul> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  asyncData({ params }) {
    return axios
      .get(`http://127.0.0.1:3333/customers/${params.code}`)
      .then(res => {
        return { customers: res.data };
      });
  }
};
</script>
