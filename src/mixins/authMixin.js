export default {
  data() {
    return {
      usernameUrl: 'https://pepperfm.ru/api/v1/user',
      logoutEmailURL: 'https://pepperfm.ru/api/v1/logout',
    };
  },
  methods: {
    async getUsername() {
      if (!this.$store.getters.userName) {
        const access_token = localStorage.token;
        const response = await this.$http
          .get(this.usernameUrl, {
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${access_token}`,
            },
          })
          .then((data) => {
            this.$store.commit('mutateUserName', data.data.data.name);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    async logout(switchMenu) {
      const access_token = this.$store.getters.token;
      const res = await this.$http
        .get(this.logoutEmailURL, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then((data) => {
          if (data.status === 200) {
            localStorage.removeItem('token');
            switchMenu();
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
