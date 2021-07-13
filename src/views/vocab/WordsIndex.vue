<template>
  <div class="words-index">
    <section class="space-ptb">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row mt-4">
              <div class="nav navbar-nav" id="center-text">
                <h5 class="display-1">
                  <span id="my-icon">Click</span>

                  <span id="my-icon-2">A</span>
                  <span id="my-icon-3">Word</span>
                </h5>
                <!-- <h3 class="display-1" id="my-icon-2">A</h3> -->
                <!-- <h1 class="display-1" id="my-icon-3">Word</h1> -->
                <!-- <img class="img-fluid logo" src="/images/UYWLogo1.svg" alt="logo" /> -->
              </div>
              <div v-for="(word, index) in words" v-bind:key="word" class="col-md-6 col-lg-4 col-sm-6 mb-5">
                <div class="space-ptb">
                  <div class="product">
                    <div class="product-image">
                      <router-link :to="`/examples/new?word=${word}`">
                        <h1 v-bind:style="{ color: colors[index % colors.length], backgroundColor: '' }">
                          {{ word }}
                        </h1>
                        <!-- <div class="product-overlay">
                        <div class="add-to-cart"> -->

                        <!-- <span>Use it!</span> -->
                      </router-link>
                      <!-- </div>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="col-md-6 col-lg-4 col-sm-6 mb-5 mb-lg-0">
                <div class="product">
                  <div class="product-image">
                    <img class="img-fluid mx-auto" src="images/shop/product/07.jpg" alt="" />
                    <div class="product-overlay">
                      <div class="add-to-cart">
                        <a href="shop-cart.html"><span>add to cart</span></a>
                      </div>
                    </div>
                  </div>
                  <div class="product-description">
                    <div class="product-title">
                      <a href="shop-single.html">Amazon Brand - Solimo</a>
                    </div>
                    <div class="product-price">
                      <del>$25.99</del>
                      <ins>$10.49</ins>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-sm-6">
                <div class="product">
                  <div class="product-image">
                    <img class="img-fluid mx-auto" src="images/shop/product/08.jpg" alt="" />
                    <div class="product-overlay">
                      <div class="add-to-cart">
                        <a href="shop-cart.html"><span>add to cart</span></a>
                      </div>
                    </div>
                  </div>
                  <div class="product-description">
                    <div class="product-title">
                      <a href="shop-single.html">Ugaoo Areca Palm</a>
                    </div>
                    <div class="product-price">
                      <del>$20.00</del>
                      <ins>$15.00</ins>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="space-ptb">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row mt-4">
              <h1>Click on a word to Use It</h1>
              <div v-for="(word, index) in words" v-bind:key="word" class="col-md-6 col-lg-4 col-sm-6 mb-5">
                <div class="space-ptb">
                  <div class="product">
                    <div class="product-image">
                      <h1 v-bind:style="{ color: colors[index % colors.length], backgroundColor: 'gold' }">
                        {{ word }}
                      </h1>
                      <div class="product-overlay">
                        <div class="add-to-cart">
                          <router-link :to="`/examples/new?word=${word}`">
                            <span>Use it!</span>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->

    <!-- <div class="col-md-6 col-lg-4 col-sm-6 mb-5 mb-lg-0">
                <div class="product">
                  <div class="product-image">
                    <img class="img-fluid mx-auto" src="images/shop/product/07.jpg" alt="" />
                    <div class="product-overlay">
                      <div class="add-to-cart">
                        <a href="shop-cart.html"><span>add to cart</span></a>
                      </div>
                    </div>
                  </div>
                  <div class="product-description">
                    <div class="product-title">
                      <a href="shop-single.html">Amazon Brand - Solimo</a>
                    </div>
                    <div class="product-price">
                      <del>$25.99</del>
                      <ins>$10.49</ins>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-4 col-sm-6">
                <div class="product">
                  <div class="product-image">
                    <img class="img-fluid mx-auto" src="images/shop/product/08.jpg" alt="" />
                    <div class="product-overlay">
                      <div class="add-to-cart">
                        <a href="shop-cart.html"><span>add to cart</span></a>
                      </div>
                    </div>
                  </div>
                  <div class="product-description">
                    <div class="product-title">
                      <a href="shop-single.html">Ugaoo Areca Palm</a>
                    </div>
                    <div class="product-price">
                      <del>$20.00</del>
                      <ins>$15.00</ins>
                    </div>
                  </div>
                </div>
              </div> -->
    <!-- </div>
          </div>
        </div>
      </div>
    </section> -->
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
        "blight",
        "bonhomie",
        "bowdlerize",
        "brogue",
        "cadence",
        "caprice",
        "clamorous",
        "cloying",
        "codependence",
        "comity",
        "congenital",
        "contretemps",
        "cosset",
        "coy",
        "de rigueur",
        "deluge",
        "denizen",
        "denuded",
        "deride",
        "diegetic",
        "discursive",
        "disquiet",
        "dissemble",
        "diurnal",
        "doleful",
        "effectuate",
        "egest",
        "ersatz",
        "fledgling",
        "homogeneous",
        "impugn",
        "incongruous",
        "inchoate",
        "inscribe",
        "inundate",
        "metaphysics",
        "ontology",
        "phenomenology",
        "proliferate",
        "purloin",
        "subsume",
        "svelte",
      ],

      itemList: ["Item A", "Item B", "Item C", "Item D", "Item E"],
      colors: ["#f2c7bb", "#cdd2d9", "#a3a6c2", "#c9ded3"],
    };
  },
  created: function () {},
  methods: {},
};
</script>
