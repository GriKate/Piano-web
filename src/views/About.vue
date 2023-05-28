<template>
  <div class="about">
    <h2 class="about-title">We’re so glad to have you here!</h2>
    <p class="about-text pt-3">
      Ultimate-piano is designed to make learning new piano pieces easier! We’ve
      worked out an easy and comprehensive way to learn new piano pieces without
      notes. Ultimate-piano is a piano learning software for beginners.
    </p>
    <p class="about-text pt-3">
      We’re a startup, a small team of enthusiasts from all over Russia. We’re
      We’re eager to hear from you.
    </p>
    <p class="about-text pt-3">
      Our contacts:
      <a href="mailto:info@ultimate-piano.net?subject=Ultimate Piano Feedback"
        >info@ultimate-piano.net</a
      >
    </p>
  </div>
</template>

<script>
import LayoutPiano from '../layouts/LayoutPiano';

export default {
  name: 'About',
  created() {
    this.$emit('update:layout', LayoutPiano);
  },
};
</script>

<style scoped>
.about {
  align-items: center;
  width: 800px;
  margin-top: 170px;
  margin-left: 308px;
}
.about-title {
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
}
.about-text {
  font-size: 18px;
  line-height: 25px;
}
</style>
