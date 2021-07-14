<template>
  <div class="users-show">
    <section class="o-hidden position-relative pt-5">
      <div class="container">
        <div class="row no-gutters justify-content-center">
          <div class="col-lg-9 blog-single">
            <h1 class="display-1" id="my-icon-3">{{ user.name }}'s Profile</h1>
            <br />
            <div v-if="!showEdit">
              <br />
              <h3>
                NAME
                <h3 class="display-6" id="my-icon-3">{{ user.name }}</h3>
                <br />
              </h3>
              <br />
              <h3>
                EMAIL
                <h3 class="display-6" id="my-icon-3">{{ user.email }}</h3>
                <br />
              </h3>

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
                  <h1>Edit User</h1>
                  <ul>
                    <li class="text-danger" v-for="error in errors" v-bind:key="error">
                      {{ error }}
                    </li>
                  </ul>
                  <div class="form-group">
                    <label>Name:</label>
                    <input type="text" class="form-control" v-model="user.name" placeholder="Name" />
                  </div>

                  <div class="form-group">
                    <label>Email:</label>
                    <input type="text" class="form-control" v-model="user.email" />
                  </div>
                  <div class="form-group">
                    <label>Update Password:</label>
                    <input type="password" class="form-control" v-model="user.password" />
                  </div>
                  <div class="form-group">
                    <label>Update Password Confirmation:</label>
                    <input type="password" class="form-control" v-model="user.password_confirmation" />
                  </div>

                  <input type="submit" class="btn btn-primary" value="Submit" />
                </form>
              </div>
            </span>
            <!-- delete user -->
            <br />
            <button v-on:click="destroyUser()" id="custom-button-4">Delete Account</button>
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
