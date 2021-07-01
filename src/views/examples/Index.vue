<template>
  <div class="examples-index">
    <h1>All Examples</h1>
    <div v-for="example in examples" v-bind:key="example.id">
      <router-link :to="`views/examples/show/${example}`">
        <h2>{{ example.word }}</h2>
        <h3>YOUR PROMPT: {{ example.prompt.text }}</h3>
        <img v-bind:src="example.prompt.image_url" v-bind:alt="example.word" />
      </router-link>

      <p>{{ example.sentence }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      examples: [],
    };
  },
  created: function () {
    axios.get("/examples").then((response) => {
      console.log("Examples array", response.data);
      this.examples = response.data;
    });
  },
  methods: {},
};
</script>
