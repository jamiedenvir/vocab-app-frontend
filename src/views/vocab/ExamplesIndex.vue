<template>
  <div class="examples-index">
    <h1>My Examples</h1>
    <!-- <h2>{{ user.name }}</h2> -->
    <div v-for="example in examples" v-bind:key="example.id">
      <router-link :to="`examples/${example.id}`">
        <h2>{{ example.word }}</h2>
        <div>
          <h2 v-if="example.prompt.image_url === null">
            {{ example.prompt.text }}
          </h2>
          <h2 v-else>
            <img class="image" :src="example.prompt.image_url" alt="" />
          </h2>
        </div>
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
      // user: {},
    };
  },
  created: function () {
    axios.get("/examples").then((response) => {
      console.log("Examples array", response.data);
      this.examples = response.data;
    });
    // axios.get(`/users/${this.$route.params.id}`).then((response) => {
    //   console.log("User object", response.data);
    //   this.user = response.data;
    // });
  },
  methods: {
    // userName: function () {
    //   axios.get(`/users/${this.$route.params.id}`).then((response) => {
    //     console.log("User object", response.data);
    //     this.user.id = response.data;
    //   });
    // },
  },
};
</script>
