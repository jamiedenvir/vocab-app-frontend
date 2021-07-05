<template>
  <div class="examples-new">
    <!-- display word from words index -->
    <h1>{{ this.word.example }}</h1>
    <!-- prompts -->

    <div v-for="prompt in prompts" v-bind:key="prompt.id">
      <h2 v-if="prompt.image_url === null">
        {{ prompt.text }}
      </h2>
      <h2 v-else>
        <img class="image" :src="prompt.image_url" alt="" />
      </h2>
    </div>
    <!-- prompt randomizer -->
    <!-- <p>{{ randomPrompt }}</p>
    <button @click="promptRandomizer()">Get Prompt</button> -->

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
    // axios.get(`/words/${this.$route.word}`).then((response) => {
    //   console.log("Words", response.data);
    //   this.word = response.data;
    // });
    axios.get("/prompts").then((response) => {
      console.log("Prompts array", response.data);
      this.prompts = response.data;
    });
  },
  methods: {
    createExample: function () {
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
    // promptRandomizer: function () {
    //   var chosenNumber = Math.floor(Math.random() * this.prompts.length);
    //   this.randomPrompt = this.list[chosenNumber];
    // },
  },
};
</script>
