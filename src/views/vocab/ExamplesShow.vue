<template>
  <div class="examples-show">
    <h5>(examples show page)</h5>

    <h1 id="word-show">{{ example.word }}</h1>

    <h3>YOUR PROMPT:</h3>
    <div v-if="example.prompt.image_url === null">
      {{ example.prompt.text }}
    </div>

    <div v-else>
      <img class="image" :src="example.prompt.image_url" alt="" />
    </div>

    <h3>YOUR SENTENCE:</h3>
    <h2>{{ example.sentence }}</h2>

    <!-- edit example sentence  -->

    <form v-on:submit.prevent="updateExample()">
      <h1>Edit Example</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Sentence:</label>
        <input
          type="text"
          class="form-control"
          v-model="editExampleParams.sentence"
          placeholder="Edit Your Sentence Here"
        />
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
#word-show {
  font-size: 100px;
  color: rgb(205, 125, 232);
  font-family: monospace;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      example: {},
      editExampleParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/examples/${this.$route.params.id}`).then((response) => {
      console.log("Example object", response.data);
      this.example = response.data;
    });
  },
  methods: {
    updateExample: function () {
      axios
        .patch(`/examples/${this.editExampleParams.id}`, this.editExampleParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/examples/${response.data.id}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
