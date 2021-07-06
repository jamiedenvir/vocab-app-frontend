<template>
  <div class="examples-new">
    <!-- display word from words index -->
    <h1 id="word-new">{{ word }}</h1>
    <h4>{{ wordData.lexical_category }}</h4>
    <h2>Definition: {{ wordData.definition[0] }}</h2>
    <h2>Etymologies: {{ wordData.etymologies[0] }}</h2>
    <h2>Synonyms:</h2>
    <h3>{{ wordData.synonyms[0] }}</h3>
    <h3>{{ wordData.synonyms[1] }}</h3>
    <h3>{{ wordData.synonyms[2] }}</h3>
    <h3>{{ wordData.synonyms[3] }}</h3>

    <!-- prompts -->

    <h2 v-if="randomPrompt.image_url === null">
      {{ randomPrompt.text }}
    </h2>
    <h2 v-else>
      <img class="image" :src="randomPrompt.image_url" alt="" />
    </h2>
    <button v-on:click="getRandomPrompt()">New Prompt</button>

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
#word-new {
  font-size: 100px;
  color: rgb(243, 137, 137);
  font-family: monospace;
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
      // example: [],
      wordData: {},
    };
  },
  created: function () {
    // axios.get("/examples").then((response) => {
    //   console.log("Examples array", response.data);
    //   this.examples = response.data;
    // });
    // this.getRandomPrompt();
    axios.get("/prompts").then((response) => {
      console.log("Prompts array", response.data);
      this.prompts = response.data;
    });

    axios.get(`/worddata/${this.$route.query.word}`).then((response) => {
      console.log("Word data", response.data);
      this.wordData = response.data;
    });

    this.word = this.$route.query.word;
  },
  methods: {
    createExample: function () {
      this.newExampleParams.word = this.word;
      this.newExampleParams.prompt_id = this.randomPrompt.id;
      console.log(this.newExampleParams);
      var params = {
        word: this.word,
        prompt_id: this.randomPrompt.id,
        sentence: this.newExampleParams.sentence,
      };
      axios
        .post("/examples", params)
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
