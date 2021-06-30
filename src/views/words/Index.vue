<template>
  <div class="words-index">
    <h1>Vocab Words</h1>
    <!-- <div v-for="photo in photos" v-bind:key="photo.id">
      <h2>{{ photo.name }}</h2>
      <img v-bind:src="photo.url" v-bind:alt="photo.name" />
      <p>Width: {{ photo.width }}</p>
      <p>Height: {{ photo.height }}</p>
    </div> -->
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data: function () {
    return {
      // words: [
      // abase,
      // abate,
      // aberration,
      // abjure,
      // abnegate,
      // abound,
      // abrade,
      // abrogate,
      // abscond,
      // accede,
      // acquiesce,
      // acumen,
      // affect,
      // affected,
      // affecting,
      // affable,
      // ],
    };
  },
  created: function () {
    // this.indexWords();
  },
  // methods: {
  //   indexWords: function () {
  //     axios.get("/words").then((response) => {
  //       console.log("words index", response);
  //       this.words = response.data;
  //     });
  //   },
  // },
};
</script>
