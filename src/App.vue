<template>
  <div id="app">
    <header class="header header-transparent default header-sticky-dark">
      <nav class="navbar navbar-static-top navbar-expand-lg header-sticky justify-content-between">
        <!-- ****come up with logo to put here**** -->
        <router-link class="navbar-brand" to="/">
          <div class="nav navbar-nav">
            <h5 id="my-icon">Use</h5>
            <h3 id="my-icon-2">Your</h3>
            <h1 id="my-icon-3">Words</h1>
            <!-- <img class="img-fluid logo" src="/images/UYWLogo1.svg" alt="logo" /> -->
          </div>
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
        <!-- ***My Nav Bar*** -->

        <div class="list-unstyled" id="navbarmenu">
          <ul class="nav navbar-nav" id="header-color-custom">
            <li v-if="isLoggedIn()" class="nav-item">
              <router-link class="nav-link" id="my-icon-3" to="/words">Use A New Word</router-link>
            </li>
            <li v-if="isLoggedIn()" class="nav-item">
              <router-link class="nav-link" id="my-icon-2" to="/examples">My Examples</router-link>
            </li>
            <li v-if="isLoggedIn()" class="nav-item">
              <router-link class="nav-link" id="my-icon" :to="`/users/${getUserId()}`">My Profile</router-link>
            </li>
            <li v-if="isLoggedIn()" class="nav-item">
              <router-link class="nav-link" to="/logout">Logout</router-link>
            </li>
            <li v-if="!isLoggedIn()" class="nav-item">
              <router-link class="nav-link" to="/login">Log In</router-link>
            </li>
            <li v-if="!isLoggedIn()" class="nav-item">
              <router-link class="nav-link" to="/signup">Sign Up</router-link>
            </li>
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
    </header>
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
