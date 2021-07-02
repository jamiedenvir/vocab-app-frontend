<template>
  <div class="examples-show">
    <h1>Examples Show</h1>
    <h2>{{ example.word }}</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      // example: {
      //   sentence: "",
      //   word: "",
      // },
    };
  },
  created: function () {
    axios.get(`/examples/this.$route.params.id`).then((response) => {
      console.log("Example object", response);
      this.example = response.data;
    });
  },
  methods: {},
};
</script>
