<template>
  <div class="words-index">
    <section class="space-ptb">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="row mt-4">
              <div v-for="word in words" v-bind:key="word" class="col-md-6 col-lg-4 col-sm-6 mb-5">
                <div class="space-ptb">
                  <div class="product">
                    <div class="product-image">
                      <h1>{{ word }}</h1>
                      <div class="product-overlay">
                        <div class="add-to-cart">
                          <router-link :to="`/examples/new?word=${word}`">
                            <span>Use {{ word }}</span>
                          </router-link>
                        </div>
                      </div>
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
