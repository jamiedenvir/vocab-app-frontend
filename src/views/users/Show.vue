<template>
  <div class="users-show">
    <h1>{{ message }}</h1>
    <div v-if="!showEdit">
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div>

    <!-- edit user -->
    <span>
      <div v-if="!showEdit">
        <button v-on:click="showEdit = !showEdit">Edit Your Info</button>
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
    <button v-on:click="destroyUser()">Delete Account</button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "User Show Page",
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
          this.$router.push("/");
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
