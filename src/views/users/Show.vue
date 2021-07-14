<template>
  <div class="users-show">
    <section class="o-hidden position-relative pt-5">
      <div class="container">
        <div class="row no-gutters justify-content-center">
          <div class="col-lg-9 blog-single">
            <div class="display-3" id="my-icon-3">
              <h5 class="display-1">
                <span class="display-5" id="my-icon">⇣</span>
                <span id="my-icon-2">{{ user.name }}'s/</span>

                <span id="my-icon-3">Profile</span>
                <span class="display-5" id="my-icon-4">⇣</span>
              </h5>
            </div>

            <br />

            <div>
              <br />
              <br />
              <br />
              <br />
              <h5>
                NAME」

                <h3 class="display-7" id="my-icon-3">
                  {{ user.name }}
                </h3>
                <br />
              </h5>
              <br />
              <h5>
                EMAIL」
                <h3 class="display-7" id="my-icon-2">{{ user.email }}</h3>
                <br />
              </h5>

              <br />
            </div>
            <br />

            <!-- edit user -->
            <span>
              <div v-if="!showEdit">
                <button v-on:click="showEdit = !showEdit" id="custom-button-4">Edit Your Info</button>
              </div>
              <div v-if="showEdit">
                <form v-on:submit.prevent="updateUser()">
                  <h1 class="display-6" id="my-icon-4">Edit User</h1>
                  <br />
                  <ul>
                    <li class="text-danger" v-for="error in errors" v-bind:key="error">
                      {{ error }}
                    </li>
                  </ul>
                  <div class="form-group">
                    <label id="my-icon-2">__Name</label>
                    <input type="text" class="form-control" v-model="user.name" placeholder="Name" />
                  </div>

                  <div class="form-group">
                    <label id="my-icon-2">___Email</label>
                    <input type="text" class="form-control" v-model="user.email" />
                  </div>
                  <div class="form-group">
                    <label id="my-icon-2">____Update Password</label>
                    <input type="password" class="form-control" v-model="user.password" />
                  </div>
                  <div class="form-group">
                    <label id="my-icon-2">_____Update Password Confirmation</label>
                    <input type="password" class="form-control" v-model="user.password_confirmation" />
                  </div>

                  <input type="submit" class="btn btn-primary" value="Submit" id="custom-button-4" />
                </form>
                <br />
              </div>
            </span>
            <!-- delete user -->
            <br />
            <button v-on:click="destroyUser()" id="custom-button-5">Delete Account</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
      errors: [],
      showEdit: false,
    };
  },
  created: function () {
    axios.get(`/users/${this.$route.params.id}`).then((response) => {
      console.log("User object", response.data);
      this.user = response.data;
    });
  },
  methods: {
    updateUser: function () {
      axios
        .patch(`/users/${this.user.id}`, this.user)
        .then((response) => {
          console.log("Edit User Object", response.data);
          this.$router.go();
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(this.errors);
        });
    },
    destroyUser: function () {
      if (confirm("Are you sure you want to delete your account?")) {
        axios
          .delete(`/users/${this.user.id}`)
          // .delete(`/users/${this.user.examples}`)
          .then((response) => {
            localStorage.removeItem("jwt");
            localStorage.removeItem("user_id");

            console.log(response.data);
            this.$router.push("/");
          })
          .catch((error) => {
            this.errors = error.response.data.errors;
          });
      }
    },
  },
};
</script>
