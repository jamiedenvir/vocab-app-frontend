<template>
  <div class="examples-new">
    <section class="o-hidden position-relative">
      <div class="container">
        <div class="row no-gutters">
          <div class="blog-post-image">
            <div>
              <header class="header header-transparent default header-sticky-dark" id="center-text">
                <nav
                  class="navbar navbar-static-top navbar-expand-lg header-sticky justify-content-between"
                  id="center-text"
                >
                  <h1 class="display-1" id="my-icon-2">
                    <span class="display-6" id="my-icon">↓</span>
                    _{{ word }}_
                    <span class="display-6" id="my-icon">↓</span>
                    <h6 id="my-icon-2">({{ wordData.lexical_category }})</h6>
                  </h1>
                </nav>
              </header>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="space-ptb">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row">
              <div class="col-lg-6">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 class="display-1" id="my-icon-4">↓</h1>
                <br />
                <div>
                  <h6 class="display-6" id="my-icon-2">
                    Use this prompt...(or click for a new one)
                    <span class="display-1" id="my-icon-4">→</span>
                  </h6>
                  <br />
                  <div v-on:click="getRandomPrompt()" id="custom-button-2">
                    <h2 v-if="randomPrompt.image_url === null" class="custom-center-2">
                      {{ randomPrompt.text }}
                    </h2>
                    <h2 v-else>
                      <img class="image" :src="randomPrompt.image_url" alt="" />
                    </h2>
                    <br />
                  </div>

                  <!-- create example -->
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mt-5 mt-lg-0">
            <div class="my-4 d-flex align-items-center">
              <h1 class="display-1" id="my-icon-4">→</h1>
              <form v-on:submit.prevent="createExample()">
                <br />

                <!-- error handling -->
                <ul>
                  <li class="text-danger" v-for="error in errors" v-bind:key="error">
                    {{ error }}
                  </li>
                </ul>
                <!-- new sentence form -->
                <br />
                <div class="form-group">
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
                  <label class="display-6" id="my-icon-4">...To Use Your Word...</label>
                  <textarea
                    type="text"
                    class="form-control"
                    v-model="newExampleParams.sentence"
                    placeholder="...here!"
                  />
                </div>
                <input type="submit" value="Submit" id="custom-button" />
              </form>
            </div>
            <br />
            <div class="blog-sidebar sidebar border">
              <div>
                <div>
                  <button v-on:click="showDef = !showDef" id="custom-button">Definition</button>

                  <div v-if="showDef">
                    <h6 class="display-7" id="my-icon-2">{{ wordData.definition[0] }}</h6>
                  </div>
                </div>

                <div>
                  <button v-on:click="showSyn = !showSyn" id="custom-button">Synonyms</button>

                  <div v-if="showSyn">
                    <h6 class="display-7" id="my-icon-2">
                      {{ wordData.synonyms[0] }}, {{ wordData.synonyms[1] }}, {{ wordData.synonyms[2] }},
                      {{ wordData.synonyms[3] }}
                    </h6>
                  </div>
                </div>

                <button v-on:click="showSentence = !showSentence" id="custom-button">Example Sentence</button>

                <div v-if="showSentence">
                  <h6 id="my-icon-2">{{ wordData.example_sentence }}</h6>
                </div>
              </div>
              <h1 class="display-6" id="my-icon-2">Still Learnin' the Word?</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
/* body {
  background: "word";
} */
/* .text-danger {
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
} */
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
      // prompt: this.randomPrompt,
      randomPrompt: "",
      // example: [],
      wordData: {},
      showDef: false,
      showSyn: false,

      showSentence: false,
    };
  },
  created: function () {
    // axios.get("/examples").then((response) => {
    //   console.log("Examples array", response.data);
    //   this.examples = response.data;
    // });
    // this.getRandomPrompt;
    axios.get("/prompts").then((response) => {
      console.log("Prompts array", response.data);
      this.prompts = response.data;
      this.getRandomPrompt();
    });

    // ***UN-COMMENT!*****
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
