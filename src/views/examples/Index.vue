<template>
  <div class="examples-index">
    <h1>All Examples</h1>
    <div v-for="example in examples" v-bind:key="example.id">
      <h2>{{ example.sentence }}</h2>
      <!-- <img v-bind:src="photo.url" v-bind:alt="photo.name" />
      <p>Width: {{ photo.width }}</p>
      <p>Height: {{ photo.height }}</p> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      examples: [],
    };
  },
  created: function () {
    this.indexExamples();
  },
  methods: {
    indexExamples: function () {
      axios.get("/examples").then((response) => {
        console.log("examples index", response);
        this.examples = response.data;
      });
    },
  },
};
</script>
