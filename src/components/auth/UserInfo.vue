<template>
  <div class="auth">
    <div class="auth__wrapper">
      <div class="close" @click="$emit('close')">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.2983 0.708271C13.2058 0.615567 13.0959 0.542019 12.9749 0.491838C12.8539 0.441657 12.7242 0.415826 12.5933 0.415826C12.4623 0.415826 12.3326 0.441657 12.2116 0.491838C12.0907 0.542019 11.9808 0.615567 11.8883 0.708271L6.99827 5.58827L2.10827 0.69827C2.01569 0.605688 1.90578 0.532248 1.78481 0.482143C1.66385 0.432038 1.5342 0.40625 1.40327 0.40625C1.27234 0.40625 1.14269 0.432038 1.02173 0.482143C0.900763 0.532248 0.790852 0.605688 0.69827 0.69827C0.605688 0.790852 0.532248 0.900763 0.482143 1.02173C0.432038 1.14269 0.40625 1.27234 0.40625 1.40327C0.40625 1.5342 0.432038 1.66385 0.482143 1.78481C0.532248 1.90578 0.605688 2.01569 0.69827 2.10827L5.58827 6.99827L0.69827 11.8883C0.605688 11.9809 0.532248 12.0908 0.482143 12.2117C0.432038 12.3327 0.40625 12.4623 0.40625 12.5933C0.40625 12.7242 0.432038 12.8539 0.482143 12.9748C0.532248 13.0958 0.605688 13.2057 0.69827 13.2983C0.790852 13.3909 0.900763 13.4643 1.02173 13.5144C1.14269 13.5645 1.27234 13.5903 1.40327 13.5903C1.5342 13.5903 1.66385 13.5645 1.78481 13.5144C1.90578 13.4643 2.01569 13.3909 2.10827 13.2983L6.99827 8.40827L11.8883 13.2983C11.9809 13.3909 12.0908 13.4643 12.2117 13.5144C12.3327 13.5645 12.4623 13.5903 12.5933 13.5903C12.7242 13.5903 12.8539 13.5645 12.9748 13.5144C13.0958 13.4643 13.2057 13.3909 13.2983 13.2983C13.3909 13.2057 13.4643 13.0958 13.5144 12.9748C13.5645 12.8539 13.5903 12.7242 13.5903 12.5933C13.5903 12.4623 13.5645 12.3327 13.5144 12.2117C13.4643 12.0908 13.3909 11.9809 13.2983 11.8883L8.40827 6.99827L13.2983 2.10827C13.6783 1.72827 13.6783 1.08827 13.2983 0.708271Z"
            fill="#CFCFD7"
          />
        </svg>
      </div>
      <h3 class="auth__header">You have registered!</h3>
      <p class="auth__header-text">
        Enter additional information about yourself
      </p>
      <div class="auth__block">
        <p class="auth__form-text">Your first name</p>
        <form class="auth__form">
          <input
            v-model="data.email"
            class="auth__input"
            type="email"
            placeholder="enter first name"
          />
        </form>
      </div>
      <div class="auth__block">
        <p class="auth__form-text">Your last name</p>
        <form class="auth__form">
          <input
            v-model="data.name"
            class="auth__input"
            type="text"
            placeholder="enter last name"
          />
        </form>
      </div>
      <div class="auth__block">
        <div class="auth__block-container">
          <p class="auth__form-text">Your country</p>
        </div>
        <form class="auth__form">
          <input
            v-model="data.password"
            class="auth__input"
            type="password"
            placeholder="enter country"
          />
        </form>
      </div>
      <div class="auth__block">
        <a class="auth__link" @click="register">Enter</a>
      </div>
      <div class="auth__block">
        <a class="auth__link" @click="register">Skip</a>
      </div>
      <div class="auth__bottom">
        <p class="bottom-text">Already have an account?</p>
        <a class="auth__reg-link" @click="$emit('change', 'auth')">Log in</a>
      </div>
    </div>
  </div>
</template>

<script>
import '../../styles/auth.css';

export default {
  name: 'UserInfo',
  data() {
    return {
      url: 'https://pepperfm.ru/api/v1/register',
      data: {
        email: '',
        password: '',
        password_confirmation: '',
        name: '',
      },
    };
  },
  methods: {
    changeModal(name) {
      this.close();
      this.$emit('login', name);
    },
    async register() {
      const res = await this.$http
        .post(this.url, this.data)
        .then((data) => {
          console.log(data);
          // if (data) {
          //   this.$emit('login', 'user');
          // }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped></style>
