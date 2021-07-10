<template>
  <div id="app">
    <nav class="navbar navbar-static-top navbar-expand-lg header-sticky justify-content-between">
      <!-- ****come up with logo to put here**** -->
      <router-link class="navbar-brand" to="/">
        <img class="img-fluid logo" src="/images/UYWLogo1.svg" alt="logo" />
      </router-link>

      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarmenu"
        aria-controls="navbarmenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-align-left"></i>
      </button> -->
      <div class="list-unstyled" id="navbarmenu">
        <ul class="nav navbar-nav">
          <li class="nav-item"><a class="nav-link" href="about-us.html">About Us</a></li>
          <li class="nav-item"><a class="nav-link" href="contact-us.html">Contact Us</a></li>
        </ul>
      </div>
      <!-- <div class="social">
        <ul class="list-unstyled">
          <li>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-pinterest-p"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </li>
          <li>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </li>
        </ul>
      </div> -->

      <!-- <div class="search">
        <ul class="pl-0">
          <li class="dropdown nav-item header-search">
            <a href="#search"><i class="fa fa-search"></i></a>
          </li>
        </ul>
      </div> -->
    </nav>

    <div id="nav">
      <router-link to="/">Home</router-link>

      <div v-if="isLoggedIn()">
        <router-link to="/logout">Logout</router-link>
        <br />
        <router-link to="/words">Pick A New Vocab Word</router-link>
        <br />
        <router-link to="/examples">My Examples</router-link>
      </div>
      <div v-if="!isLoggedIn()" class="cta">
        <router-link to="/signup">Signup</router-link>
      </div>
      <div v-if="!isLoggedIn()">
        <router-link to="/login">Login</router-link>
      </div>
    </div>
    <!-- <div v-if="isLoggedIn()">
      <router-link to="/words">Pick A New Vocab Word</router-link>
    </div>
    <div v-if="isLoggedIn()">
      <router-link to="/examples">My Examples</router-link>
    </div> -->

    <router-link v-if="isLoggedIn()" :to="`/users/${getUserId()}`">My Profile</router-link>

    <router-view />
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      flashMessage: "",
    };
  },
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
    getUserId: function () {
      return localStorage.user_id;
    },
  },
};
</script>
