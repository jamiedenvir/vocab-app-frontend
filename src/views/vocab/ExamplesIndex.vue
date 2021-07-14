<template>
  <div class="examples-index">
    <section class="space-ptb">
      <h1 class="display-3" id="center-text">
        <span id="my-icon">My</span>
        <span id="my-icon-2">Writing</span>
        <span id="my-icon-3">(So Far)</span>
      </h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row mt-4">
              <div
                v-for="(example, index) in orderBy(examples, 'word')"
                v-bind:key="example.id"
                class="col-md-6 col-lg-4 col-sm-6 mb-5"
              >
                <span>
                  <div class="space-ptb">
                    <div class="product">
                      <div class="product-image">
                        <router-link :to="`examples/${example.id}`">
                          <div class="col-lg-6 mt-4" id="prompt-box-background">
                            <h1 v-bind:style="{ color: colors[index % colors.length], backgroundColor: '' }">
                              {{ example.word }}
                            </h1>
                            <h2
                              v-if="example.prompt.image_url === null"
                              v-bind:style="{ color: colors[(index % colors.length) - 1], backgroundColor: '' }"
                            >
                              <br />
                              {{ example.prompt.text }}
                            </h2>
                            <h2 v-else>
                              <img class="my-img" :src="example.prompt.image_url" alt="" id="image-fit" />
                            </h2>
                            <br />
                            <br />
                            <!-- <h3 id="you-wrote">I Wrote:</h3> -->

                            <h3 id="you-wrote-2">{{ example.sentence }}</h3>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </span>
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
    <!-- <h1>My Examples</h1>

    <div>
      <div v-for="example in orderBy(examples, 'word')" v-bind:key="example.id">
        <router-link :to="`examples/${example.id}`">
          <h2>{{ example.word }}</h2>

          <div>
            <h2 v-if="example.prompt.image_url === null">
              {{ example.prompt.text }}
            </h2>
            <h2 v-else>
              <img class="image" :src="example.prompt.image_url" alt="" />
            </h2>
          </div>
        </router-link>

        <p>{{ example.sentence }}</p>
      </div>
    </div> -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      examples: [],
      // sortAttribute: "word",
      // sortOrder: 1,

      user: {},
      // sortAttribute: this.example.word,
      // sortOrder: 1,
      colors: ["#f2c7bb", "#cdd2d9", "#a3a6c2", "#c9ded3"],
    };
  },
  created: function () {
    axios.get("/examples").then((response) => {
      console.log("Examples array", response.data);
      this.examples = response.data;
    });
  },
  methods: {
    // setSortAttribute: function (attribute) {
    //   if (this.sortAttribute === attribute) {
    //     this.sortOrder = this.sortOrder * -1;
    //   } else {
    //     this.sortOrder = 1;
    //     this.sortAttribute = attribute;
    //   }
    // },
  },
};
</script>
