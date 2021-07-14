<template>
  <!-- <div class="examples-new"> -->
  <section class="o-hidden position-relative pt-5">
    <div class="container">
      <div class="row no-gutters justify-content-center">
        <div class="col-lg-9 blog-single">
          <h1 class="display-3" id="my-icon-2">{{ word }}</h1>
          <h6 id="my-icon-2">({{ wordData.lexical_category }})</h6>
          <div>
            <br />
            <h5>Still Learnin' the Word?</h5>
            <div id="new-box-background">
              <div id="custom-inline-display">
                <button v-on:click="showDef = !showDef" id="custom-button">Definition</button>

                <div v-if="showDef">
                  <h6 class="display-7" id="my-icon-2">{{ wordData.definition[0] }}</h6>
                </div>
              </div>

              <div id="custom-inline-display">
                <button
                  v-on:click="
                    showSyn = !showSyn;
                    !showDef;
                  "
                  id="custom-button"
                >
                  Synonyms
                </button>

                <div v-if="showSyn">
                  <div id="custom-inline-display">
                    <h6 class="display-7" id="my-icon-2">
                      {{ wordData.synonyms[0] }}, {{ wordData.synonyms[1] }}, {{ wordData.synonyms[2] }},
                      {{ wordData.synonyms[3] }}
                    </h6>
                  </div>
                </div>
              </div>

              <div id="custom-inline-display"></div>
              <br />
              <button v-on:click="showSentence = !showSentence" id="custom-button">Example Sentence</button>

              <div v-if="showSentence">
                <h6 id="my-icon-2">{{ wordData.example_sentence }}</h6>
              </div>
            </div>

            <!-- prompts -->
            <h6 class="display-7" id="my-icon-2">Use this prompt...(or click for a new one)</h6>
            <div v-on:click="getRandomPrompt()" id="custom-button-2">
              <h2 v-if="randomPrompt.image_url === null" class="custom-center-2" id="new-box-background-3">
                {{ randomPrompt.text }}
              </h2>
              <h2 v-else class="custom-center-2" id="new-box-background-3">
                <img class="image" :src="randomPrompt.image_url" alt="" />
              </h2>
              <br />
              <!-- <div class="custom-center-2">
                  <button v-on:click="getRandomPrompt()" id="custom-button">New Prompt</button>
                </div> -->
            </div>

            <!-- create example -->
            <form v-on:submit.prevent="createExample()">
              <br />

              <!-- error handling -->
              <ul>
                <li class="text-danger" v-for="error in errors" v-bind:key="error">
                  {{ error }}
                </li>
              </ul>
              <!-- new sentence form -->
              <div class="form-group">
                <label class="display-6" id="my-icon-4">...To Use Your Word...</label>
                <textarea type="text" class="form-control" v-model="newExampleParams.sentence" placeholder="...here!" />
              </div>
              <input type="submit" value="Submit" id="custom-button" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- </div> -->
</template>

<style>
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
