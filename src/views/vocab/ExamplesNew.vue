<template>
  <div class="examples-new">
    <form v-on:submit.prevent="createExample()">
      <h1>New Example</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Sentence:</label>
        <input type="text" class="form-control" v-model="newExampleParams.sentence" />
      </div>

      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <!-- newExampleParams: {{ newExampleParams }} -->
    <!-- <p>
      Current logged in user: {{ typeof $parent.getUserId() }}
      {{ $parent.getUserId() }}
    </p> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newExampleParams: {},
      errors: [],
    };
  },
  created: function () {
    // axios.get(`/examples/${this.$route.params.id}`).then((response) => {
    //   console.log("Examples array", response.data);
    //   this.post = response.data;
    // });
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
  },
};
</script>
