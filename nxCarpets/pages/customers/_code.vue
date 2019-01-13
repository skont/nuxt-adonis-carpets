<template>
    <div>
        {{Name}}
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
      return 
      axios.get('https://api.myjson.com/bins/xzkvs')
      .then((res) => res.data)
      }
}
</script>


// export default {
//   asyncData ({ params }) {
//     return axios.get(`https://my-api/posts/${params.id}`)
//     .then((res) => {
//       return { title: res.data.title }
//     })
//   }
// }