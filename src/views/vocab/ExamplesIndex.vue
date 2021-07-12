<template>
  <div class="examples-index">
    <section class="space-ptb">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row mt-4">
              <div
                v-for="example in orderBy(examples, 'word')"
                v-bind:key="example.id"
                class="col-md-6 col-lg-4 col-sm-6 mb-5"
              >
                <div class="space-ptb">
                  <div class="product">
                    <div class="product-image">
                      <h1>{{ example.word }}</h1>
                      <h2 v-if="example.prompt.image_url === null">
                        {{ example.prompt.text }}
                      </h2>
                      <h2 v-else>
                        <img class="image" :src="example.prompt.image_url" alt="" />
                      </h2>
                      <div class="product-overlay">
                        <div class="add-to-cart">
                          <router-link :to="`examples/${example.id}`">
                            <span>{{ example.word }}</span>

                            <!-- <div>
                              <h2 v-if="example.prompt.image_url === null">
                                {{ example.prompt.text }}
                              </h2>
                              <h2 v-else>
                                <img class="image" :src="example.prompt.image_url" alt="" />
                              </h2>
                            </div> -->
                            <p>
                              Your Sentence
                              <br />
                              {{ example.sentence }}
                            </p>
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
