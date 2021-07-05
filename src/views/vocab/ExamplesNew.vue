<template>
  <div class="examples-new">
    <!-- display word from words index -->
    <h1>{{ word }}</h1>
    <!-- prompts -->

    <h2 v-if="randomPrompt.image_url === null">
      {{ randomPrompt.text }}
    </h2>
    <h2 v-else>
      <img class="image" :src="randomPrompt.image_url" alt="" />
    </h2>
    <button v-on:click="getRandomPrompt()">New Prompt</button>
    <!-- {{ getRandomPrompt() }} -->

    <!-- create example -->
    <form v-on:submit.prevent="createExample()">
      <h1>New Example</h1>
      <!-- error handling -->
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <!-- new sentence form -->
      <div class="form-group">
        <label>Sentence:</label>
        <input type="text" class="form-control" v-model="newExampleParams.sentence" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <h1>{{ newExampleParams }}</h1>
  </div>
</template>

<style>
.text-danger {
  color: red;
}
.image {
  width: 350px;
  height: auto;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newExampleParams: {},
      word: "",
      errors: [],
      prompts: [],
      randomPrompt: "",
    };
  },
  created: function () {
    axios.get("/prompts").then((response) => {
      console.log("Prompts array", response.data);
      this.prompts = response.data;
      this.getRandomPrompt();
    });
    this.word = this.$route.query.word;
  },
  methods: {
    createExample: function () {
      this.newExampleParams.word = this.word;
      this.newExampleParams.prompt_id = this.randomPrompt.id;

      axios
        .post("/examples", this.newExampleParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/examples");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
        });
    },
    getRandomPrompt: function () {
      this.randomPrompt = this.prompts[Math.floor(Math.random() * this.prompts.length)];
      console.log(this.randomPrompt);
    },
  },
};
</script>
