<template>
  <div class="container">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import LayoutDefault from '@/layouts/LayoutDefault';

export default {
  name: 'ConfirmEmail',
  data() {
    return {
      url: 'https://pepperfm.ru/api/v1/register/confirm',
      data: {
        hash: '',
      },
      message: '',
    };
  },
  created() {
    this.$emit('update:layout', LayoutDefault);
  },
  mounted() {
    const hash = this.$route.params.hash;
    this.data.hash = hash;
    this.$http
      .post(`${this.url}/${hash}`, this.data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.message = res.data.message;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
