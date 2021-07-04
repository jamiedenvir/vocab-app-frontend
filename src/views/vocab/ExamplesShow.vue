<template>
  <div class="examples-show">
    <h5>(examples show page)</h5>
    <h1 id="word">{{ example.word }}</h1>

    <h3>YOUR PROMPT:</h3>
    <div>
      <h2 v-if="example.prompt.image_url === null">
        {{ example.prompt.text }}
      </h2>
      <h2 v-else>
        <img class="image" :src="example.prompt.image_url" alt="" />
      </h2>
    </div>

    <h3>YOUR SENTENCE:</h3>
    <h2>{{ example.sentence }}</h2>
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
#word {
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
    };
  },
  created: function () {
    axios.get(`/examples/${this.$route.params.id}`).then((response) => {
      console.log("Example object", response.data);
      this.example = response.data;
    });
  },
  methods: {},
};
</script>
