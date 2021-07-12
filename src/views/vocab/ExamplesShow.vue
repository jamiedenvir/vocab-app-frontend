<template>
  <div class="examples-show">
    <section class="o-hidden position-relative pt-5">
      <div class="container">
        <div class="row no-gutters justify-content-center bg-white">
          <div class="col-lg-9 blog-single">
            <div>
              <h1 id="word-new">{{ example.word }}</h1>
              <h4>{{ wordData.lexical_category }}</h4>
            </div>
            <br />
            <h2>Definition:</h2>

            <p>{{ wordData.definition[0] }}</p>

            <!-- <button v-on:click="wordInfo()">Show/Hide Definition</button> -->

            <!-- <div v-if="wordData">
      <h4>{{ wordData.lexical_category }}</h4>
      <h2>{{ wordData.definition[0] }}</h2>
    </div>
    <br /> -->
            <br />
            <h3>YOUR PROMPT:</h3>
            <div v-if="example.prompt.image_url === null">
              <h3>{{ example.prompt.text }}</h3>
            </div>

            <div v-else>
              <img class="image" :src="example.prompt.image_url" alt="" />
            </div>

            <br />
            <div v-if="!showEdit">
              <h3>YOUR SENTENCE:</h3>
              <h2>{{ example.sentence }}</h2>
            </div>

            <!-- edit example sentence  -->
            <span>
              <div v-if="!showEdit">
                <button v-on:click="showEdit = !showEdit">Edit/Delete Your Example Sentence</button>
              </div>
              <div v-if="showEdit">
                <form v-on:submit.prevent="updateExample()">
                  <ul>
                    <li class="text-danger" v-for="error in errors" v-bind:key="error">
                      {{ error }}
                    </li>
                  </ul>
                  <div class="form-group">
                    <label>Make Changes to Your Example Sentence:</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="example.sentence"
                      placeholder="Edit Your Sentence Here"
                    />
                  </div>
                  <input type="submit" class="btn btn-primary" value="Submit" />
                  <br />
                  <br />
                  <button v-on:click="destroyExample()">Delete Example</button>
                </form>
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
    <div>
      <h1 id="word-show">{{ example.word }}</h1>
      <h4>{{ wordData.lexical_category }}</h4>
    </div>
    <br />
    <h2>Definition:</h2>

    <p>{{ wordData.definition[0] }}</p>

    <!-- <button v-on:click="wordInfo()">Show/Hide Definition</button> -->

    <!-- <div v-if="wordData">
      <h4>{{ wordData.lexical_category }}</h4>
      <h2>{{ wordData.definition[0] }}</h2>
    </div>
    <br /> -->
    <br />
    <h3>YOUR PROMPT:</h3>
    <div v-if="example.prompt.image_url === null">
      <h3>{{ example.prompt.text }}</h3>
    </div>

    <div v-else>
      <img class="image" :src="example.prompt.image_url" alt="" />
    </div>

    <br />
    <div v-if="!showEdit">
      <h3>YOUR SENTENCE:</h3>
      <h2>{{ example.sentence }}</h2>
    </div>

    <!-- edit example sentence  -->
    <span>
      <div v-if="!showEdit">
        <button v-on:click="showEdit = !showEdit">Edit/Delete Your Example Sentence</button>
      </div>
      <div v-if="showEdit">
        <form v-on:submit.prevent="updateExample()">
          <ul>
            <li class="text-danger" v-for="error in errors" v-bind:key="error">
              {{ error }}
            </li>
          </ul>
          <div class="form-group">
            <label>Make Changes to Your Example Sentence:</label>
            <input type="text" class="form-control" v-model="example.sentence" placeholder="Edit Your Sentence Here" />
          </div>
          <input type="submit" class="btn btn-primary" value="Submit" />
          <br />
          <br />
          <button v-on:click="destroyExample()">Delete Example</button>
        </form>
      </div>
    </span>
  </div>
</template>

<style>
/* .text-danger {
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
} */
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      example: {},
      errors: [],
      wordData: {},
      showEdit: false,
      // word: "",
    };
  },
  created: function () {
    axios.get(`/examples/${this.$route.params.id}`).then((response) => {
      console.log("Example object", response.data);
      this.example = response.data;
      axios.get(`/worddata/${this.example.word}`).then((response) => {
        console.log("Word data", response.data);
        this.wordData = response.data;
      });
    });

    this.word = this.$route.query.word;

    // this.word = this.$route.query.word;
  },
  methods: {
    updateExample: function () {
      var params = {
        sentence: this.example.sentence,
      };
      axios
        .patch(`/examples/${this.example.id}`, params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/examples");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyExample: function () {
      if (confirm("Are you sure you want to delete your example?")) {
        axios
          .delete(`/examples/${this.example.id}`)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/examples");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },
    // wordInfo: function () {
    //   axios.get(`/worddata/${this.example.word}`).then((response) => {
    //     console.log("Word data", response.data);
    //     this.wordData = response.data;
    //   });
    //   this.word = this.$route.query.word;
    // },
  },
};
</script>
