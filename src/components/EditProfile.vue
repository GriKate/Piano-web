<template>
  <div class="edit-container">
    <h1 class="edit-head">Edit profile</h1>
    <form action="" class="edit-form" @submit="handleSaveChanges($event)">
      <label
        :class="{ error: !emailValid }"
        class="form-input-head"
        for="edit-email"
      >
        Email address
      </label>
      <input
        id="edit-email"
        v-model="userData.email"
        :class="{ error: !emailValid }"
        type="email"
        class="edit-form-input"
        placeholder="helloworld@gmail.com"
      />
      <label
        :class="{ error: !usernameValid }"
        class="form-input-head"
        for="edit-username"
      >
        Username
      </label>
      <input
        id="edit-username"
        v-model="userData.username"
        :class="{ error: !usernameValid }"
        type="text"
        class="edit-form-input"
        placeholder="@helloworld239"
      />
      <label
        :class="{ error: !fNameValid }"
        class="form-input-head"
        for="edit-fName"
      >
        Your first name
      </label>
      <input
        id="edit-fName"
        v-model="userData.firstName"
        :class="{ error: !fNameValid }"
        type="text"
        class="edit-form-input"
        placeholder="enter first name"
      />
      <label
        :class="{ error: !lNameValid }"
        class="form-input-head"
        for="edit-lName"
      >
        Your last name
      </label>
      <input
        id="edit-lName"
        v-model="userData.lastName"
        :class="{ error: !lNameValid }"
        type="text"
        class="edit-form-input"
        placeholder="enter last name"
      />
      <label
        :class="{ error: !countryValid }"
        class="form-input-head"
        for="edit-country"
      >
        Country
      </label>
      <input
        id="edit-country"
        v-model="userData.country"
        :class="{ error: !countryValid }"
        type="text"
        class="edit-form-input"
        placeholder="enter country"
      />
      <button class="save-button">Save changes</button>
      <a href="#" class="edit-cancel-btn" @click="cancelProfileEdit($event)">
        Cancel
      </a>
    </form>
  </div>
</template>

<script>
import LayoutDefault from '../layouts/LayoutDefault.vue';
import '../styles/editProfile/editProfile.css';
export default {
  name: 'EditProfile',
  data: () => ({
    userData: {
      email: '',
      username: '',
      firstName: '',
      lastName: '',
      country: '',
    },
    emailValid: true,
    usernameValid: true,
    fNameValid: true,
    lNameValid: true,
    countryValid: true,
  }),
  created() {
    this.$emit('update:layout', LayoutDefault);
  },
  methods: {
    handleSaveChanges(event) {
      event.preventDefault();
      if (this.userDataIsValid()) {
        this.saveUserData();
        console.log(this.$store.getters.userData);
      } else {
        this.handleErrorData();
      }
    },
    cancelProfileEdit(event) {
      event.preventDefault();
    },
    userDataIsValid() {
      this.emailIsValid();
      this.usernameIsValid();
      this.nameIsValid('fName', this.userData.firstName);
      this.nameIsValid('lName', this.userData.lastName);
      this.nameIsValid('country', this.userData.country);
      return (
        this.emailValid &&
        this.usernameValid &&
        this.fNameValid &&
        this.lNameValid &&
        this.countryValid
      );
    },
    emailIsValid() {
      if (/(?=.*[@])/gi.test(this.userData.email)) {
        this.emailValid = true;
        return true;
      } else {
        this.emailValid = false;
        return false;
      }
    },
    usernameIsValid() {
      if (/\@+(?=.*[A-Za-z])/gi.test(this.userData.username)) {
        this.usernameValid = true;
        return true;
      } else {
        this.usernameValid = false;
        return false;
      }
    },
    nameIsValid(key, name) {
      const validValue = /(?=.*[A-Za-zА-Я-А-Я]){2,15}/gi.test(name);
      if (validValue) {
        if (key == 'fName') {
          this.fNameValid = true;
        } else if (key == 'lName') {
          this.lNameValid = true;
        } else {
          this.countryValid = true;
        }
      } else {
        if (key == 'fName') {
          this.fNameValid = false;
        } else if (key == 'lName') {
          this.lNameValid = false;
        } else {
          this.countryValid = false;
        }
      }
      return validValue;
    },
    saveUserData() {
      this.$store.commit('saveUserData', this.userData);
      this.userData = {
        email: '',
        username: '',
        firstName: '',
        lastName: '',
        country: '',
      };
    },
    handleErrorData() {
      console.log(false);
    },
  },
};
</script>
