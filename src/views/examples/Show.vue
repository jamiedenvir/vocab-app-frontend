<template>
  <div class="examples-show">
    <!-- <h2>{{ photo.name }}</h2> -->
    <!-- <img v-bind:src="photo.url" v-bind:alt="photo.name" />
    <p>Width: {{ photo.width }}</p>
    <p>Height: {{ photo.height }}</p>
    <router-link to="/photos">Back to all photos</router-link> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      example: {
        sentence: "",
        word: "",
      },
    };
  },
  created: function () {
    axios.get("/examples/" + this.$route.params.id).then((response) => {
      console.log("examples show", response);
      this.example = response.data;
    });
  },
  methods: {},
};
</script>
