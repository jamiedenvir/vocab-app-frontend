<template>
  <div class="words-index">
    <section class="space-ptb bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="blog-post blog-overlay mb-4">
              <div class="blog-image">
                <img class="img-fluid" src="images/photography/01.jpg" alt="" />
              </div>
              <div class="blog-name text-center px-2">
                <a class="btn btn-outline-light mb-3 tag" href="#">Travel</a>
                <h6 class="text-white">Supercharge your motivation</h6>
                <div class="blog-post-footer blog-post-categorise p-0">
                  <div class="blog-post-time">
                    <a href="#">
                      <i class="far fa-clock"></i>
                      25 Mar 2021
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog-post blog-overlay mb-4">
              <div class="blog-image">
                <img class="img-fluid" src="images/photography/03.jpg" alt="" />
              </div>
              <div class="blog-name text-center px-2">
                <a class="btn btn-outline-light mb-3 tag" href="#">inspiration</a>
                <h6 class="text-white">Helen keller a teller seller</h6>
                <div class="blog-post-footer blog-post-categorise p-0">
                  <div class="blog-post-time">
                    <a href="#">
                      <i class="far fa-clock"></i>
                      25 Mar 2021
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog-post blog-overlay mb-4">
              <div class="blog-image">
                <img class="img-fluid" src="images/photography/04.jpg" alt="" />
              </div>
              <div class="blog-name text-center px-2">
                <a class="btn btn-outline-light mb-3 tag" href="#">LIFESTYLE</a>
                <h6 class="text-white">Absorb Every Aspect Of This</h6>
                <div class="blog-post-footer blog-post-categorise p-0">
                  <div class="blog-post-time">
                    <a href="#">
                      <i class="far fa-clock"></i>
                      25 Mar 2021
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="blog-post blog-overlay mb-lg-0 mb-4">
              <div class="blog-image">
                <img class="img-fluid" src="images/photography/13.jpg" alt="" />
              </div>
              <div class="blog-name text-center px-2">
                <a class="btn btn-outline-light mb-3 tag" href="#">Travel</a>
                <h6 class="text-white">Does your life lack meaning</h6>
                <div class="blog-post-footer blog-post-categorise p-0">
                  <div class="blog-post-time">
                    <a href="#">
                      <i class="far fa-clock"></i>
                      25 Mar 2021
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
        "besmirch",
      ],
    };
  },
  created: function () {},
  methods: {},
};
</script>
