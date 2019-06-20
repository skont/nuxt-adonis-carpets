<template>
<h1>you are about to delete Customer: {{id}} </h1>
</template>

<script>
import axios from "axios";

export default {
        data () {
            return {
                id: this.$route.params.id
            }
        }
    
};
</script>