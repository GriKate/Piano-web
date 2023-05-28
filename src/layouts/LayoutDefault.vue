<template>
  <div class="layout__default">
    <MenuBar ref="menu" @show="show" />
    <div class="wrapper">
      <div class="layout__container">
        <slot />
      </div>
    </div>
    <Footer />
    <ModalWrapper
      ref="wrapper"
      v-model="isShown"
      :modal-name="modals"
      @close="close"
      @change="change"
    />
  </div>
</template>

<script>
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';
import ModalWrapper from '../components/auth/ModalWrapper';
import tabMixin from '@/mixins/tabMixin';

export default {
  name: 'LayoutDefault',
  components: { ModalWrapper, MenuBar, Footer },
  mixins: [tabMixin],
  data: () => ({
    showAuth: false,
    showRegistry: false,
    showUserInfo: false,
    showWrapper: false,
  }),
};
</script>

<style scoped>
.layout__default {
  min-height: 100vh;
  position: relative;
}
.wrapper {
  display: flex;
  padding-top: 90px;
  min-height: calc(100vh - 330px);
}
.fullscreen-wrapper {
  padding-top: 0;
}
.layout__container {
  width: 100%;
  display: flex;
}
</style>
