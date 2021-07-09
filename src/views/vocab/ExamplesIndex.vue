<template>
  <div class="examples-index">
    <h1>My Examples</h1>
    <!-- <h2>{{ user.name }}</h2> -->

    <!-- sort alphabetically -->

    <div>
      <button v-on:click="setSortAttribute('example')" class="btn btn-success">
        Sort by title
        <span v-if="sortAttribute === 'example' && sortOrder === 1">^</span>
        <span v-if="sortAttribute === 'example' && sortOrder === -1">v</span>
      </button>
      <div v-for="example in orderBy(examples, 'word')" v-bind:key="example.id">
        <router-link :to="`examples/${example.id}`">
          <h2>{{ example.word }}</h2>
          <h2>{{ example.current_user }}</h2>
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

    <!-- <div v-for="example in examples" v-bind:key="example.id">
      <router-link :to="`examples/${example.id}`">
        <h2>{{ example.word }}</h2>
        <h2>{{ example.current_user }}</h2>
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
    </div> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      examples: [],
      sortAttribute: "word",
      sortOrder: 1,

      user: {},
      // sortAttribute: this.example.word,
      // sortOrder: 1,
    };
  },
  created: function () {
    axios.get("/examples").then((response) => {
      console.log("Examples array", response.data);
      this.examples = response.data;
    });

    // axios.get(`/users/${this.user_id}`).then((response) => {
    //   console.log("User object", response.data);
    //   this.user = response.data;
    // });

    // axios.get(`/users/${this.$route.params.id}`).then((response) => {
    //   console.log("User object", response.data);
    //   this.user = response.data;
    // });
  },
  methods: {
    setSortAttribute: function (attribute) {
      if (this.sortAttribute === attribute) {
        this.sortOrder = this.sortOrder * -1;
      } else {
        this.sortOrder = 1;
        this.sortAttribute = attribute;
      }
    },
  },
};
</script>
