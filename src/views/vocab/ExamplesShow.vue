<template>
  <div class="examples-show">
    <section class="o-hidden position-relative pt-5">
      <div class="container">
        <div class="row no-gutters justify-content-center">
          <div>
            <header class="header header-transparent default header-sticky-dark" id="center-text">
              <nav
                class="navbar navbar-static-top navbar-expand-lg header-sticky justify-content-between"
                id="custom-padding"
              >
                <h1 class="display-1" id="my-icon-3">
                  <span class="display-6" id="my-icon-4"></span>
                  ___{{ example.word }}
                  <span class="display-6" id="my-icon-4"></span>
                  <h6 id="my-icon-2">({{ wordData.lexical_category }})</h6>
                </h1>
              </nav>
            </header>
          </div>
          <div class="col-lg-9 blog-single">
            <div>
              <!-- <h1 class="display-1" id="my-icon-3">{{ example.word }}</h1>
              <h4 id="my-icon-2">{{ wordData.lexical_category }}</h4> -->
            </div>

            <div>
              <p id="you-wrote-3">{{ wordData.definition[0] }}</p>
              <br />
            </div>
            <br />
            <br />

            <span id="center-text">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h3 id="my-icon">YOUR PROMPT:</h3>
              <div v-if="example.prompt.image_url === null">
                <h3>{{ example.prompt.text }}</h3>
              </div>

              <div v-else>
                <img class="image" :src="example.prompt.image_url" alt="" id="custom-button" />
              </div>
            </span>

            <span id="center-text">
              <br />
              <div v-if="!showEdit">
                <br />
                <h5 class="display-3" id="my-icon-2">YOUR WORK:</h5>
                <h2 id="you-wrote-3">{{ example.sentence }}</h2>
                <br />
              </div>

              <!-- edit example sentence  -->

              <span>
                <div v-if="!showEdit">
                  <button v-on:click="showEdit = !showEdit" id="custom-button-3">
                    Edit/Delete Your Example Sentence
                  </button>
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
                    <input type="submit" class="btn btn-primary" value="Submit" id="custom-button-4" />
                    <br />
                    <br />
                    <button v-on:click="destroyExample()" id="custom-button-5">Delete Example</button>
                  </form>
                </div>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
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

          this.$router.go();
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
