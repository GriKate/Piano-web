<template>
  <div class="LayoutPiano">
    <div class="wrapper">
      <MenuLeft />
      <div class="main-section">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import MenuLeft from '../components/MenuLeft';
export default {
  name: 'LayoutPiano',
  components: { MenuLeft },
};
</script>

<style scoped>
.wrapper {
  height: 100vh;
  padding-left: 110px;
  padding-right: 30px;
}
.main-section {
  width: 100%;
  display: flex;
}
</style>
