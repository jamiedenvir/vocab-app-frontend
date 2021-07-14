<template>
  <div class="login">
    <section class="o-hidden position-relative pt-5">
      <div class="container">
        <div class="row no-gutters justify-content-center">
          <div class="col-lg-9 blog-single">
            <form v-on:submit.prevent="submit()">
              <h1 class="display-1" id="my-icon-3">⇣Login_</h1>
              <br />
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <div>
                <label id="my-icon-3">Email______</label>
                <input type="email" v-model="email" />
              </div>
              <div>
                <label id="my-icon-3">Password________</label>
                <input type="password" v-model="password" />
                <br />
              </div>
              <br />
              <br />
              <input type="submit" value="Submit" id="custom-button-3" />
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          console.log(response.data);
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/words");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
