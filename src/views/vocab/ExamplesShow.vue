<template>
  <div class="examples-show">
    <h1>Examples Show</h1>
    <h2>{{ example.word }}</h2>
    <h3>YOUR PROMPT: {{ example.prompt }}</h3>
    <img v-bind:src="example.prompt.image_url" v-bind:alt="example.word" />
    <h2>{{ example.sentence }}</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      example: {},
    };
  },
  created: function () {
    axios.get(`/examples/${this.$route.params.id}`).then((response) => {
      console.log("Example object", response.data);
      this.example = response.data;
    });
  },
  methods: {},
};
</script>
