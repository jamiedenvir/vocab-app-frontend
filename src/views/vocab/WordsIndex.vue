<template>
  <div class="words-index">
    <h1>Vocab Words</h1>
    <div v-for="word in words" v-bind:key="word">
      <router-link :to="`/examples/new?word=${word}`">
        <h2>{{ word }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data: function () {
    return {
      words: [
        "abase",
        "abate",
        "aberration",
        "abjure",
        "abnegate",
        "abound",
        "abrade",
        "abrogate",
        "amenable",
        "bacchanal",
        "baleful",
        "behoove",
        "besmirch",
      ],
    };
  },
  created: function () {},
  methods: {},
};
</script>
